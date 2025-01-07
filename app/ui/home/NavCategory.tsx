'use client';

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

export default function NavCategory() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [isDrink, setIsDrink] = useState<boolean>(true);
    const [isFood, setIsFood] = useState<boolean>(true);
    const [isDessert, setIsDessert] = useState<boolean>(true);

    const handleCategory = (category: string, checked: Boolean, changer: Dispatch<SetStateAction<boolean>>) => {
        const params = new URLSearchParams(searchParams);
        let query = category;
        if (isDrink) query += '-drink';
        if (isFood) query += '-food';
        if (isDessert) query += '-dessert';
        if (!checked) {
            category.length > 0 ? params.set('category', query) : params.delete('category');
            replace(`${pathname}?${params.toString()}`);
        } else {
            const categories = searchParams.get('category')?.split('-').filter(item => item != category).join('-') || '';
            categories.length > 0 ? params.set('category', categories) : params.delete('category');
            replace(`${pathname}?${params.toString()}`);
        }
        changer(prev => !prev);
    }

    const navCategories = [
        {
            name: 'Drinks',
            value: 'drink',
            state: isDrink,
            changer: setIsDrink
        },
        {
            name: 'Foods',
            value: 'food',
            state: isFood,
            changer: setIsFood
        },
        {
            name: 'Desserts',
            value: 'dessert',
            state: isDessert,
            changer: setIsDessert
        }
    ];
    return (
        <>
            {navCategories.map(category => (
                <div className="flex gap-x-2 items center justify-center" key={category.value}>
                    <input type="checkbox" checked={category.state} onChange={() => handleCategory(category.value, category.state, category.changer)} id={category.value}/>
                    <label htmlFor={category.value} className="text-sm font-bold hover:underline cursor-pointer">{category.name}</label>
                </div>
            ))}
        </>
    )
}