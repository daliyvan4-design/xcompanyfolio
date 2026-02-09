import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const ANALYTICS_FILE = path.join(DATA_DIR, 'analytics.json');
const SUBSCRIBERS_FILE = path.join(DATA_DIR, 'subscribers.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
}

// Helper to read JSON
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

// Helper to write JSON
function writeJSON(filePath: string, data: any) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// --- Analytics Actions ---

export async function trackVisit() {
    const data = readJSON(ANALYTICS_FILE, { visits: 0, clicks: {} });
    data.visits = (data.visits || 0) + 1;
    writeJSON(ANALYTICS_FILE, data);
    return data;
}

export async function trackClick(type: string) {
    const data = readJSON(ANALYTICS_FILE, { visits: 0, clicks: {} });
    data.clicks = data.clicks || {};
    data.clicks[type] = (data.clicks[type] || 0) + 1;
    writeJSON(ANALYTICS_FILE, data);
    return data;
}

export async function getAnalytics() {
    return readJSON(ANALYTICS_FILE, { visits: 0, clicks: {} });
}

// --- Newsletter Actions ---

export async function addSubscriber(data: { name: string; phone: string; email: string }) {
    const subscribers = readJSON(SUBSCRIBERS_FILE, []);
    // Simple duplicate check based on email or phone
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
    return readJSON(SUBSCRIBERS_FILE, []);
}
