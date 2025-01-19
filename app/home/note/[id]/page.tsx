import { getUser } from "@/app/lib/dal";
import { fetchCartsByNote, fetchNoteById } from "@/app/lib/data";
import CartNote from "@/app/ui/note/CartNote";
import { format } from "date-fns";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: Promise<{id: string}>}) {
    const id = (await params).id;
    const user = await getUser();
    const noteData = await fetchNoteById(id);

    if (!noteData) return redirect('/auth/login');
    if (!user) return redirect('/auth/login')

    if (user.id !== noteData.user_id) return redirect('/home?category=food-drink-dessert');

    const cartData = await fetchCartsByNote(id) || [];
    return (
        <main className="flex flex-col w-full h-full p-6 md:p-12 gap-y-6 items-center">
            <div className="p-4 rounded-lg bg-white shadow-lg flex flex-col gap-y-4 w-fit">
                <p className="text-base md:text-lg py-2 px-6 border-b border-slate-400 w-full text-center">{format(noteData.createdat, "yyyy-MM-dd HH:mm:ss")}</p>
                <div className="flex gap-x-3 w-full">
                    <p className="text-base md:text-lg py-2 px-6 text-center flex-grow border-b border-slate-400">IDR {noteData.totalprice}</p>
                    <p className="text-base md:text-lg py-2 px-6 text-center flex-grow bg-slate-400 rounded-lg text-white">{noteData.status}</p>
                </div>
            </div>
            <div className="w-full h-fit max-h-full grid grid-cols-3 gap-y-2 rounded-lg overflow-y-auto place-items-center gap-x-2 px-3">
            {cartData.length > 0 ? (
                <>
                    {cartData.map(cart => (
                        <CartNote key={cart.id} cart={cart} />
                    ))}
                </>
            ) : (
                <p>No data to display</p>
            )}
            </div>
        </main>
    )
}