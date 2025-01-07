// import { sql } from "@vercel/postgres";
// import { UserType } from "../lib/defintion";
import { fetchFoodsByCategory } from "../lib/data";

export async function GET() {
    try {

        const result = await fetchFoodsByCategory(['drink', 'food', 'dessert']);

        return Response.json({ result });
    } catch (error) {
        return Response.json({ error }, { status: 500});
    }
}