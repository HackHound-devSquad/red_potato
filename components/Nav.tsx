import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import Image from "next/image";
import { useTomatoStore } from "@/store/store";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const data = useTomatoStore((state) => state.cart.length);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" w-full bg-secondary-dark ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src={"/orbit_oven.png"}
            width={200}
            height={60}
            alt="logo"
          />
        </Link>
        <ul className=" flex gap-x-3">
    
          <Link href="/cart">
            <div className="relative">
              <HiShoppingCart className=" md:text-4xl text-2xl inline-block  cursor-pointer" />
              <span className="absolute md:top-0 -top-2 -right-1 md:right-0 bg-primary rounded-full w-5 h-5 flex justify-center items-center text-white text-xs">
              {data}
              </span>
            </div>
          </Link>
          <div className="z-10" >
           {
            !nav ? <AiOutlineMenu onClick={handleNav} className="relative md:text-4xl text-2xl inline-block  cursor-pointer"  />
            : <AiOutlineClose onClick={handleNav} className="relative md:text-4xl text-2xl inline-block cursor-pointer" />
           }
           </div>
        </ul>

      
        {/* Mobile Menu */}
        <aside
          className={
            nav
              ? " absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-secondary-dark text-center ease-in duration-500"
              : " absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-primary text-center ease-in duration-500"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/menu">Menu</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Nav;
