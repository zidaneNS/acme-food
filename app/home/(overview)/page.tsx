export default function Page() {
    return (
        <main className="flex flex-col md:flex-row h-full">
            <div className="w-32 border-r-2 border-orange-500/20 hidden md:flex flex-col gap-y-4 px-6 py-6 items-center text-orange-500">
                <p className="text-sm font-bold hover:underline cursor-pointer">Drinks</p>
                <p className="text-sm font-bold hover:underline cursor-pointer">Foods</p>
                <p className="text-sm font-bold hover:underline cursor-pointer">Desserts</p>
            </div>
            <div className="flex flex-col p-12 gap-y-4 flex-grow">
                <div className="w-full bg-yellow-500 py-4 px-6 rounded-xl">Input Search</div>
                <span className="border border-orange-500/20"></span>
                <div className="w-full overflow-y-auto">
                    
                </div>
            </div>
        </main>
    )
}