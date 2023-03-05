import Card from "./Card"
import { Data } from "./page"

import { Playfair_Display } from "next/font/google"
const playfair = Playfair_Display({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-playfair"
})

function Menu({ data }: { data: Data[] }) {
    return (<>
        <article className={`flex justify-between gap-x-10 max-w-5xl mx-auto mb-10 items-center ${playfair.variable} font-playfair`}>
            <h2 className={`  font-black text-6xl text-right flex-1  `}>Our Cosmic Menu</h2>
            <p className="flex-1 text-2xl ">Our cosmic food menu takes you on a journey through the stars with every bite.</p>
        </article>
        <section className={`${playfair.variable} font-playfair flex  gap-5 px-16`}>
            {data.map((item, index) => {
                item = { ...item, id: index }
                return <Card {...item} id={index} key={index} />
            })}
        </section>
    </>
    )
}

export default Menu