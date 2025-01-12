import { PhotoIcon } from "@heroicons/react/24/outline"

export default function HeroSkeletonDesktop() {
    return (
        <>
            <div className="w-[1200px] h-[400px] hidden md:flex rounded-xl bg-slate-300 justify-center items-center">
                <PhotoIcon className="w-20 text-white" />
            </div>
        </>
    )
}