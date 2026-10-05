import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
    return (
        <nav className="flex h-16 items-center justify-end gap-4 border-b
        border-slate-200 bg-white px-6 shadow-sm">
            <TopMenuItem
            title="Booking"
            pageRef="/booking"
            />

            <Image
            src="/assets/logo.png"
            alt="Venue Explorer Logo"
            width={140}
            height={48}
            className="h-10 w-auto object-contain"/>
        </nav>
    )
}
