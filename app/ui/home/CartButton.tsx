import Link from "next/link"
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function CartButton({ userId }: { userId: number | string}) {
    return (
        <Link href={`/home/cart/${userId}`} className="absolute bottom-16 right-24 flex items-center p-2 rounded-xl bg-red-500 hover:bg-red-400 transition duration-300 text-center">
            <ShoppingCartIcon className="w-8 text-white" />
        </Link>
    )
}