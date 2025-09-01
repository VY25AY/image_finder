import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const url = request.url;

    // Proxy logic to forward the request to another API
    const response = await fetch(url, {
        method: request.method,
        headers: {
            ...Object.fromEntries(request.headers),
        },
        body: request.method === 'POST' ? request.body : null,
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
}