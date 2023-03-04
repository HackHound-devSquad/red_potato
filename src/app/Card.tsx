"use client"
import { useTomatoStore } from "@/store/store";
import Image from "next/image"
import { Data } from "./page"
function Card(props: Data) {
    const addData = useTomatoStore(state => state.addData);
    return (
        <div className="border border-red-500 text-white w-fit p-4 my-5">
            <Image src={props.image} alt={props.name} width={300} height={300} />
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p>{props.ingredients}</p>
            <p>{props.spicy}</p>
            <p>{props.vegetarian}</p>
            <p>{props.price}</p>
            <button onClick={() => {
                addData(props)
            }} className="bg-red-500 px-3 py-1 my-1 rounded-lg">Add to cart</button>
        </div>
    )
}

export default Card