import { TrashIcon, UserCircleIcon } from "@heroicons/react/24/outline"

export default function Page() {
    return (
    <main className="flex h-full flex-col md:flex-row gap-x-6 p-12">
        <div className="flex flex-col items-center gap-y-4 md:justify-between w-72">
            <h1 className="p-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-2xl font-bold text-white rounded-xl text-center w-full">Acme Food</h1>
            <UserCircleIcon className="w-32 text-white md:w-56 bg-slate-700 rounded-full" />
            <p>Usernmae</p>
            <p>Date</p>
            <span className="border-2 border-orange-500 w-full mb-3"></span>
        </div>
        <div className="h-full flex flex-col flex-grow items-center gap-y-3">
            <div className="h-full overflow-y-auto grid grid-cols-1 gap-y-4 w-full flex-grow">
                <div className="w-full h-fit px-3 py-2 rounded-lg border-2 border-orange-500 flex flex-col md:flex-row justify-none md:justify-between gap-y-3">
                    <div className="flex flex-col md:flex-row gap-y-3 gap-x-2 items-center">
                        <span className="border border-orange-500 rounded-full h-24 w-24"></span>
                        <div className="flex md:flex-col gap-y-3 gap-x-4">
                            <p className="text-lg text-slate-600 font-bold">Fried Rice</p>
                            <span className="border-2 border-slate-400"></span>
                            <p className="text-lg text-slate-600 font-bold">IDR.10000</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <input type="number" name="value" min="1" className="py-2 w-1/2 md:w-full px-3 border border-orange-500 outline-orange-500 rounded-lg" />
                        <button className="py-2 px-4 rounded-xl bg-red-500 flex-grow text-white flex items-center gap-x-2">
                            <TrashIcon className="w-6" />
                            Delete
                        </button>
                    </div>
                </div>
                <div className="w-full h-fit px-3 py-2 rounded-lg border-2 border-orange-500 flex flex-col md:flex-row justify-none md:justify-between gap-y-3">
                    <div className="flex flex-col md:flex-row gap-y-3 gap-x-2 items-center">
                        <span className="border border-orange-500 rounded-full h-24 w-24"></span>
                        <div className="flex md:flex-col gap-y-3 gap-x-4">
                            <p className="text-lg text-slate-600 font-bold">Fried Rice</p>
                            <span className="border-2 border-slate-400"></span>
                            <p className="text-lg text-slate-600 font-bold">IDR.10000</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <input type="number" name="value" min="1" className="py-2 w-1/2 md:w-full px-3 border border-orange-500 outline-orange-500 rounded-lg" />
                        <button className="py-2 px-4 rounded-xl bg-red-500 flex-grow text-white flex items-center gap-x-2">
                            <TrashIcon className="w-6" />
                            Delete
                        </button>
                    </div>
                </div>
                <div className="w-full h-fit px-3 py-2 rounded-lg border-2 border-orange-500 flex flex-col md:flex-row justify-none md:justify-between gap-y-3">
                    <div className="flex flex-col md:flex-row gap-y-3 gap-x-2 items-center">
                        <span className="border border-orange-500 rounded-full h-24 w-24"></span>
                        <div className="flex md:flex-col gap-y-3 gap-x-4">
                            <p className="text-lg text-slate-600 font-bold">Fried Rice</p>
                            <span className="border-2 border-slate-400"></span>
                            <p className="text-lg text-slate-600 font-bold">IDR.10000</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <input type="number" name="value" min="1" className="py-2 w-1/2 md:w-full px-3 border border-orange-500 outline-orange-500 rounded-lg" />
                        <button className="py-2 px-4 rounded-xl bg-red-500 flex-grow text-white flex items-center gap-x-2">
                            <TrashIcon className="w-6" />
                            Delete
                        </button>
                    </div>
                </div>
                <div className="w-full h-fit px-3 py-2 rounded-lg border-2 border-orange-500 flex flex-col md:flex-row justify-none md:justify-between gap-y-3">
                    <div className="flex flex-col md:flex-row gap-y-3 gap-x-2 items-center">
                        <span className="border border-orange-500 rounded-full h-24 w-24"></span>
                        <div className="flex md:flex-col gap-y-3 gap-x-4">
                            <p className="text-lg text-slate-600 font-bold">Fried Rice</p>
                            <span className="border-2 border-slate-400"></span>
                            <p className="text-lg text-slate-600 font-bold">IDR.10000</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <input type="number" name="value" min="1" className="py-2 w-1/2 md:w-full px-3 border border-orange-500 outline-orange-500 rounded-lg" />
                        <button className="py-2 px-4 rounded-xl bg-red-500 flex-grow text-white flex items-center gap-x-2">
                            <TrashIcon className="w-6" />
                            Delete
                        </button>
                    </div>
                </div>
                <div className="w-full h-fit px-3 py-2 rounded-lg border-2 border-orange-500 flex flex-col md:flex-row justify-none md:justify-between gap-y-3">
                    <div className="flex flex-col md:flex-row gap-y-3 gap-x-2 items-center">
                        <span className="border border-orange-500 rounded-full h-24 w-24"></span>
                        <div className="flex md:flex-col gap-y-3 gap-x-4">
                            <p className="text-lg text-slate-600 font-bold">Fried Rice</p>
                            <span className="border-2 border-slate-400"></span>
                            <p className="text-lg text-slate-600 font-bold">IDR.10000</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <input type="number" name="value" min="1" className="py-2 w-1/2 md:w-full px-3 border border-orange-500 outline-orange-500 rounded-lg" />
                        <button className="py-2 px-4 rounded-xl bg-red-500 flex-grow text-white flex items-center gap-x-2">
                            <TrashIcon className="w-6" />
                            Delete
                        </button>
                    </div>
                </div>
                <div className="w-full h-fit px-3 py-2 rounded-lg border-2 border-orange-500 flex flex-col md:flex-row justify-none md:justify-between gap-y-3">
                    <div className="flex flex-col md:flex-row gap-y-3 gap-x-2 items-center">
                        <span className="border border-orange-500 rounded-full h-24 w-24"></span>
                        <div className="flex md:flex-col gap-y-3 gap-x-4">
                            <p className="text-lg text-slate-600 font-bold">Fried Rice</p>
                            <span className="border-2 border-slate-400"></span>
                            <p className="text-lg text-slate-600 font-bold">IDR.10000</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <input type="number" name="value" min="1" className="py-2 w-1/2 md:w-full px-3 border border-orange-500 outline-orange-500 rounded-lg" />
                        <button className="py-2 px-4 rounded-xl bg-red-500 flex-grow text-white flex items-center gap-x-2">
                            <TrashIcon className="w-6" />
                            Delete
                        </button>
                    </div>
                </div>
                <div className="w-full h-fit px-3 py-2 rounded-lg border-2 border-orange-500 flex flex-col md:flex-row justify-none md:justify-between gap-y-3">
                    <div className="flex flex-col md:flex-row gap-y-3 gap-x-2 items-center">
                        <span className="border border-orange-500 rounded-full h-24 w-24"></span>
                        <div className="flex md:flex-col gap-y-3 gap-x-4">
                            <p className="text-lg text-slate-600 font-bold">Fried Rice</p>
                            <span className="border-2 border-slate-400"></span>
                            <p className="text-lg text-slate-600 font-bold">IDR.10000</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <input type="number" name="value" min="1" className="py-2 w-1/2 md:w-full px-3 border border-orange-500 outline-orange-500 rounded-lg" />
                        <button className="py-2 px-4 rounded-xl bg-red-500 flex-grow text-white flex items-center gap-x-2">
                            <TrashIcon className="w-6" />
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <button className="bg-blue-800 w-1/3 rounded-xl text-white text-sm font-bold py-2 px-4">Save</button>
        </div>
    </main>
    )
}