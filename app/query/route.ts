import { sql } from "@vercel/postgres";
// import { UserType } from "../lib/defintion";
// import { getUser } from "../lib/dal";
// import { fetchDisplayCart, fetchFoodsByCategory, fetchFoodsByCategorySearch, fetchSetOfFoods, fetchUserByEmail } from "../lib/data";

export async function GET() {
    try {

        const result = await sql`INSERT INTO notes (user_id, status, totalprice) VALUES (3, 'PENDING', 0) RETURNING id;`;
        const data = result.rows[0].id;

        return Response.json({ data });
    } catch (error) {
        return Response.json({ error }, { status: 500});
    }
}