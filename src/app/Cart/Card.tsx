"use client"
import { m as motion } from "framer-motion"
import { RiDeleteBin7Line } from "react-icons/ri"
import { Cart, useTomatoStore } from "@/store/store"
import Image from "next/image";

function Card(props: Cart) {
    const remove = useTomatoStore(state => state.removeData);
    const decrease = useTomatoStore(state => state.removeItem);
    const animate = {
        scale: 1.1,
        transition: {
            duration: 0.2,
        },
    };
    return (
        <>
            <div className="card">
                <Image src={`/menuItems${props.image}`} className="mx-auto   aspect-square object-contain" width={300} height={200} alt={props.name} />
                <div className="flex flex-col justify-between flex-1 relative">
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
                            className="px-4 py-1 text-white rounded-xl  bg-mSecondary"
                            onClick={() => {
                                remove(props.id)
                            }}
                        ><RiDeleteBin7Line /></motion.button>
                        <span className="text-2xl font-bold">{props.quantity}</span>
                        <motion.button
                            whileHover={animate}
                            whileTap={
                                {
                                    scale: 0.9,
                                    backgroundColor: "#966220",
                                }
                            }
                            className="px-4 py-1 text-white rounded-xl  bg-mSecondary"
                            onClick={() => {
                                decrease(props.id)
                            }}
                        >
                            <span className="text-2xl font-bold">-</span>
                        </motion.button>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card
        // <div className="bg-gray-800 border-red-500 p-4 m-4" key={item.id} >
        //     <h1>{item.name}</h1>
        //     <p>{item.description}</p>
        //     <p>Price:{item.price}</p>
        //     <p>quantity : {item.quantity}</p>
        //     <button
        //         className="px-4 py-2 rounded-lg bg-gray-400"
        //         onClick={() => {
        //             remove(item.id)
        //         }}
        //     >Remove from Cart</button>
        //     <button
        //         className="px-4 py-2 rounded-lg bg-gray-400 mx-4"
        //         onClick={() => {
        //             decrease(item.id)
        //         }}>decrease</button>
        // </div>