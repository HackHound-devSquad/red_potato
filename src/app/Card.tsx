"use client"
import { useTomatoStore } from "@/store/store";
import { GiHamburger } from "react-icons/gi"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import Image from "next/image"
import { Data } from "./page"
import { useState } from "react";
import { m as motion } from "framer-motion"
function Card(props: Data) {
    const [isFav, setIsFav] = useState(false)
    const addData = useTomatoStore(state => state.addData);
    const animate = {
        scale: 1.1,
        transition: {
            duration: 0.2,
        },
    };
    return (
        <div className="card" onDoubleClick={() => {
            setIsFav(!isFav)
        }}>
            <Image src={`/menuItems${props.image}`} className="mx-auto   aspect-square object-contain" width={300} height={200} alt={props.name} />
            <div className="flex flex-col justify-between flex-1 relative">
                <button className="absolute  -translate-y-full left-0 w-full px-5 pb-4 bg-gradient-to-t from-black to-[#00000005] "
                    onClick={() => {
                        setIsFav(!isFav)
                    }}
                >
                    {
                        isFav ? <AiFillHeart className="text-3xl text-red-500 ml-auto" onClick={() => setIsFav(false)} /> : <AiOutlineHeart className="text-3xl text-red-500 ml-auto" onClick={() => setIsFav(true)} />
                    }
                </button>
                <h1 className=" text-xl mt-2 w-fit mx-auto text-center mb-2">{props.name}</h1>
                <p className="flex justify-between items-center mt-2 px-4">
                    <span className=" text-xl font-sans">${props.price}</span>
                    <motion.button
                        whileHover={animate}
                        whileTap={
                            {
                                scale: 0.9,
                                backgroundColor: "#966220",
                            }
                        }
                        className="px-4 py-1 text-white rounded-xl flex items-center gap-4 bg-mSecondary"
                        onClick={() => {
                            addData(props)
                        }}
                    ><span>Order</span> <GiHamburger /></motion.button>
                </p>
            </div>
        </div>
    )
}

export default Card;


// <div className=" pt-2 pb-1 px-2 bg-[#2a303c] rounded-2xl  max-w-xs">
//         //     <Image src={props.image} className="  rounded-2xl object-cover w-full h-60 " width={300} height={900} alt={props.name} />
//         //     <article className="text-white   ">
//         //         <div className="flex justify-between items-center mt-3">
//         //             <p className="text-2xl font-semibold ">{props.name}</p>
//         //             <figure aria-label={`${props.vegetarian ? " veg " : " non-veg "}`} className={`grid w-fit place-content-center  border-2 ${props.vegetarian ? "border-green-500 " : " border-red-500 "}`}>
//         //                 <figure className={`${props.vegetarian ? " bg-green-500 " : "bg-red-500  "} aspect-square p-1 rounded-full m-1`} />
//         //             </figure>
//         //         </div>
//         //         <p className="italic my-1 text-sm">{props.description}</p>
//         //         <div className="flex items-center justify-between">
//         //             <p className=" w-fit ">$ {props.price}</p>
//         //             <button
//         //                 className="block  px-2 py-1 bg-mPrimary  text-white rounded-lg my-2"
//         //                 onClick={() => {
//         //                     addData(props)
//         //                 }}
//         //             >Add to cart</button>

//         //         </div>
//         //     </article>

//         // </div>