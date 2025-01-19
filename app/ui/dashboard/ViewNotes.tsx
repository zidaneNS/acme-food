'use client';

import { ChevronDownIcon } from "@heroicons/react/24/outline"
import Note from "./Note"
import { NoteType } from "@/app/lib/defintion"
import { useState } from "react";
import clsx from "clsx";

export default function ViewNotes({ notes }: { notes: NoteType[] }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            {notes.length > 0 ? (
                <>
                    <div className="w-full flex justify-center">
                        <button onClick={() => setIsOpen(prev => !prev)} className="py-2 px-6 gap-x-3 rounded-lg bg-white flex justify-center">
                            <p>view notes</p>
                            <ChevronDownIcon className={clsx(
                                "w-6 cursor-pointer duration-300",
                                { "rotate-180 duration-300" : isOpen }
                            )} />
                        </button>
                    </div>
                    <>
                        <div className={clsx(
                            "w-full max-h-full translate-y-0 duration-300 overflow-y-auto grid grid-cols-1 gap-y-3 px-3",
                            {"opacity-0 duration-300" : !isOpen}
                        )}>
                            {notes.map(note => (
                                <Note 
                                    key={note.id}
                                    note={note}
                                />
                            ))}
                        </div>
                    </>
                </>
            ) : (
                <div className="w-full h-fit">
                    Note Empty
                </div>
            )}
        </>
    )
}