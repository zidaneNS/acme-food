import { getUser } from "@/app/lib/dal";
import { fetchNotesByUserId } from "@/app/lib/data";
import ViewNotes from "@/app/ui/dashboard/ViewNotes";
import { UserCircleIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
    const user = await getUser();
    if (!user) return redirect('/home?category=food-drink-dessert');

    const noteData = await fetchNotesByUserId(user.id) || [];

    return (
        <main className="flex flex-col p-8 md:p-20 h-[150%] gap-y-4 items-center">
            <div className="w-full flex flex-col md:flex-row gap-y-3 gap-x-3">
                <div className="rounded-lg flex items-center justify-center gap-x-4 p-6 bg-white">
                    {user.img_url ? (
                        <Image 
                            src={user.img_url}
                            alt="user"
                            width={100}
                            height={100}
                            className="w-48 h-48 rounded-full"
                        />
                    ) : (
                        <UserCircleIcon className="w-48" />
                    )}
                </div>
                <div className="rounded-lg py-4 px-16 flex flex-col flex-grow gap-y-3 justify-evenly bg-white">
                    <p className="border-b border-slate-400 text-sm font-bold text-center">{user.name}</p>
                    <p className="border-b border-slate-400 text-sm font-bold text-center">{user.email}</p>
                    <div className="flex justify-center items-center">
                        <Link href="/" className="p-2 flex flex-col gap-y-1 group w-fit text-sm items-center text-slate-700">
                            <div className="flex gap-x-2">
                                Edit
                                <PencilSquareIcon className="w-6" />
                            </div>
                            <span className="w-full border-b group-hover:border-slate-500 border-transparent"></span>
                        </Link>
                    </div>
                </div>
            </div>
            <ViewNotes notes={noteData} />
        </main>
    )
}