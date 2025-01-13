import 'server-only';

import { cache } from 'react';
import { cookies } from 'next/headers';
import { decrypt } from './data';
import { sql } from '@vercel/postgres';
// import { redirect } from 'next/navigation';

export const verifySession = cache(async () => {
    const cookie = (await cookies()).get('session')?.value;
    const session = await decrypt(cookie);

    // if (!session?.user) {
    //     redirect('/auth/login');
    // }

    return { isAuth: true, userId: session?.userId as string }
})

export const getUser = cache(async () => {
    const session = await verifySession();
    if (!session) return null;
    
    try {
        const data = await sql`SELECT name, email, roles, img_url FROM users WHERE id = ${session.userId};`;

        return data.rows[0];
    } catch (err) {
        console.log('failed to fetch user :', err);
    }
})