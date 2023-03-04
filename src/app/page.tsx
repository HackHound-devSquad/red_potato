
import { useTomatoStore } from "@/store/store";
import { Montserrat } from "next/font/google"
import burger from "@/app/ultra.jpg"
import Card from "./Card";
import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
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

  return (
    <div className={`${montserrat.variable}  hero font-montserrat bg-red-500 w-screen h-screen relative `}>
      {/* <Image src={burger} alt="hero image" className="w-full h-full object-cover bg-fixed" /> */}
      <div className="absolute bg-black/5 top-0 left-0 w-full h-full ">
        <Navbar />
      </div>
    </div>
  );
}

{/* <div>
  <div className={`${montserrat.variable} font-montserrat  bg-[#130603] relative w-screen h-screen overflow-clip isolate`}>
      <Image className="object-cover -z-10" fill={true} src={burger} alt="food" />
      <div className="w-full h-full bg-black/50">
      <Navbar />
      <h1
      className="text-5xl text-center font-black text-main pt-16 text-mPrimary"
      >Oribtal Oven</h1>
      </div>
    <h1 className="text-6xl text-center font-black text-white ">Orbital Oven</h1>  
      {dessert.map((item: Data) => { return <Card {...item} key={item.id} /> })}
</div> */}