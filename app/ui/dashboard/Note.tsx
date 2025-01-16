import { NoteType } from "@/app/lib/defintion"
import { TrashIcon, CheckCircleIcon, EyeIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { format } from "date-fns";

export default function Note({ note }: { note: NoteType }) {
    return (
        <div className="rounded-lg bg-white">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-y-3 py-2 px-6">
                <div className="flex flex-col gap-y-2 items-center md:items-start w-full md:w-fit">
                    <p className="text-sm text-slate-700 font-bold">{format(note.createdat, "yyy-MM-dd HH:mm:ss")}</p>
                    <span className="border border-slate-700 w-full"></span>
                    <p className="text-sm text-slate-700 font-bold">IDR {note.totalprice}</p>
                </div>
                <div className="flex gap-x-3 items-center">
                    <button className="flex justify-center text-sm text-white gap-x-2 items-center bg-red-500 py-2 px-4 rounded-lg hover:bg-red-400 transition duration-300">
                        <TrashIcon className="w-5" />
                        Delete
                    </button>
                    {/* pending success dont forget */}
                    {note.status === 'SUCCESS' ? (
                        <span className="flex justify-center text-sm text-white gap-x-2 items-center bg-green-500 py-2 px-4 rounded-lg">
                            <CheckCircleIcon className="w-5" />
                            Success
                        </span>
                    ) : (
                        <span className="flex justify-center text-sm text-white gap-x-2 items-center bg-slate-500 py-2 px-5 rounded-lg">
                            <XCircleIcon className="w-5" />
                            Pending
                        </span>
                    )}
                    <EyeIcon className="w-6 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}