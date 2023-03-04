"use client"
import { useTomatoStore } from "@/store/store"
import { useEffect, useState } from "react";
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
        <div className="bg-gray-900 py-7 text-white">
            <button

                className="px-4 py-2 rounded-lg bg-gray-400"
            >PayNow</button>
            <h2>total amount = {amount}</h2>
            {data.map((item) => {
                return <Card {...item} key={item.id} />
            })}

        </div>
    )
}

export default Cart