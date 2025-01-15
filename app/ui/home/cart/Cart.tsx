'use client';

import { DisplayCartType } from "@/app/lib/defintion"
import { TrashIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useState } from "react"

export default function Cart({ name, price, img_url, amount }: DisplayCartType ) {
    const [value, setValue] = useState<number>(amount ? amount : 1);
    return (
        <div className="bg-white w-full h-fit px-3 py-2 rounded-lg border-2 border-orange-500 flex flex-col md:flex-row justify-none md:justify-between gap-y-3">
            <div className="flex flex-col md:flex-row gap-y-3 gap-x-2 items-center">
                {/* <span className="border border-orange-500 rounded-full h-24 w-24"></span> */}
                <Image 
                    src={img_url}
                    alt="image"
                    className="rounded-full w-24 h-24"
                    width={400}
                    height={400}
                />
                <div className="flex md:flex-col gap-y-3 gap-x-4">
                    <p className="text-lg text-slate-600 font-bold">{name}</p>
                    <span className="border-2 border-slate-400"></span>
                    <p className="text-lg text-slate-600 font-bold">IDR{price}</p>
                </div>
            </div>
            <div className="flex items-center gap-x-2">
                <input type="number" name="value" min="1" value={value} onChange={(e) => setValue(Number(e.target.value))} className="py-2 w-1/2 md:w-full px-3 border border-orange-500 outline-orange-500 rounded-lg" />
                <button className="py-2 px-4 rounded-xl bg-red-500 flex-grow text-white flex items-center gap-x-2">
                    <TrashIcon className="w-6" />
                    Delete
                </button>
            </div>
        </div>
    )
}