
import { Fragment } from "react";
import { Montserrat } from "next/font/google"
import Card from "./Card";
import Image from "next/image";
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat"
})
export type Data = {
  id: number,
  name: string,
  description: string,
  ingredients: string[],
  spicy: boolean,
  vegetarian: boolean,
  price: number,
  image: string
}
export default async function Home() {
  const res = await fetch("http://4.188.232.104:4000/db")
  const { dessert }: { dessert: Data[] } = await res.json();
  return (
    <Fragment>
      <main className="bg-secondary-dark">
        <div>
        </div>
      </main>
    <div className={`${montserrat.variable} hidden grid bg-secondary-dark w-full `}>
      {dessert.map((item: Data) => { return <Card {...item} key={item.id} /> })}
    </div>
    </Fragment>
  );
}
