'use client';

import { deleteCart, updateCart } from "@/app/lib/action/actions";
import { DisplayCartType } from "@/app/lib/defintion"
import { TrashIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useActionState, useEffect, useState } from "react"
import LoadingButton from "../LoadingButton";

export default function Cart({ id, name, price, img_url, amount }: DisplayCartType ) {
    const [value, setValue] = useState<number>(amount ? amount : 1);

    useEffect(() => {
        const update = async () => await updateCart(id,value);
        update();
    }, [id, value]);

    const deleteCartWithId = deleteCart.bind(null, id);
    const [state, action, pending] = useActionState(deleteCartWithId, undefined);
    console.log(state);
    return (
        <div className="bg-white w-full h-fit px-3 py-2 rounded-lg border-2 border-orange-500 flex flex-col md:flex-row justify-none md:justify-between gap-y-3">
            <div className="flex flex-col md:flex-row gap-y-3 gap-x-2 items-center">
                <Image 
                    src={img_url}
                    alt="image"
                    className="rounded-full w-24 h-24 border-2 border-orange-500"
                    width={400}
                    height={400}
                />
                <div className="flex md:flex-col gap-y-3 gap-x-4">
                    <p className="text-lg text-slate-600 font-bold">{name}</p>
                    <span className="border-2 border-slate-400"></span>
                    <p className="text-lg text-slate-600 font-bold">IDR{price}</p>
                </div>
            </div>
            <form action={action} className="flex items-center gap-x-2">
                <input type="number" min="1" value={value} onChange={(e) => setValue(Number(e.target.value))} className="py-2 w-1/2 md:w-full px-3 border border-orange-500 outline-orange-500 rounded-lg" />
                {pending ? (
                    <LoadingButton />
                ) : (
                    <button className="py-2 px-4 rounded-xl bg-red-500 flex-grow text-white flex items-center gap-x-2 hover:bg-red-400 transition duration-300">
                        <TrashIcon className="w-6" />
                        Delete
                    </button>
                )}
            </form>
        </div>
    )
}