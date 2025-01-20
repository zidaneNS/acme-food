import { sql } from "@vercel/postgres";
import { DisplayCartType, FoodByCategory, FoodCategory, FoodType, NoteDisplayType, NoteType, UserType } from "./defintion";
import { JWTPayload, SignJWT, jwtVerify } from "jose";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: JWTPayload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256'})
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(encodedKey);
}

export async function decrypt(session: string | undefined = '') {
    try {
        const { payload } = await jwtVerify(session, encodedKey, { algorithms: ['HS256'] });
        
        return payload;
    } catch (err) {
        console.error('Failed to veryfy session', err);
    }
}

export async function fetchFoodsByCategory(categories: FoodCategory[] | string[]): Promise<FoodByCategory[][] | undefined> {
    try {
        const result = await Promise.all(categories.map(async (category) => {
            const data = await sql<FoodByCategory>`SELECT id, name, price, img_url FROM foods WHERE category = ${category};`;
            return data.rows;
        }));

        return result;
    } catch (err) {
        console.error(err);
    }

}

export async function fetchFoodsByCategorySearch(categories: FoodCategory[] | string[], term: string): Promise<FoodByCategory[][] | undefined> {
    try {
        const result = await Promise.all(categories.map(async (category) => {
            const data = await sql<FoodByCategory>`SELECT id, name, price, img_url FROM foods WHERE category = ${category} AND name ILIKE ${`%${term}%`};`;
            return data.rows;
        }));

        return result;
    } catch (err) {
        console.error(err);
    }
}

export async function fetchAllFoods(): Promise<FoodType[] | undefined> {
    try {
        const data = await sql<FoodType>`SELECT * FROM foods;`;
        return data.rows;
    } catch (err) {
        console.error(err);
    }
}

export async function fetchUserById(id: number): Promise<UserType | undefined> {
    try {
        const data = await sql<UserType>`SELECT * FROM users WHERE id = ${id};`;
    
        return data.rows[0];
    } catch (err) {
        console.error(err);
    }
}

export async function fetchUserByEmail(email: string): Promise<UserType | undefined> {
    try {
        const data = await sql<UserType>`SELECT * FROM users WHERE email = ${email};`;

        return data.rows[0];
    } catch (err) {
        console.error(err);
    }
}

export async function fetchDisplayCart(userId: number | string): Promise<DisplayCartType[] | undefined> {
    try {
        const data = await sql<DisplayCartType>`SELECT carts.id, foods.name, foods.price, carts.amount, foods.img_url, note_cart.note_id FROM carts JOIN foods ON carts.food_id = foods.id JOIN note_cart ON carts.id = note_cart.cart_id JOIN notes ON note_cart.note_id = notes.id WHERE carts.user_id = ${userId} AND notes.status = 'PENDING';`;

        const result: DisplayCartType[] = data.rows.map(item => {
            return { ...item, totalprice: item.price * item.amount }
        })
        return result;
    } catch (err) {
        console.error(err);
    }
}

export async function fetchNotesByUserId(userId: number | string): Promise<NoteType[] | undefined> {
    try {
        const data = await sql<NoteType>`SELECT * FROM notes WHERE user_id = ${userId}`;

        return data.rows;
    } catch (err) {
        console.error(err);
    }
}

export async function fetchCartsByNote(id: number | string): Promise<DisplayCartType[] | undefined> {
    try {
        const data = await sql<DisplayCartType>`SELECT DISTINCT foods.name, foods.price, foods.img_url, carts.amount FROM note_cart JOIN carts ON note_cart.cart_id = carts.id JOIN foods ON carts.food_id = foods.id WHERE note_cart.note_id = ${id}`;

        const result = data.rows.map(item => {
            return { ...item, totalprice: item.price * item.amount }
        })
        return result;
    } catch (err) {
        console.error(err);
    }
}

export async function fetchNoteById (id: number | string): Promise<NoteDisplayType | undefined> {
    try {
        const data = await sql<NoteDisplayType>`SELECT status, totalprice, createdat, user_id FROM notes WHERE id = ${id}`;

        return data.rows[0];
    } catch (err) {
        console.error(err);
    }
}

export async function fetchSetOfFoods(userId: number | string | undefined): Promise<(number | string)[] | undefined> {
    try {
        const data = await sql<{food_id: string | number}>`SELECT food_id FROM carts JOIN note_cart ON carts.id = note_cart.cart_id JOIN notes ON note_cart.note_id = notes.id WHERE status = 'PENDING' AND notes.user_id = ${userId}`;

        const result = data.rows.map(item => item.food_id);
        return result;
    } catch (err) {
        console.error(err);
    }
}