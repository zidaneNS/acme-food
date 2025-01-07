'use client';

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
    { name: 'Home', href: '/home?category=drink-food-dessert' },
    { name: 'About', href: '/home/about' },
    { name: 'Contact', href: '/home/contact' }
];

export default function NavLink() {
    const pathname = usePathname();
    return (
        <>
        {links.map(link => (
            <Link href={link.href} key={link.name} className={clsx(
                "py-2 px-4 rounded-xl hover:bg-white/20 transition duration-300",
                { "bg-white/20" : pathname === link.href.split('?')[0] }
            )}>{link.name}</Link>
        ))}
        </>
    )
}