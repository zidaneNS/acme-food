import { PhotoIcon } from "@heroicons/react/24/outline"

export default function HeroSkeletonMobile() {
    return (
        <>
            <div className="w-[640px] h-[400px] flex rounded-xl bg-slate-300 justify-center items-center">
                <PhotoIcon className="w-20 text-white" />
            </div>
        </>
    )
}