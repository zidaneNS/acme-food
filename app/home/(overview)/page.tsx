'use client';

import { fetchFoodsByCategory } from "@/app/lib/data";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
    const [isFood, setIsFood] = useState(false);
    // const [isDrink, setIsDrink] = useState(false);
    // const [isDessert, setIsDessert] = useState(false);

    useEffect(() => {
        // 'use server';
        const fetchData = async () => {
            const data = await fetchFoodsByCategory(['drink']);
            console.log(data);
        }

        fetchData();
    }, [])
    return (
        <main className="flex flex-col md:flex-row h-full">
            <div className="border-r-2 border-orange-500/20 hidden md:flex flex-col gap-y-4 px-6 py-6 text-orange-500 items-start">
                <div className="flex gap-x-2 items center justify-center">
                    <input type="checkbox" id="drink" value="drink" checked={isFood} onChange={() => setIsFood(prev => !prev)}/>
                    <label htmlFor="drink" className="text-sm font-bold hover:underline cursor-pointer">Drinks</label>
                </div>
                <div className="flex gap-x-2 items center justify-center">
                    <input type="checkbox" id="food" />
                    <label htmlFor="food" className="text-sm font-bold hover:underline cursor-pointer">Foods</label>
                </div>
                <div className="flex gap-x-2 items center justify-center">
                    <input type="checkbox" id="dessert" />
                    <label htmlFor="dessert" className="text-sm font-bold hover:underline cursor-pointer">Desserts</label>
                </div>
            </div>
            <div className="flex relative flex-col p-12 gap-y-4 flex-grow">
                <div className="w-full sticky top-2 bg-yellow-500 py-4 px-6 rounded-xl">Input Search</div>
                <div className="md:hidden flex text-orange-500 gap-x-2 font-normal">
                    <div className="flex gap-x-2 items center justify-center">
                        <input type="checkbox" id="drink" />
                        <label htmlFor="drink" className="text-sm font-bold hover:underline cursor-pointer">Drinks</label>
                    </div>
                    <div className="flex gap-x-2 items center justify-center">
                        <input type="checkbox" id="food" />
                        <label htmlFor="food" className="text-sm font-bold hover:underline cursor-pointer">Foods</label>
                    </div>
                    <div className="flex gap-x-2 items center justify-center">
                        <input type="checkbox" id="dessert" />
                        <label htmlFor="dessert" className="text-sm font-bold hover:underline cursor-pointer">Desserts</label>
                    </div>
                </div>
                <span className="border border-orange-500/20"></span>
                <div className="w-ful overflow-y-auto flex flex-col gap-y-4 md:grid grid-cols-3 md:gap-2">
                    <div className="flex flex-col py-2 px-4 border border-orange-500 rounded-xl gap-y-2">
                        <h1 className="text-xl font-bold">Fried Rice</h1>
                        <p className="text-slate-500 text-lg">Rp15000</p>
                        <span className="border border-slate-700"></span>
                        <div className="flex justify-center items-center py-2 px-2">
                            <Image
                                src="/img/fried-rice.jpg"
                                width={600}
                                height={400}
                                alt="fried rice"
                                className="w-40 h-40 rounded-xl border-2 border-orange-500"
                            />
                        </div>
                        <button className="py-2 px-4 bg-blue-700 rounded-xl text-white hover:bg-blue-600 transition duration-300">Add to cart</button>
                    </div>                    
                </div>
            </div>
        </main>
    )
}