import Link from "next/link"
import "../globals.css";

export default function Nav(){
    return(
        <div className="fixed top-0 bg-white w-screen p-10 z-10">
            <div className="flex flex-row justify-center gap-5">
                <Link href="/">Home</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    )
}