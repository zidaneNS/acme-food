import { ChevronDownIcon, Cog6ToothIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import LogoutButton from "./LogoutButton";
import { UserDisplayType } from "@/app/lib/defintion";
import Image from "next/image";

export default function UserInfoDesktop({ setIsOpenUserInfo, isOpenUserInfo, user }: { setIsOpenUserInfo: Dispatch<SetStateAction<boolean>>, isOpenUserInfo: boolean, user: UserDisplayType | null | undefined }) {
  return (
    <div 
        className="hidden md:flex items-center gap-x-2 relative hover:cursor-pointer z-10"
        onMouseEnter={() => setIsOpenUserInfo(true)}
        onMouseLeave={() => setIsOpenUserInfo(false)}
    >
        {user?.img_url ? (
            <Image 
                src={user.img_url}
                alt="profile"
                width={100}
                height={100}
                className="rounded-full w-8 h-8"
            />
        ) : (
            <UserCircleIcon className="w-8 text-white bg-slate-700 rounded-full" />
        )}
        <ChevronDownIcon className="w-6"/>
        {isOpenUserInfo && (
            <div className="fixed top-12 right-2 w-64 flex flex-col gap-y-4 items-center border-2 rounded-lg border-slate-700 bg-white text-black/90 py-4 px-4 text-sm">
                <div className="w-full flex flex-col gap-y-3 items-center">
                    {user?.img_url ? (
                        <Image 
                        src={user.img_url}
                            alt="profile"
                            width={100}
                            height={100}
                            className="rounded-full w-20 h-20"
                        />
                    ) : (
                        <UserCircleIcon className="w-20 text-white bg-slate-700 rounded-full" />
                    )}
                    <p className="py-2 px-4 border-b border-slate-400 w-full text-center">{user?.name ? user.name : 'guest'}</p>
                    <p className="py-2 px-4 border-b border-slate-400 w-full text-center">{user?.email ? user.email : 'guest@email.com'}</p>
                    
                    <Link href="/home/dashboard" className="py-2 px-4 bg-slate-500 text-white hover:bg-slate-400 transition duration-300 rounded-xl w-full text-center flex gap-x-2 items-center justify-center">
                        <Cog6ToothIcon className="w-5" />
                        Dashboard
                    </Link>
                </div>
                <span className="w-full border border-slate-200"></span>
                <div className="w-full flex flex-col gap-y-3">
                    {!user?.name ? (
                        <Link href="/auth/login" className="py-2 px-4 bg-blue-700 text-white hover:bg-blue-600 transition duration-300 rounded-xl w-full text-center">Sign In</Link>
                    ) : (
                        <LogoutButton />
                    )}
                </div>
            </div>
        )}
    </div>
  )
}
