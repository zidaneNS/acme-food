'use client';

import { login } from "@/app/lib/action/auth";
import { useActionState } from "react";
import Link from "next/link";
import LoadingButton from "../../home/LoadingButton";

export default function LoginForm() {
    const [state, action, pending] = useActionState(login, undefined);
    return (
        <form action={action} className="bg-gradient-to-r from-orange-500 to-yellow-500 border border-white rounded-xl flex flex-col gap-y-3 py-4 px-6 text-white">
            <h1 className="text-3xl font-bold">Login</h1>
            <div className="flex flex-col gap-x-2">
                <label htmlFor="email">Email :</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    autoFocus
                    autoComplete="off"
                    className="py-2 px-4 rounded-xl bg-orange-400 border border-white outline-white"
                />
                {state?.errors.email && (
                    <p className="text-sm font-bold text-red-500 py-2 px-4 bg-white/30 mt-3 rounded-lg">{state.errors.email}</p>
                )}
            </div>
            <div className="flex flex-col gap-x-2">
                <label htmlFor="password">Password :</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    autoFocus
                    autoComplete="off"
                    className="py-2 px-4 rounded-xl bg-orange-400 border border-white outline-white"
                />
                {state?.errors.password && (
                    <p className="text-sm font-bold text-red-500 py-2 px-4 bg-white/30 mt-3 rounded-lg">{state.errors.password}</p>
                )}
            </div>
            <p>Not have any account?</p>
            <Link href="/auth/register" className="text-blue-800 text-sm font-bold hover:underline cursor-pointer">Sign Up Here!</Link>
            {pending ? (
                <LoadingButton />
            ) : (
                <button type="submit" className="bg-blue-500 rounded-xl py-2 px-4 hover:bg-blue-400 transition duration-300 mt-3">Login</button>
            )}
        </form>
    )
}