"use client"
import { useTomatoStore } from "@/store/store";
import { GiHamburger } from "react-icons/gi"
import Image from "next/image"
import { Data } from "./page"
type Props = {
    data: Data[]
    id: number
}
function Card(props: Data) {
    const addData = useTomatoStore(state => state.addData);
    return (
        <div className="rounded-3xl bg-[#303030]  w-fit transition-all hover:scale-105 overflow-clip  flex flex-col pb-4">
            <Image src={`/menuItems${props.image}`} className="mx-auto   rounded-3xl aspect-square object-contain" width={300} height={250} alt={props.name} />
            <div className="flex flex-col justify-between flex-1">
                <h1 className=" text-xl mt-2 w-fit mx-auto text-center">{props.name}</h1>
                <p className="flex justify-between items-center mt-2 px-4">
                    <span className=" text-xl font-sans">${props.price}</span>
                    <button className="px-4 py-2 text-white rounded-3xl flex items-center gap-4 bg-mSecondary"
                        onClick={() => {
                            addData(props)
                        }}
                    ><span>Order</span> <GiHamburger /></button>
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