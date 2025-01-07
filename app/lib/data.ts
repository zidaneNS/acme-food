import { sql } from "@vercel/postgres";
import { DisplayCartType, FoodByCategory, FoodCategory, FoodType, NoteType, UserType } from "./defintion";

export async function fetchFoodsByCategory(categories: FoodCategory[] | string[]): Promise<FoodByCategory[][] | undefined> {
    try {
        const result = await Promise.all(categories.map(async (category) => {
            const data = await sql<FoodByCategory>`SELECT id, name, price, img_url FROM foods WHERE category = ${category};`;
            return data.rows;
        }))

        return result;
    } catch (err) {
        console.log(err);
    }

}

export async function fetchAllFoods(): Promise<FoodType[] | undefined> {
    try {
        const data = await sql<FoodType>`SELECT * FROM foods;`;
        return data.rows;
    } catch (err) {
        console.log(err);
    }
}

export async function fetchUserById(id: number): Promise<UserType | undefined> {
    try {
        const data = await sql<UserType>`SELECT * FROM users WHERE id = ${id};`;
    
        return data.rows[0];
    } catch (err) {
        console.log(err);
    }
}

export async function fetchDisplayCart(id: number): Promise<DisplayCartType[] | undefined> {
    try {
        const data = await sql<DisplayCartType>`SELECT foods.name, foods.price, carts.amount, foods.img_url FROM carts JOIN foods ON carts.food_id = foods.id WHERE carts.user_id = ${id};`;

        const result: DisplayCartType[] = data.rows.map(item => {
            return { ...item, totalPrice: item.price * item.amount }
        })
        return result;
    } catch (err) {
        console.log(err);
    }
}

export async function fetchNotesById(id: number): Promise<NoteType[] | undefined> {
    try {
        const data = await sql<NoteType>`SELECT * FROM notes WHERE user_id = ${id}`;

        return data.rows;
    } catch (err) {
        console.log(err);
    }
}

export async function fetchCartsByNote(id: number): Promise<DisplayCartType[] | undefined> {
    try {
        const data = await sql<DisplayCartType>`SELECT foods.name, foods.price, foods.img_url, carts.amount FROM note_cart JOIN carts ON note_cart.cart_id = carts.id JOIN foods ON carts.food_id = foods.id WHERE note_cart.note_id = ${id}`;

        const result = data.rows.map(item => {
            return { ...item, totalPrice: item.price * item.amount }
        })
        return result;
    } catch (err) {
        console.log(err);
    }
}