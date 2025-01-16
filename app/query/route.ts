// import { sql } from "@vercel/postgres";
// import { UserType } from "../lib/defintion";
// import { getUser } from "../lib/dal";
import { fetchDisplayCart } from "../lib/data";

export async function GET() {
    try {

        const result = await fetchDisplayCart(2);

        return Response.json({ result });
    } catch (error) {
        return Response.json({ error }, { status: 500});
    }
}