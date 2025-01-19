export default function Loading() {
    return (
        <main className="flex flex-col w-full h-full p-6 md:p-12 gap-y-6 items-center animate-pulse">
            <div className="p-4 rounded-lg bg-slate-300 flex flex-col gap-y-4 w-full mx-10">
                <div className="h-8 md:h-12 bg-slate-400 w-full rounded-lg"></div>
                <div className="flex gap-x-3 w-full">
                    <div className="h-8 md:h-12 flex-grow bg-slate-400 rounded-lg"></div>
                    <div className="h-8 md:h-12 flex-grow bg-slate-400 rounded-lg"></div>
                </div>
            </div>
            <div className="w-full h-fit max-h-full grid grid-cols-1 gap-y-4 overflow-y-auto px-3">
                <div className="w-full rounded-lg bg-slate-300 flex gap-x-5 p-4">
                    <div className="w-12 h-12 md:w-24 md:h-24 rounded-lg bg-slate-400"></div>
                    <div className="h-12 md:h-24 rounded-lg bg-slate-400 flex-grow"></div>
                </div>
                <div className="w-full rounded-lg bg-slate-300 flex gap-x-5 p-4">
                    <div className="w-12 h-12 md:w-24 md:h-24 rounded-lg bg-slate-400"></div>
                    <div className="h-12 md:h-24 rounded-lg bg-slate-400 flex-grow"></div>
                </div>
                <div className="w-full rounded-lg bg-slate-300 flex gap-x-5 p-4">
                    <div className="w-12 h-12 md:w-24 md:h-24 rounded-lg bg-slate-400"></div>
                    <div className="h-12 md:h-24 rounded-lg bg-slate-400 flex-grow"></div>
                </div>
                <div className="w-full rounded-lg bg-slate-300 flex gap-x-5 p-4">
                    <div className="w-12 h-12 md:w-24 md:h-24 rounded-lg bg-slate-400"></div>
                    <div className="h-12 md:h-24 rounded-lg bg-slate-400 flex-grow"></div>
                </div>
                <div className="w-full rounded-lg bg-slate-300 flex gap-x-5 p-4">
                    <div className="w-12 h-12 md:w-24 md:h-24 rounded-lg bg-slate-400"></div>
                    <div className="h-12 md:h-24 rounded-lg bg-slate-400 flex-grow"></div>
                </div>
                <div className="w-full rounded-lg bg-slate-300 flex gap-x-5 p-4">
                    <div className="w-12 h-12 md:w-24 md:h-24 rounded-lg bg-slate-400"></div>
                    <div className="h-12 md:h-24 rounded-lg bg-slate-400 flex-grow"></div>
                </div>
            </div>
        </main>
    )
}