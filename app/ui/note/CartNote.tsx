import { DisplayCartType } from "@/app/lib/defintion";
import Image from "next/image";

export default function CartNote({ cart }: { cart: DisplayCartType }) {
    return (
        <div className="w-full rounded-lg bg-white flex gap-x-5 p-4 items-center border-b-2 border-slate-400 shadow">
            <Image
                src={cart.img_url}
                width={100}
                height={100}
                alt="food img"
                className="rounded-lg w-16 h-16 md:w-32 md:h-32 border-b-2 shadow-xl border-slate-700"
            />
            <div className="rounded-lg flex flex-col items-center gap-y-2">
                <h1 className="text-3xl text-slate-500">IDR {cart.price}</h1>
                <p className="text-lg">{cart.name}</p>
                <p className="bg-blue-800 py-2 px-10 rounded-xl text-white text-sm font-bold text-center">{cart.amount}x</p>
            </div>
        </div>
    )
}