import { NextResponse } from "next/server";

export default function middleware(req) {

    const protectedRoutes = [
        '/dashboard',
        '/dashboard/se'
    ]

    const verify = req.cookies.get('u')
    const isProtected = protectedRoutes.includes(req.nextUrl.pathname)

    if (!verify && isProtected) {
        return NextResponse.redirect('http://localhost:3000/login')
    }

    if (verify && req.nextUrl.pathname === '/login') {
        return NextResponse.redirect('http://localhost:3000/dashboard/se') 
    }
}

export const config = {
    matcher: ['/login', '/dashboard/:path*'],
}