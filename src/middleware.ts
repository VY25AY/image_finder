import { NextResponse } from 'next/server';

export async function middleware(req) {
    // Example: Authentication middleware
    const token = req.cookies.get('token');

    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    // Example: Logging middleware
    console.log(`Request made to: ${req.nextUrl.pathname}`);

    return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
    matcher: ['/api/:path*', '/protected/:path*'],
};