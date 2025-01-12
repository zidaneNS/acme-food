// import { getUser } from "../lib/dal";
import Navbar from "../ui/home/Navbar";

export default async function Layout({ children }: { children: React.ReactNode }) {
    // const user = await getUser();
    return (
        <div className="h-screen flex flex-col bg-white text-black">
            <Navbar />
            <div className="w-full h-full overflow-auto">{children}</div>
        </div>
    )
}