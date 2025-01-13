import { fetchFoodsByCategory } from "@/app/lib/data";
import Card from "@/app/ui/home/Card";
import { Fragment } from "react";
import NavCategory from "@/app/ui/home/NavCategory";
import Search from "@/app/ui/home/Search";
import CartButton from "@/app/ui/home/CartButton";

export default async function Page(props: { searchParams?: Promise<{ category: string }>}) {
    const searchParams = await props.searchParams;
    const category = searchParams?.category || '';
    const categories = category.split('-');
    console.log(categories, 'server, type ', typeof categories);
    const data = await fetchFoodsByCategory(categories);
    
    return (
        <main className="flex flex-col md:flex-row h-full">
            <div className="border-r-2 w-50 pl-8 border-orange-500/20 hidden md:flex flex-col gap-y-4 px-6 py-6 text-orange-500 items-start">
                <NavCategory />
            </div>
            <div className="flex flex-grow relative flex-col p-12 gap-y-4 h-full">
                <Search />
                <div className="md:hidden flex text-orange-500 gap-x-2 font-normal justify-evenly">
                    <NavCategory />
                </div>
                <span className="border border-orange-500/20"></span>
                <div className="w-ful overflow-y-auto flex flex-col gap-y-4 md:grid grid-cols-3 md:gap-2">
                    {data?.map((items, idx) => (
                        <Fragment key={idx}>
                            {items.map(item => (
                                <Card 
                                    name={item.name}
                                    price={item.price}
                                    img_url={item.img_url}
                                    id={item.id}
                                    key={item.id}
                                />
                            ))}
                        </Fragment>
                    ))}
                </div>
                <CartButton />
            </div>
        </main>
    )
}