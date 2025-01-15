'use client';

import Image from "next/image";
import { FoodByCategory } from "@/app/lib/defintion";
import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import RemoveFromCartButton from "./RemoveFromCartButton";

export default function Card({ food, alreadyInCart }: { food: FoodByCategory, alreadyInCart: boolean | undefined }) {
    const [isInCart, setIsInCart] = useState<boolean>(alreadyInCart || false);
    return (
        <div className="flex flex-col py-2 px-4 border bg-white border-orange-500 rounded-xl gap-y-2">
            <h1 className="text-xl font-bold">{food.name}</h1>
            <p className="text-slate-500 text-lg">IDR.{food.price}</p>
            <span className="border border-slate-700"></span>
            <div className="flex justify-center items-center py-2 px-2">
                <Image
                    src={food.img_url}
                    width={600}
                    height={400}
                    alt="fried rice"
                    className="w-40 h-40 rounded-xl border-2 border-orange-500"
                />
            </div>
            {isInCart ? (
                <RemoveFromCartButton 
                    setIsInCart={setIsInCart}
                    foodId={food.id}
                />
            ) : (
                <AddToCartButton 
                    setIsInCart={setIsInCart}
                    foodId={food.id}
                />
            )}
        </div>
    )
}