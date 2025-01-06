import { sql } from "@vercel/postgres";
import { UserType } from "../lib/defintion";
import { fetchCartsByNote, fetchDisplayCart, fetchFoodsByCategory, fetchNotesById, fetchUserById } from "../lib/data";

async function getUsers(): Promise<UserType[] | undefined> {
    try {
        const data = await sql<UserType>`SELECT * FROM users`;
        return data.rows;
    } catch (error) {
        console.log(error);
    }
}

export async function GET() {
    try {

        const result = await fetchCartsByNote(2);

        return Response.json({ result });
    } catch (error) {
        return Response.json({ error }, { status: 500});
    }
}