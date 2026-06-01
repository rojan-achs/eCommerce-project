import Link from "next/link";

export default function Navbar() {
    return (
        <>
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-gray-300 p-3 backdrop-blur">
        <Link href="/" className="text-lg font-bold text-black">
            LocalBusiness Hub
        </Link>
        </header>
        </>
    )
}