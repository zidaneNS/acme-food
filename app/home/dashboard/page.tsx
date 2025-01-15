import { ChevronDownIcon, TrashIcon, UserCircleIcon, CheckCircleIcon, EyeIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Page() {
    return (
        <main className="flex flex-col p-8 md:p-20 h-[150%] gap-y-4 items-center">
            <div className="w-full flex flex-col md:flex-row gap-y-3 gap-x-3">
                <div className="rounded-lg flex items-center justify-center gap-x-4 p-6 bg-white">
                    <UserCircleIcon className="w-48" />
                </div>
                <div className="rounded-lg py-4 px-16 flex flex-col flex-grow gap-y-3 justify-evenly bg-white">
                    <p className="border-b border-slate-400 text-sm font-bold text-center">Username</p>
                    <p className="border-b border-slate-400 text-sm font-bold text-center">Email</p>
                    <div className="flex justify-center items-center">
                        <Link href="/" className="p-2 flex gap-x-2 w-fit text-sm items-center hover:border-b text-slate-700 border-slate-700">
                            Edit
                            <PencilSquareIcon className="w-6" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="py-2 px-6 gap-x-3 rounded-lg bg-white flex justify-center">
                    <p>view notes</p>
                    <ChevronDownIcon className="w-6 cursor-pointer" />
                </div>
            </div>
            <div className="w-full h-full overflow-y-auto grid grid-cols-1 gap-y-3 px-3">
                <div className="rounded-lg bg-white">
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-y-3 py-2 px-6">
                        <div className="flex flex-col gap-y-2 items-center md:items-start w-full md:w-fit">
                            <p className="text-sm text-slate-700 font-bold">13-01-2025 22:03:59</p>
                            <span className="border border-slate-700 w-full"></span>
                            <p className="text-sm text-slate-700 font-bold">IDR10000</p>
                        </div>
                        <div className="flex gap-x-3 items-center">
                            <button className="flex justify-center text-sm text-white gap-x-2 items-center bg-red-500 py-2 px-4 rounded-lg hover:bg-red-400 transition duration-300">
                                <TrashIcon className="w-5" />
                                Delete
                            </button>
                            <button className="flex justify-center text-sm text-white gap-x-2 items-center bg-green-500 py-2 px-4 rounded-lg hover:bg-green-400 transition duration-300">
                                <CheckCircleIcon className="w-4" />
                                Success
                            </button>
                            <EyeIcon className="w-6 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="rounded-lg bg-white">
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-y-3 py-2 px-6">
                        <div className="flex flex-col gap-y-2 items-center md:items-start w-full md:w-fit">
                            <p className="text-sm text-slate-700 font-bold">13-01-2025 22:03:59</p>
                            <span className="border border-slate-700 w-full"></span>
                            <p className="text-sm text-slate-700 font-bold">IDR10000</p>
                        </div>
                        <div className="flex gap-x-3 items-center">
                            <button className="flex justify-center text-sm text-white gap-x-2 items-center bg-red-500 py-2 px-4 rounded-lg hover:bg-red-400 transition duration-300">
                                <TrashIcon className="w-5" />
                                Delete
                            </button>
                            <button className="flex justify-center text-sm text-white gap-x-2 items-center bg-green-500 py-2 px-4 rounded-lg hover:bg-green-400 transition duration-300">
                                <CheckCircleIcon className="w-4" />
                                Success
                            </button>
                            <EyeIcon className="w-6 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="rounded-lg bg-white">
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-y-3 py-2 px-6">
                        <div className="flex flex-col gap-y-2 items-center md:items-start w-full md:w-fit">
                            <p className="text-sm text-slate-700 font-bold">13-01-2025 22:03:59</p>
                            <span className="border border-slate-700 w-full"></span>
                            <p className="text-sm text-slate-700 font-bold">IDR10000</p>
                        </div>
                        <div className="flex gap-x-3 items-center">
                            <button className="flex justify-center text-sm text-white gap-x-2 items-center bg-red-500 py-2 px-4 rounded-lg hover:bg-red-400 transition duration-300">
                                <TrashIcon className="w-5" />
                                Delete
                            </button>
                            <button className="flex justify-center text-sm text-white gap-x-2 items-center bg-green-500 py-2 px-4 rounded-lg hover:bg-green-400 transition duration-300">
                                <CheckCircleIcon className="w-4" />
                                Success
                            </button>
                            <EyeIcon className="w-6 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="rounded-lg bg-white">
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-y-3 py-2 px-6">
                        <div className="flex flex-col gap-y-2 items-center md:items-start w-full md:w-fit">
                            <p className="text-sm text-slate-700 font-bold">13-01-2025 22:03:59</p>
                            <span className="border border-slate-700 w-full"></span>
                            <p className="text-sm text-slate-700 font-bold">IDR10000</p>
                        </div>
                        <div className="flex gap-x-3 items-center">
                            <button className="flex justify-center text-sm text-white gap-x-2 items-center bg-red-500 py-2 px-4 rounded-lg hover:bg-red-400 transition duration-300">
                                <TrashIcon className="w-5" />
                                Delete
                            </button>
                            <button className="flex justify-center text-sm text-white gap-x-2 items-center bg-green-500 py-2 px-4 rounded-lg hover:bg-green-400 transition duration-300">
                                <CheckCircleIcon className="w-4" />
                                Success
                            </button>
                            <EyeIcon className="w-6 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="rounded-lg bg-white">
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-y-3 py-2 px-6">
                        <div className="flex flex-col gap-y-2 items-center md:items-start w-full md:w-fit">
                            <p className="text-sm text-slate-700 font-bold">13-01-2025 22:03:59</p>
                            <span className="border border-slate-700 w-full"></span>
                            <p className="text-sm text-slate-700 font-bold">IDR10000</p>
                        </div>
                        <div className="flex gap-x-3 items-center">
                            <button className="flex justify-center text-sm text-white gap-x-2 items-center bg-red-500 py-2 px-4 rounded-lg hover:bg-red-400 transition duration-300">
                                <TrashIcon className="w-5" />
                                Delete
                            </button>
                            <button className="flex justify-center text-sm text-white gap-x-2 items-center bg-green-500 py-2 px-4 rounded-lg hover:bg-green-400 transition duration-300">
                                <CheckCircleIcon className="w-4" />
                                Success
                            </button>
                            <EyeIcon className="w-6 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="rounded-lg bg-white">
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-y-3 py-2 px-6">
                        <div className="flex flex-col gap-y-2 items-center md:items-start w-full md:w-fit">
                            <p className="text-sm text-slate-700 font-bold">13-01-2025 22:03:59</p>
                            <span className="border border-slate-700 w-full"></span>
                            <p className="text-sm text-slate-700 font-bold">IDR10000</p>
                        </div>
                        <div className="flex gap-x-3 items-center">
                            <button className="flex justify-center text-sm text-white gap-x-2 items-center bg-red-500 py-2 px-4 rounded-lg hover:bg-red-400 transition duration-300">
                                <TrashIcon className="w-5" />
                                Delete
                            </button>
                            <button className="flex justify-center text-sm text-white gap-x-2 items-center bg-green-500 py-2 px-4 rounded-lg hover:bg-green-400 transition duration-300">
                                <CheckCircleIcon className="w-4" />
                                Success
                            </button>
                            <EyeIcon className="w-6 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="rounded-lg bg-white">
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-y-3 py-2 px-6">
                        <div className="flex flex-col gap-y-2 items-center md:items-start w-full md:w-fit">
                            <p className="text-sm text-slate-700 font-bold">13-01-2025 22:03:59</p>
                            <span className="border border-slate-700 w-full"></span>
                            <p className="text-sm text-slate-700 font-bold">IDR10000</p>
                        </div>
                        <div className="flex gap-x-3 items-center">
                            <button className="flex justify-center text-sm text-white gap-x-2 items-center bg-red-500 py-2 px-4 rounded-lg hover:bg-red-400 transition duration-300">
                                <TrashIcon className="w-5" />
                                Delete
                            </button>
                            <button className="flex justify-center text-sm text-white gap-x-2 items-center bg-green-500 py-2 px-4 rounded-lg hover:bg-green-400 transition duration-300">
                                <CheckCircleIcon className="w-4" />
                                Success
                            </button>
                            <EyeIcon className="w-6 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}