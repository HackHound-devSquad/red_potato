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
                <ul className={`flex flex-col items-center md:flex-row gap-8 text-lg absolute top-0 right-0 bg-orange-900/25 backdrop-blur-lg  pt-24 h-screen pr-5 w-[50vw] sm:w-[40vw] transform-gpu transition-transform ${nav ? "translate-x-full" : " translate-x-0 "} text-right  md:translate-x-0  md:backdrop-blur-0 md:h-fit md:pt-0 md:pr-0 md:w-fit md:bg-transparent md:static `}>
                    <li>
                        <Link href="/login" className="px-4 py-2 hover:bg-mPrimary/100  bg-mPrimary/90 rounded-xl">
                            Login
                        </Link>
                    </li>

                    <li>
                        <button className=" text-4xl relative">
                            <HiOutlineShoppingCart />
                            <span className="w-4 text-black absolute bottom-0 right-0 bg-white rounded-full aspect-square grid place-content-center text-xs">{data}</span>
                        </button>
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