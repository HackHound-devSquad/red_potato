"use client"
import { useTomatoStore } from "@/store/store"
import Link from "next/link";
import { GiMoonOrbit, GiHamburger } from "react-icons/gi"
function Navbar() {
    // get total items in cart by adding all the quantity
    const totalItems = useTomatoStore(state => state.cart.reduce((ack: number, item) => ack + item.quantity, 0))
    return (
        <header >
            <nav className="flex justify-between items-center py-4 px-6 text-3xl text-white">
                <div>
                    <GiMoonOrbit className="text-6xl  text-mPrimary" />
                </div>
                <ul className={`flex  items-center flex-row gap-8 text-lg  text-right  translate-x-0  backdrop-blur-0 h-fit pt-0 pr-0 w-fit bg-transparent static `}>
                    <li>
                        <Link href="/Cart" className=" text-4xl relative text-mPrimary hover:scale-110 transition-transform">
                            <GiHamburger />
                            <span className="w-4 text-black absolute bottom-0 right-0 bg-white rounded-full aspect-square grid place-content-center text-xs">{totalItems}</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login" className="px-4 py-2 hover:bg-mPrimary/100  bg-mSecondary/90 rounded-xl">
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar