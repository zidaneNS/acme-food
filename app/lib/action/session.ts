import 'server-only';

import { decrypt, encrypt } from '../data';
import { cookies } from 'next/headers';

export async function createSession(userId: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const session = await encrypt({ userId, expiresAt });
    (await cookies()).set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/'
    });
}

export async function updateSession() {
    const session = (await cookies()).get('session')?.value;
    const payload = await decrypt(session);

    if (!session || !payload) return null

    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    (await cookies()).set('session', session, {
        httpOnly: true,
        secure: true,
        expires,
        sameSite: 'lax',
        path: '/'
    });
}

export async function deleteSession() {
    (await cookies()).delete('session');
}