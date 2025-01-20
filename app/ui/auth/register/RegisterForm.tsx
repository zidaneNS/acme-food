'use client';

import { register } from "@/app/lib/action/auth"
import Link from "next/link"
import { useActionState } from "react"
import LoadingButton from "../../home/LoadingButton";

export default function RegisterForm() {
    const [state, action, pending] = useActionState(register, undefined);
    return (
        <form action={action} className="bg-gradient-to-r from-orange-500 to-yellow-500 border border-white rounded-xl flex flex-col gap-y-3 py-4 px-6 text-white">
            <h1 className="text-3xl font-bold">Login</h1>
            <div className="flex flex-col gap-x-2">
                <label htmlFor="username">Username :</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username"
                    autoFocus
                    autoComplete="off"
                    className="py-2 px-4 rounded-xl bg-orange-400 border border-white outline-white"
                />
                {state?.errors.username && (
                    <p className="text-sm font-bold text-red-500 py-2 px-4 bg-white/30 mt-3 rounded-lg">{state.errors.username}</p>
                )}

            </div>
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
            <div className="flex flex-col gap-x-2">
                <label htmlFor="password_confirmation">Confirm Password :</label>
                <input 
                    type="password" 
                    name="password_confirmation" 
                    id="password_confirmation"
                    autoFocus
                    autoComplete="off"
                    className="py-2 px-4 rounded-xl bg-orange-400 border border-white outline-white"
                />
                {state?.errors.password_confirmation && (
                    <p className="text-sm font-bold text-red-500 py-2 px-4 bg-white/30 mt-3 rounded-lg">{state.errors.password_confirmation}</p>
                )}

            </div>
            <p>Already have an account?</p>
            <Link href="/auth/login" className="text-blue-800 text-sm font-bold hover:underline cursor-pointer">Sign In Here!</Link>
            {pending ? (
                <LoadingButton />
            ) : (
                <button type="submit" className="bg-blue-500 rounded-xl py-2 px-4 hover:bg-blue-400 transition duration-300 mt-3">Register</button>
            )}
        </form>
    )
}