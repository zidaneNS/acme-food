import Image from "next/image";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { FoodByCategory } from "@/app/lib/defintion";

export default function Card({name, price, img_url}: FoodByCategory) {
    return (
        <div className="flex flex-col py-2 px-4 border bg-white border-orange-500 rounded-xl gap-y-2">
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-slate-500 text-lg">IDR.{price}</p>
            <span className="border border-slate-700"></span>
            <div className="flex justify-center items-center py-2 px-2">
                <Image
                    src={img_url}
                    width={600}
                    height={400}
                    alt="fried rice"
                    className="w-40 h-40 rounded-xl border-2 border-orange-500"
                />
            </div>
            <button className="flex justify-center items-center gap-x-2 py-2 px-4 bg-blue-700 rounded-xl text-white hover:bg-blue-600 transition duration-300">
                <PlusCircleIcon className="w-6"></PlusCircleIcon>
                Add to Cart
            </button>
        </div>
    )
}