'use client';

import Link from "next/link";
import { ChevronDownIcon, Cog6ToothIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import NavLink from "../ui/home/NavLink";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isOpenUserInfo, setIsOpenUserInfo] = useState(false);

    return (
        <div className="h-screen flex flex-col bg-white text-black">
            <nav className="flex justify-between bg-gradient-to-r from-orange-500 to-yellow-500 py-4 px-4 text-white items-center">
                <div>
                    <h1 className="font-bold text-xl">Acme Food</h1>
                </div>
                <div className="hidden md:flex gap-x-4">
                    <NavLink />
                </div>
                <div 
                    className="block md:hidden"
                    onMouseEnter={() => setIsOpenUserInfo(true)}
                    onMouseLeave={() => setIsOpenUserInfo(false)}
                >
                    <Bars3Icon className="w-6"/>
                    {isOpenUserInfo && (
                        <div className="h-screen w-64 bg-white border border-slate-400 absolute right-0 top-0 flex flex-col gap-y-4 py-4 px-6">
                            <div className="w-full flex flex-col gap-y-3">
                                <p className="py-2 px-4 bg-yellow-400 rounded-xl w-full text-center">user name</p>
                                <p className="py-2 px-4 bg-yellow-400 rounded-xl w-full text-center">email</p>
                                <span className="w-full border border-slate-200"></span>
                                <Link href="/user/dashboard" className="py-2 px-4 bg-slate-500 text-white hover:bg-slate-400 transition duration-300 rounded-xl w-full text-center flex gap-x-2 items-center justify-center">
                                    <Cog6ToothIcon className="w-5" />
                                    Dashboard
                                </Link>
                            </div>
                            <span className="w-full border border-slate-200"></span>
                            <div className="w-full flex flex-col gap-y-3">
                                <Link href="/login" className="py-2 px-4 bg-blue-700 text-white hover:bg-blue-600 transition duration-300 rounded-xl w-full text-center">Sign In</Link>
                                <button className="py-2 px-4 bg-blue-700 text-white hover:bg-blue-600 transition duration-300 rounded-xl w-full">Logout</button>
                            </div>
                        </div>
                    )}
                </div>
                <div 
                    className="hidden md:flex items-center gap-x-2 relative hover:cursor-pointer"
                    onMouseEnter={() => setIsOpenUserInfo(true)}
                    onMouseLeave={() => setIsOpenUserInfo(false)}
                >
                    <span className="bg-white rounded-full w-8 h-8"></span>
                    <ChevronDownIcon className="w-6"/>
                    {isOpenUserInfo && (
                        <div className="fixed top-12 right-2 w-64 flex flex-col gap-y-4 items-center border border-slate-200 bg-white text-black/90 py-4 px-4 text-sm">
                            <div className="w-full flex flex-col gap-y-3">
                                <p className="py-2 px-4 bg-yellow-500/15 rounded-xl w-full text-center">user name</p>
                                <p className="py-2 px-4 bg-yellow-500/15 rounded-xl w-full text-center">email</p>
                                <span className="w-full border border-slate-200"></span>
                                <Link href="/user/dashboard" className="py-2 px-4 bg-slate-500 text-white hover:bg-slate-400 transition duration-300 rounded-xl w-full text-center flex gap-x-2 items-center justify-center">
                                    <Cog6ToothIcon className="w-5" />
                                    Dashboard
                                </Link>
                            </div>
                            <span className="w-full border border-slate-200"></span>
                            <div className="w-full flex flex-col gap-y-3">
                                <Link href="/login" className="py-2 px-4 bg-blue-700 text-white hover:bg-blue-600 transition duration-300 rounded-xl w-full text-center">Sign In</Link>
                                <button className="py-2 px-4 bg-blue-700 text-white hover:bg-blue-600 transition duration-300 rounded-xl w-full">Logout</button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
            <div className="w-full h-full overflow-auto">{children}</div>
        </div>
    )
}