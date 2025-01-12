import 'server-only';

import { cache } from 'react';
import { cookies } from 'next/headers';
import { decrypt, fetchUserById } from './data';
// import { redirect } from 'next/navigation';

export const verifySession = cache(async () => {
    const cookie = (await cookies()).get('session')?.value;
    const session = await decrypt(cookie);

    // if (!session?.user) {
    //     redirect('/auth/login');
    // }

    return { isAuth: true, userId: session?.userId as number }
})

export const getUser = cache(async () => {
    const session = await verifySession();
    if (!session) return null;
    
    try {
        const data = await fetchUserById(session.userId);
        const user = {
            name: data?.name,
            email: data?.email,
            roles: data?.roles,
            img_url: data?.img_url
        }

        return user;
    } catch (err) {
        console.log('failed to fetch user :', err);
    }
})