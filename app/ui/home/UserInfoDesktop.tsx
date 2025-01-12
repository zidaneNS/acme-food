import { ChevronDownIcon, Cog6ToothIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function UserInfoDesktop({ setIsOpenUserInfo, isOpenUserInfo, action }: { setIsOpenUserInfo: Dispatch<SetStateAction<boolean>>, isOpenUserInfo: boolean, action: () => void }) {
  return (
    <div 
        className="hidden md:flex items-center gap-x-2 relative hover:cursor-pointer z-10"
        onMouseEnter={() => setIsOpenUserInfo(true)}
        onMouseLeave={() => setIsOpenUserInfo(false)}
    >
        <UserCircleIcon className="w-8 bg-slate-700 rounded-full" />
        <ChevronDownIcon className="w-6"/>
        {isOpenUserInfo && (
            <div className="fixed top-12 right-2 w-64 flex flex-col gap-y-4 items-center border-2 rounded-lg border-slate-700 bg-white text-black/90 py-4 px-4 text-sm">
                <div className="w-full flex flex-col gap-y-3 items-center">
                    <UserCircleIcon className="w-20 text-white bg-slate-700 rounded-full" />
                    <p className="py-2 px-4 border-b border-slate-400 w-full text-center">user name</p>
                    <p className="py-2 px-4 border-b border-slate-400 w-full text-center">email</p>
                    
                    <Link href="/user/dashboard" className="py-2 px-4 bg-slate-500 text-white hover:bg-slate-400 transition duration-300 rounded-xl w-full text-center flex gap-x-2 items-center justify-center">
                        <Cog6ToothIcon className="w-5" />
                        Dashboard
                    </Link>
                </div>
                <span className="w-full border border-slate-200"></span>
                <div className="w-full flex flex-col gap-y-3">
                    <Link href="/auth/login" className="py-2 px-4 bg-blue-700 text-white hover:bg-blue-600 transition duration-300 rounded-xl w-full text-center">Sign In</Link>
                    <form action={action} className="w-full">
                        <button type="submit" className="py-2 px-4 bg-blue-700 text-white hover:bg-blue-600 transition duration-300 rounded-xl w-full">Logout</button>
                    </form>
                </div>
            </div>
        )}
    </div>
  )
}
