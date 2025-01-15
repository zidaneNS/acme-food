'use client';

import { removeFromCart } from "@/app/lib/action/actions"
import { MinusCircleIcon } from "@heroicons/react/24/outline"
import { Dispatch, FormEvent, SetStateAction, useState } from "react"
import LoadingButton from "./LoadingButton";

export default function RemoveFromCartButton({ setIsInCart, foodId }: { setIsInCart: Dispatch<SetStateAction<boolean>>, foodId: string | number }) {
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();
        const isSuccess = await removeFromCart(foodId);
        setIsLoading(!isSuccess);
        setIsInCart(!isSuccess);
    }
    
    return (
        <form onSubmit={handleSubmit} className="w-full flex justify-center items-center">
            {isLoading ? (
                <LoadingButton />
            ) : (
                <button type="submit" className="flex justify-center items-center gap-x-2 py-2 px-4 bg-red-700 rounded-xl text-white hover:bg-red-600 transition duration-300 w-full">
                    <MinusCircleIcon className="w-6"></MinusCircleIcon>
                    Remove from cart
                </button>
            )}
        </form>
    )
}