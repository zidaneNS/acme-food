'use server'

import { redirect } from "next/navigation";
import { getUser } from "../dal";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function addToCart(foodId: number | string): Promise<boolean> {
    const user = await getUser();
    if (!user?.id) redirect('/auth/login');

    try {
             
        const getNoteId: () => Promise<number | string> = async (): Promise<number | string> => {
            const currentNote = await sql<{id: number | string}>`SELECT id FROM notes WHERE user_id = ${user.id} AND status = 'PENDING';`;
            
            if (currentNote.rows.length > 0) {
                const noteId = currentNote.rows[0].id;
                return noteId;
            } else {
                const newNote = await sql`INSERT INTO notes (user_id, status, totalprice) VALUES (${user.id}, 'PENDING', 0) RETURNING id;`;
                const noteId = newNote.rows[0].id;
                return noteId;
            }
        }

        const noteId = await getNoteId();

        const currentCart = await sql<{id: number | string}>`INSERT INTO carts (user_id, food_id, amount) VALUES (${user.id}, ${foodId}, 1) RETURNING id;`;
        const cartId = currentCart.rows[0].id;

        await sql`INSERT INTO note_cart (cart_id, note_id) VALUES (${cartId}, ${noteId})`;

        revalidatePath('/home');
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}

export async function removeFromCart(foodId: number | string): Promise<boolean> {
    const user = await getUser();
    if (!user?.id) redirect('/auth/login');

    try {
        const cart = await sql<{id: number | string}>`SELECT id FROM carts WHERE user_id = ${user.id} AND food_id = ${foodId};`;
        const cartId = cart.rows[0].id;
        await sql`DELETE FROM note_cart WHERE cart_id = ${cartId};`;
        await sql`DELETE FROM carts WHERE id = ${cartId};`;

        revalidatePath('/home');
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}