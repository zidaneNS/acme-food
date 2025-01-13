import { logout } from "@/app/lib/action/auth";

export default function LogoutButton() {
    return (
        <form action={logout} className="w-full">
            <button type="submit" className="py-2 px-4 bg-blue-700 text-white hover:bg-blue-600 transition duration-300 rounded-xl w-full">Logout</button>
        </form>
    )
}