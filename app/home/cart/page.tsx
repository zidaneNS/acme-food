import { getUser } from "@/app/lib/dal";
import { fetchDisplayCart } from "@/app/lib/data"
import Cart from "@/app/ui/home/cart/Cart"
import SaveButton from "@/app/ui/home/cart/SaveButton";
import { UserCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Page() {
    const user = await getUser();
    if (!user) return redirect('/home?category=food-drink-dessert');

    const cartData = await fetchDisplayCart(user.id) || [];
    

    return (
        <main className="flex h-full flex-col md:flex-row gap-x-6 gap-y-3 p-12">
            <div className="flex flex-col items-center gap-y-4 md:justify-between w-full md:w-72 bg-white rounded-xl">
                <h1 className="p-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-2xl font-bold text-white rounded-xl text-center w-full">Acme Food</h1>
                {user.img_url ? (
                    <Image 
                        src={user.img_url}
                        alt="user"
                        width={100}
                        height={100}
                        className="w-32 h-32 md:w-56 md:h-56 rounded-full border-2 border-orange-500"
                    />
                ) : (
                    <UserCircleIcon className="w-32 text-white md:w-56 bg-slate-700 rounded-full" />
                )}
                <p>Usernmae</p>
                <p>Date</p>
                <span className="border-2 border-orange-500 w-full "></span>
            </div>
                {cartData.length > 0 ? (
                    <div className="h-full flex flex-col-reverse md:flex-col flex-grow items-center gap-y-3 pb-12 md:pb-0">
                        <div className="max-h-full overflow-y-auto grid grid-cols-1 gap-y-4 w-full md:px-3">
                            {cartData.map(cart => (
                                <Cart 
                                    key={cart.name}
                                    name={cart.name}
                                    price={cart.price}
                                    amount={cart.amount}
                                    img_url={cart.img_url}
                                    id={cart.id}
                                    totalprice={cart.totalprice}
                                    note_id={cart.note_id}
                                />
                            ))}
                        </div>
                        <SaveButton noteId={cartData[0].note_id} />
                        {/* <button className="bg-blue-800 w-1/3 rounded-xl text-white text-sm font-bold py-2 px-4 hover:bg-blue-700 transition duration-300">Save</button> */}
                    </div>
                ) : (
                    <div className="h-full flex flex-col-reverse md:flex-col flex-grow items-center gap-y-3 pb-12 md:pb-0">Cart empty, order in home page...</div>
                )}
        </main>
    )
}