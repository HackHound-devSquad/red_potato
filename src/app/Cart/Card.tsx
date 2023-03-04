"use client"

import { Cart, useTomatoStore } from "@/store/store"

function Card(item: Cart) {
    const remove = useTomatoStore(state => state.removeData);
    const decrease = useTomatoStore(state => state.removeItem);
    return (
        <div className="bg-gray-800 border-red-500 p-4 m-4" key={item.id} >
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <p>Price:{item.price}</p>
            <p>quantity : {item.quantity}</p>
            <button
                className="px-4 py-2 rounded-lg bg-gray-400"
                onClick={() => {
                    remove(item.id)
                }}
            >Remove from Cart</button>
            <button
                className="px-4 py-2 rounded-lg bg-gray-400 mx-4"
                onClick={() => {
                    decrease(item.id)
                }}>decrease</button>
        </div>
    )
}

export default Card