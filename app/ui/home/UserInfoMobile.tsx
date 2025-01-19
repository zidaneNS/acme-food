import { Cog6ToothIcon, Bars3Icon, HomeIcon, PhoneIcon, BriefcaseIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";
import { UserDisplayType } from "@/app/lib/defintion";
import Image from "next/image";

export default function UserInfoMobile({ user }: { user: UserDisplayType | null | undefined }) {
  const pathname = usePathname();
  return (
    <div className="block md:hidden z-10 group">
        <Bars3Icon className="w-6"/>
        <div className="h-screen w-64 bg-white border border-slate-400 absolute -right-full duration-300 group-hover:right-0 top-0 flex flex-col justify-between gap-y-4 py-4 px-6">
            <div className="w-full flex flex-col gap-y-3 items-center text-black">
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
                <Link href="/home/dashboard" className={clsx(
                    "py-2 px-4 bg-slate-500 text-white hover:bg-slate-400 transition duration-300 rounded-xl w-full text-center flex gap-x-2 items-center justify-center", {
                        "bg-slate-400" : pathname === '/home/dashboard'
                    }
                )}>
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
                {!user?.name ? (
                    <Link href="/auth/login" className="py-2 px-4 bg-blue-700 text-white hover:bg-blue-600 transition duration-300 rounded-xl w-full text-center">Sign In</Link>
                ) : (
                    <LogoutButton />
                )}
            </div>
        </div>
    </div>
  )
}