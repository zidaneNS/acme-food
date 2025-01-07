import Image from "next/image";

export default function Card() {
    return (
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
    )
}