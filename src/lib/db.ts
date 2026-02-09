import fs from 'fs';
import path from 'path';
import { sql } from '@vercel/postgres';

// --- Local File Setup (Fallback) ---
const DATA_DIR = path.join(process.cwd(), 'data');
const ANALYTICS_FILE = path.join(DATA_DIR, 'analytics.json');
const SUBSCRIBERS_FILE = path.join(DATA_DIR, 'subscribers.json');

if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
}

const USE_POSTGRES = !!process.env.POSTGRES_URL;

// --- Helper for Local JSON ---
function readJSON(filePath: string, defaultValue: any) {
    try {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2));
            return defaultValue;
        }
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return defaultValue;
    }
}

function writeJSON(filePath: string, data: any) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// --- DB Initialization ---
async function initDB() {
    if (!USE_POSTGRES) return;
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS analytics (
                event_key VARCHAR(255) PRIMARY KEY,
                count INTEGER DEFAULT 0
            );
        `;
        await sql`
            CREATE TABLE IF NOT EXISTS subscribers (
                id SERIAL PRIMARY KEY,
                name TEXT,
                email TEXT UNIQUE,
                phone TEXT,
                date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
    } catch (e) {
        console.error("Failed to init DB:", e);
    }
}

// Ensure DB is initialized (lazy load attempt)
let dbInitialized = false;
async function ensureDB() {
    if (USE_POSTGRES && !dbInitialized) {
        await initDB();
        dbInitialized = true;
    }
}

// --- Analytics Actions ---

export async function trackVisit() {
    await ensureDB();
    if (USE_POSTGRES) {
        try {
            await sql`
                INSERT INTO analytics (event_key, count)
                VALUES ('visits', 1)
                ON CONFLICT (event_key)
                DO UPDATE SET count = analytics.count + 1;
            `;
            // Return dummy or actual current count if needed, but for tracking void is fine
            // To match previous return type style:
            const result = await sql`SELECT count FROM analytics WHERE event_key = 'visits'`;
            return { visits: result.rows[0]?.count || 0 };
        } catch (e) {
            console.error("DB Error trackVisit:", e);
        }
    }

    // Fallback
    const data = readJSON(ANALYTICS_FILE, { visits: 0, clicks: {} });
    data.visits = (data.visits || 0) + 1;
    writeJSON(ANALYTICS_FILE, data);
    return data;
}

export async function trackClick(type: string) {
    await ensureDB();
    if (USE_POSTGRES) {
        try {
            const key = `click_${type}`;
            await sql`
                INSERT INTO analytics (event_key, count)
                VALUES (${key}, 1)
                ON CONFLICT (event_key)
                DO UPDATE SET count = analytics.count + 1;
            `;
            return { success: true };
        } catch (e) {
            console.error("DB Error trackClick:", e);
        }
    }

    // Fallback
    const data = readJSON(ANALYTICS_FILE, { visits: 0, clicks: {} });
    data.clicks = data.clicks || {};
    data.clicks[type] = (data.clicks[type] || 0) + 1;
    writeJSON(ANALYTICS_FILE, data);
    return data;
}

export async function getAnalytics() {
    await ensureDB();
    if (USE_POSTGRES) {
        try {
            const result = await sql`SELECT * FROM analytics`;
            const data = { visits: 0, clicks: {} as Record<string, number> };

            result.rows.forEach(row => {
                if (row.event_key === 'visits') {
                    data.visits = row.count;
                } else if (row.event_key.startsWith('click_')) {
                    const type = row.event_key.replace('click_', '');
                    data.clicks[type] = row.count;
                }
            });
            return data;
        } catch (e) {
            console.error("DB Error getAnalytics:", e);
            return { visits: 0, clicks: {} };
        }
    }

    return readJSON(ANALYTICS_FILE, { visits: 0, clicks: {} });
}

// --- Newsletter Actions ---

export async function addSubscriber(data: { name: string; phone: string; email: string }) {
    await ensureDB();
    if (USE_POSTGRES) {
        try {
            // Insert ignore duplicate email
            await sql`
             INSERT INTO subscribers (name, email, phone, date)
             VALUES (${data.name}, ${data.email}, ${data.phone}, NOW())
             ON CONFLICT (email) DO NOTHING;
           `;
            // Check if it was inserted? Maybe not crucial for this simple use case
            // Return "all subscribers" to match previous behavior or just the new list
            return await getSubscribers();
        } catch (e) {
            console.error("DB Error addSubscriber:", e);
        }
    }

    // Fallback
    const subscribers = readJSON(SUBSCRIBERS_FILE, []);
    if (!subscribers.find((s: any) => s.email === data.email || s.phone === data.phone)) {
        subscribers.push({
            ...data,
            date: new Date().toISOString()
        });
        writeJSON(SUBSCRIBERS_FILE, subscribers);
    }
    return subscribers;
}

export async function getSubscribers() {
    await ensureDB();
    if (USE_POSTGRES) {
        try {
            const result = await sql`SELECT * FROM subscribers ORDER BY date DESC`;
            return result.rows;
        } catch (e) {
            console.error("DB Error getSubscribers:", e);
            return [];
        }
    }

    return readJSON(SUBSCRIBERS_FILE, []);
}
