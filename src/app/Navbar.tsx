"use client"
import { useTomatoStore } from "@/store/store"
import Link from "next/link";

function Navbar() {
    const data = useTomatoStore(state => state.cart.length);

    return (
        <header className="text-white bg-black  text-3xl">
            <nav>
                <Link href="/" className="mr-9">Home</Link>
                <Link href="/Cart">
                    Cart items {data}
                </Link>

            </nav>
        </header>
    )
}

export default Navbar