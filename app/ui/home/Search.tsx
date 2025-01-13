import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export default function Search() {
    return (
        <form action="">
            <div className="flex gap-x-2 border-2 bg-white border-orange-500 rounded-lg items-center px-4 py-2">
                <input type="text" name="search" className="outline-none flex-grow" placeholder="Search..." autoFocus/>
                <MagnifyingGlassIcon className="w-6 text-orange-500" />
            </div>
        </form>
    )
}