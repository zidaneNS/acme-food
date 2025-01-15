'use client';

import { useState } from "react"
import NavLink from "./NavLink";
import UserInfoDesktop from "./UserInfoDesktop";
import UserInfoMobile from "./UserInfoMobile";
import { UserDisplayType } from "@/app/lib/defintion";

export default function Navbar({ user }: { user: UserDisplayType | null | undefined }) {
    const [isOpenUserInfo, setIsOpenUserInfo] = useState(false);

    return (
        <nav className="flex justify-between bg-gradient-to-r from-orange-500 to-yellow-500 py-4 px-4 text-white items-center">
            <div>
                <h1 className="font-bold text-xl">Acme Food</h1>
            </div>
            <div className="hidden md:flex gap-x-4">
                <NavLink />
            </div>
            <UserInfoMobile 
                setIsOpenUserInfo={setIsOpenUserInfo}
                isOpenUserInfo={isOpenUserInfo}
                user={user}
            />
            <UserInfoDesktop 
                setIsOpenUserInfo={setIsOpenUserInfo} 
                isOpenUserInfo={isOpenUserInfo}
                user={user}
            />
        </nav>
    )
}
