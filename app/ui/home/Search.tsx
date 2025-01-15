'use client';

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    
    const handleSearch = (term: string) => {
        console.log('search params :', searchParams);
        const params = new URLSearchParams(searchParams);
        if (term.length > 0) {
            params.set('search', term)
        } else {
            params.delete('search')
        }
        
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="flex gap-x-2 border-2 bg-white border-orange-500 rounded-lg items-center px-4 py-2">
            <input type="text" name="search" className="outline-none flex-grow" placeholder="Search..." autoFocus onChange={(e) => handleSearch(e.target.value)}/>
            <MagnifyingGlassIcon className="w-6 text-orange-500" />
        </div>
    )
}