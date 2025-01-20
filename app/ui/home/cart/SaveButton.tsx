'use client';

import { updateNote } from "@/app/lib/action/actions"
import { FormEvent, useState } from "react"
import LoadingButton from "../LoadingButton";

export default function SaveButton({ noteId }: { noteId: string | number }) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleSubmit = async (e: FormEvent) => {
        setIsLoading(true);
        e.preventDefault();
        const success = await updateNote(noteId);
        if (success) {
            alert('checkout success');
        } else {
            alert('error');
        }
        setIsLoading(false);
    }
    return (
        <form className="w-full flex justify-center" onSubmit={handleSubmit}>
            {isLoading ? (
                <LoadingButton />
            ) : (
                <button type="submit" className="bg-blue-800 w-1/3 rounded-xl text-white text-sm font-bold py-2 px-4 hover:bg-blue-700 transition duration-300">Save</button>
            )}
        </form>
    )
}