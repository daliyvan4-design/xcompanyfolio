import fs from 'fs';
import path from 'path';
import { put, list, del } from '@vercel/blob';

// --- Local File Setup (Fallback) ---
const DATA_DIR = path.join(process.cwd(), 'data');
const ANALYTICS_FILE = path.join(DATA_DIR, 'analytics.json');
const SUBSCRIBERS_FILE = path.join(DATA_DIR, 'subscribers.json');

if (!fs.existsSync(DATA_DIR)) {
    try {
        fs.mkdirSync(DATA_DIR);
    } catch (e) {
        // Ignore error if directory already exists or permission denied in serverless
    }
}

const USE_BLOB = !!process.env.BLOB_READ_WRITE_TOKEN;

// --- Helper for Local JSON ---
function readJSON(filePath: string, defaultValue: any) {
    try {
        if (!fs.existsSync(filePath)) {
            // Only try to write if we can (local dev)
            try {
                fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2));
            } catch (e) { }
            return defaultValue;
        }
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return defaultValue;
    }
}

function writeJSON(filePath: string, data: any) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (e) {
        console.error("Local write failed:", e);
    }
}

// --- Helper for Blob Storage ---
// Note: This is not efficient for high traffic as it reads/writes the full file every time.
// But for a simple portfolio admin panel, it works fine to persist data.

async function getBlobData(filename: string, defaultValue: any) {
    if (!USE_BLOB) return readJSON(path.join(DATA_DIR, filename), defaultValue);

    try {
        // List blobs to find the file
        const { blobs } = await list({ prefix: filename, limit: 1 });
        if (blobs.length > 0) {
            const response = await fetch(blobs[0].url);
            return await response.json();
        }
        return defaultValue;
    } catch (error) {
        console.error(`Blob Read Error (${filename}):`, error);
        return defaultValue;
    }
}

async function saveBlobData(filename: string, data: any) {
    if (!USE_BLOB) return writeJSON(path.join(DATA_DIR, filename), data);

    try {
        // Overwrite the file
        await put(filename, JSON.stringify(data, null, 2), { access: 'public', addRandomSuffix: false });
    } catch (error) {
        console.error(`Blob Write Error (${filename}):`, error);
    }
}

// --- Analytics Actions ---

export async function trackVisit() {
    const data = await getBlobData('analytics.json', { visits: 0, clicks: {} });
    data.visits = (data.visits || 0) + 1;
    // Fire and forget save to not block response too much, 
    // though in serverless better to await to ensure execution.
    await saveBlobData('analytics.json', data);
    return data;
}

export async function trackClick(type: string) {
    const data = await getBlobData('analytics.json', { visits: 0, clicks: {} });
    data.clicks = data.clicks || {};
    data.clicks[type] = (data.clicks[type] || 0) + 1;
    await saveBlobData('analytics.json', data);
    return data;
}

export async function getAnalytics() {
    return await getBlobData('analytics.json', { visits: 0, clicks: {} });
}

// --- Newsletter Actions ---

export async function addSubscriber(data: { name: string; phone: string; email: string }) {
    const subscribers = await getBlobData('subscribers.json', []);

    // Simple duplicate check based on email or phone
    if (!subscribers.find((s: any) => s.email === data.email || s.phone === data.phone)) {
        subscribers.push({
            ...data,
            date: new Date().toISOString()
        });
        await saveBlobData('subscribers.json', subscribers);
    }
    return subscribers;
}

export async function getSubscribers() {
    // Force fresh read
    const subscribers = await getBlobData('subscribers.json', []);
    // Sort by date desc
    return subscribers.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
