import { NextResponse } from "next/server";

export function middleware(req) {
    console.log('Middleware executed for:', req.url);
    return NextResponse.next();
}

export const config = {
    matcher: '/api/:path*',
};