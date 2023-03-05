"use client"
import { useTomatoStore } from "@/store/store"
import Link from "next/link";
import { GiMoonOrbit, GiHamburger } from "react-icons/gi"
import useAuthStore from "@/store/authStore";
import { useEffect, useState } from "react";
function Navbar() {
    const [Login, setLogin] = useState(false);
    const data = useTomatoStore(state => state.cart.length);
    const user = useAuthStore(state => state.user);
    useEffect (() => {
        if(localStorage.getItem('user') != null){
            setLogin(true);
        }
    },[])

    const logout = () => {
        localStorage.removeItem('user');
        setLogin(false);
    }

    
    return (
        <header >
            <nav className="flex justify-between items-center py-4 px-6 text-3xl text-white">
                <div>
                    <GiMoonOrbit className="text-6xl  text-mPrimary" />
                </div>
                <ul className={`flex  items-center flex-row gap-8 text-lg  text-right  translate-x-0  backdrop-blur-0 h-fit pt-0 pr-0 w-fit bg-transparent static `}>
                    <li>
                        <button className=" text-4xl relative text-mPrimary hover:scale-110 transition-transform">
                            <GiHamburger />
                            <span className="w-4 text-black absolute bottom-0 right-0 bg-white rounded-full aspect-square grid place-content-center text-xs">3</span>
                        </button>
                    </li>
                    <li>
                        {
                            Login ? 
                                <div onClick={logout} >
                                Logout
                                </div>
                             : <Link href="/login" className="px-4 py-2 hover:bg-mPrimary/100  bg-mSecondary/90 rounded-xl">
                            Login
                        </Link>
                        }
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar