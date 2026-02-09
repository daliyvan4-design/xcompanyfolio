import { NextResponse } from 'next/server';
import { trackClick, trackVisit, getAnalytics, addSubscriber, getSubscribers } from '@/lib/db';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    if (type === 'subscribers') {
        const data = await getSubscribers();
        return NextResponse.json(data);
    }

    const data = await getAnalytics();
    return NextResponse.json(data);
}

export async function POST(request: Request) {
    const body = await request.json();
    const { action, payload } = body;

    if (action === 'visit') {
        await trackVisit();
        return NextResponse.json({ success: true });
    }

    if (action === 'click') {
        await trackClick(payload.type);
        return NextResponse.json({ success: true });
    }

    if (action === 'subscribe') {
        await addSubscriber(payload);
        return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
}
