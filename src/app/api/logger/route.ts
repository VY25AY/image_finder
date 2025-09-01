import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { message, level } = await request.json();

    // Here you would typically log the message to a logging service or database
    console.log(`[${level}] ${message}`);

    return NextResponse.json({ status: 'success', message: 'Log recorded' });
}