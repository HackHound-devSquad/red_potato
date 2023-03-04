"use client"
import { useTomatoStore } from "@/store/store"
import Link from "next/link";
import { Orbitron } from "next/font/google"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri"
import { useState } from "react";
import logo from "@/app/logo.svg"
import Image from "next/image";
const orbitron = Orbitron({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-orbitron"
})
function Navbar() {
    const data = useTomatoStore(state => state.cart.length);
    const [nav, setNav] = useState(false);
    return (
        <header className={`${orbitron.variable} font-orbitron`}>
            <nav className="flex justify-between items-center py-4 px-6 text-3xl text-white">
                <div>
                    <Image src={logo} className="" alt="logo" width={100} height={100} />
                </div>
                <ul className={`flex  items-center flex-row gap-8 text-lg  text-right  translate-x-0  backdrop-blur-0 h-fit pt-0 pr-0 w-fit bg-transparent static `}>
                    <li>Home</li>
                    <li>
                        <button className=" text-4xl relative">
                            <HiOutlineShoppingCart />
                            <span className="w-4 text-black absolute bottom-0 right-0 bg-white rounded-full aspect-square grid place-content-center text-xs">{data}</span>
                        </button>
                    </li>
                    <li>
                        <Link href="/login" className="px-4 py-2 hover:bg-mPrimary/100  bg-mPrimary/90 rounded-xl">
                            Login
                        </Link>
                    </li>
                </ul>

                <ul className="flex gap-3 text-3xl z-20 md:hidden">
                    <button className="  relative">
                        <HiOutlineShoppingCart />
                        <span className="w-4 text-black absolute bottom-0 right-0 bg-white rounded-full aspect-square grid place-content-center text-xs">{data}</span>
                    </button>
                    <button
                        className=""
                        onClick={() => {
                            setNav(!nav)
                        }}
                    >{
                            nav ? <RiMenuFoldLine /> : <RiMenuUnfoldLine />
                        }
                    </button>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar