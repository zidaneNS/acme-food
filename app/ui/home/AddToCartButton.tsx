'use client';

import { addToCart } from "@/app/lib/action/actions"
import { PlusCircleIcon } from "@heroicons/react/24/outline"
import { Dispatch, FormEvent, SetStateAction, useState } from "react"
import LoadingButton from "./LoadingButton";

export default function AddToCartButton({ setIsInCart, foodId }: { setIsInCart: Dispatch<SetStateAction<boolean>>, foodId: string | number }) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();
        const isSuccess = await addToCart(foodId);
        setIsInCart(isSuccess);
        setIsLoading(false);
    }
    
    return (
        <form onSubmit={handleSubmit} className="w-full flex justify-center items-center">
            {isLoading ? (
                <LoadingButton />
            ) : (
                <button type="submit" className="flex justify-center items-center gap-x-2 py-2 px-4 bg-blue-700 rounded-xl text-white hover:bg-blue-600 transition duration-300 w-full">
                    <PlusCircleIcon className="w-6"></PlusCircleIcon>
                    Add to Cart
                </button>
            )}
        </form>
    )
}