'use client';

import { ChevronDownIcon } from "@heroicons/react/24/outline"
import Note from "./Note"
import { NoteType } from "@/app/lib/defintion"
import { useState } from "react";

export default function ViewNotes({ notes }: { notes: NoteType[] }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            {notes.length > 0 ? (
                <>
                    <div className="w-full flex justify-center">
                        <button onClick={() => setIsOpen(prev => !prev)} className="py-2 px-6 gap-x-3 rounded-lg bg-white flex justify-center">
                            <p>view notes</p>
                            <ChevronDownIcon className="w-6 cursor-pointer" />
                        </button>
                    </div>
                    <>
                        {isOpen && (
                            <div className="w-full max-h-full overflow-y-auto grid grid-cols-1 gap-y-3 px-3">
                                {notes.map(note => (
                                    <Note 
                                        key={note.id}
                                        note={note}
                                    />
                                ))}
                            </div>
                        )}
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