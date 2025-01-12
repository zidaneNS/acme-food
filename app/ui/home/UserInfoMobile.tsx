import { Dispatch, SetStateAction } from "react";
import { Cog6ToothIcon, Bars3Icon, HomeIcon, PhoneIcon, BriefcaseIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function UserInfoMobile({ setIsOpenUserInfo, isOpenUserInfo, action }: { setIsOpenUserInfo: Dispatch<SetStateAction<boolean>>, isOpenUserInfo: boolean, action: () => void }) {
  const pathname = usePathname();
  return (
    <div 
        className="block md:hidden z-10"
        onMouseEnter={() => setIsOpenUserInfo(true)}
        onMouseLeave={() => setIsOpenUserInfo(false)}
    >
        <Bars3Icon className="w-6"/>
        {isOpenUserInfo && (
            <div className="h-screen w-64 bg-white border border-slate-400 absolute right-0 top-0 flex flex-col justify-between gap-y-4 py-4 px-6">
                <div className="w-full flex flex-col gap-y-3 items-center text-black">
                    <UserCircleIcon className="w-20 text-white bg-slate-700 rounded-full" />
                    <p className="py-2 px-4 border-b border-slate-400 w-full text-center">user name</p>
                    <p className="py-2 px-4 border-b border-slate-400 w-full text-center">email</p>
                    <Link href="/user/dashboard" className="py-2 px-4 bg-slate-500 text-white hover:bg-slate-400 transition duration-300 rounded-xl w-full text-center flex gap-x-2 items-center justify-center">
                        <Cog6ToothIcon className="w-5" />
                        Dashboard
                    </Link>
                </div>
                <div className="w-full flex flex-col gap-y-3">
                    <Link href="/home?category=drink-food-dessert" className={clsx(
                        "py-2 px-4 bg-slate-500 text-white hover:bg-slate-400 transition duration-300 rounded-xl w-full text-center flex gap-x-2 items-center justify-center", {
                            "bg-slate-400" : pathname === '/home'
                        }
                    )}>
                        <HomeIcon className="w-5" />
                        Home
                    </Link>
                    <Link href="/home/about" className={clsx(
                        "py-2 px-4 bg-slate-500 text-white hover:bg-slate-400 transition duration-300 rounded-xl w-full text-center flex gap-x-2 items-center justify-center", {
                            "bg-slate-400" : pathname === '/home/about'
                        }
                    )}>
                        <BriefcaseIcon className="w-5" />
                        About
                    </Link>
                    <Link href="/home/contact" className={clsx(
                        "py-2 px-4 bg-slate-500 text-white hover:bg-slate-400 transition duration-300 rounded-xl w-full text-center flex gap-x-2 items-center justify-center", {
                            "bg-slate-400" : pathname === '/home/contact'
                        }
                    )}>
                        <PhoneIcon className="w-5" />
                        Contact
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