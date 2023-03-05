"use client"
import Card from "./Card"
import { Data } from "./page"
function Menu({ data }: { data: Data[] }) {
    return (<section className="pb-24">
        <article className={`flex justify-between gap-x-10 max-w-5xl  mx-auto mb-10 items-center  font-playfair px-5`}>
            <h2 className={`  font-black text-6xl text-right flex-1  `}>Our Cosmic Menu</h2>
            <p className="flex-1 text-2xl ">Our cosmic food menu takes you on a journey through the stars with every bite.</p>
        </article>
        <section className={` font-playfair flex menu  overflow-scroll overscroll-none gap-5 px-16`}>
            {/* {data.map((item, index) => {
                item = { ...item, id: index }
                return <Card {...item} key={index} />
            })} */}
        </section>
    </section>
    )
}

export default Menu