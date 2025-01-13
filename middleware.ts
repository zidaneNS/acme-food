import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./app/lib/action/session";
import { decrypt } from "./app/lib/data";
import { cookies } from "next/headers";

const publicRoutes = ['/auth/login', '/auth/register', '/home', '/home/about', 'home/contact', '/'];
const protectedRoutes = ['/home/dashboard', '/home/cart'];

export default async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/home')) {
        await updateSession();
    }

    const path = request.nextUrl.pathname;
    const isPublic = publicRoutes.includes(path);
    const isProtected = protectedRoutes.includes(path);

    const cookie = (await cookies()).get('session')?.value;
    const session = await decrypt(cookie);

    // if (isProtected && !session?.userId) return NextResponse.redirect(new URL('/auth/login', request.url));

    // if(isPublic && session?.userId && !request.nextUrl.pathname.startsWith('/home')) return NextResponse.redirect(new URL('/home?category=food-drink-dessert', request.url));

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}