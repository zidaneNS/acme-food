import { fetchFoodsByCategory, fetchFoodsByCategorySearch, fetchSetOfFoods } from "@/app/lib/data";
import Card from "@/app/ui/home/Card";
import { Fragment, Suspense } from "react";
import NavCategory from "@/app/ui/home/NavCategory";
import Search from "@/app/ui/home/Search";
import CartButton from "@/app/ui/home/CartButton";
import { getUser } from "@/app/lib/dal";
import CardSkeleton from "@/app/ui/home/CardSkeleton";

export default async function Page(props: { searchParams?: Promise<{ category: string, search: string }>}) {
    const searchParams = await props.searchParams;
    const category = searchParams?.category || '';
    const categories = category.split('-');
    const search = searchParams?.search || '';
    const data = search.length > 0 ? await fetchFoodsByCategorySearch(categories, search) : await fetchFoodsByCategory(categories);
    const user = await getUser();
    const setOfFoods = await fetchSetOfFoods(user?.id) || [];
    
    return (
        <main className="flex flex-col md:flex-row h-full">
            <div className="border-r-2 w-50 pl-8 border-orange-500 hidden md:flex flex-col gap-y-4 px-6 py-6 text-orange-500 items-start bg-white">
                <NavCategory />
            </div>
            <div className="flex flex-grow relative flex-col p-12 gap-y-4 h-full">
                <Search />
                <div className="md:hidden flex text-orange-500 gap-x-2 font-normal justify-evenly">
                    <NavCategory />
                </div>
                <span className="border border-orange-500"></span>
                <div className="w-ful overflow-y-auto flex flex-col gap-y-4 md:grid grid-cols-3 md:gap-2">
                    <Suspense fallback={<CardSkeleton />} >
                        {data?.map((items, idx) => (
                            <Fragment key={idx}>
                                {items.map(item => (
                                    <Card
                                        key={item.id} 
                                        food={item}
                                        alreadyInCart={setOfFoods?.includes(item.id)}
                                    />
                                ))}
                            </Fragment>
                        ))}                    
                    </Suspense>
                </div>
                {user?.id && (
                    <CartButton />
                )}
            </div>
        </main>
    )
}