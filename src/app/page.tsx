
import { useTomatoStore } from "@/store/store";
import { Montserrat } from "next/font/google"
import Card from "./Card";
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
  const res = await fetch("http://localhost:4000/db")
  const { dessert }: { dessert: Data[] } = await res.json();
  return (
    <div className={`${montserrat.variable} grid bg-black w-full `}>
      {dessert.map((item: Data) => { return <Card {...item} key={item.id} /> })}
    </div>
  );
}
