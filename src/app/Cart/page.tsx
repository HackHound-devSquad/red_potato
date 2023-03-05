"use client"
import { useTomatoStore } from "@/store/store"
import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Card from "./Card";

function Cart() {
    const data = useTomatoStore(state => state.cart)

    const [amount, setAmount] = useState(0);
    useEffect(() => {
        let total = 0;
        data.forEach((item) => {
            total += item.price * item.quantity;
        })
        setAmount(total);
    }, [data])

    return (
        <main className="">
            <Navbar />
            <span className="border-t border-t-mPrimary block w-[95vw] mx-auto h-1 -mt-1" />
            <section>
                {data.length === 0 ? <h1 className="text-center text-4xl font-black text-mPrimary mt-4 font-orbitron tracking-widest">Cart is Empty</h1> : <>
                    <h1 className="text-center text-4xl font-black text-mPrimary mt-4 font-orbitron tracking-widest">Cart</h1>
                    <div className="grid grid-cols-4 px-10">
                        {
                            data.map((item) => {
                                return <Card {...item} key={item.id} />
                            })
                        }
                    </div>
                    <div>
                        <h1 className="text-center text-4xl font-black text-mPrimary mt-4 font-orbitron tracking-widest">Total Amount = {amount}</h1>
                    </div>
                </>}

            </section>
        </main>
    )
}

export default Cart
        // <div className="bg-gray-900 py-7 text-white">
        //     <button

        //         className="px-4 py-2 rounded-lg bg-gray-400"
        //     >PayNow</button>
        //     <h2>total amount = {amount}</h2>
        //     {data.map((item) => {
        //         return <Card {...item} key={item.id} />
        //     })}

        // </div>