import Herosection from "./Herosection";
import About from "./About";
import { Metadata } from "next";
import Menu from "./Menu";
export const metadata: Metadata = {
  title: 'Codename :: RedPotato',
  description: 'Generated by create next app',
}
export type Data = {
  id?: number;
  name: string;
  description: string;
  image: string;
  price: string;
}
export default async function Home() {
  // const res = await fetch("http://4.188.232.104:4000/db")
  // const data = await res.json();
  // console.log(data)
  const data = [
    {

      name: "Red Planet Ramen",
      description: "A spicy ramen with a kick of martian heat.",
      image: "/red_planet_ramen.png",
      price: "79"

    },
    {
      name: "Cosmic Lamb Chops",
      description: "Juicy lamb chops with a side of space potatoes and martian garlic sauce.",
      image: "/cosmic_lamb_chops.png",
      price: "99"


    },
    {
      name: "Crater Cakes",
      description: "A delicious dessert made from the finest Martian soil.",
      image: "/craterCakes.png",
      price: "59"

    },
    {
      name: "Hurricane Soup",
      description: "Hot and spicy Martian eye soup.",
      image: "/eye_soup.png",
      price: "99"


    },
    {
      name: "Meat Balls for Mars",
      description: "Spicy and Juicy meat balls with a touch martian style",
      image: "/meatball_for_mars.png",
      price: "69"

    },
    {
      name: "Terraformed Truffle",
      description: "creamy and flavourful Risotto with truffle.",
      image: "/rissotto.png",
      price: "59"

    },


  ]
  return (
    <>
      <Herosection />
      <About />
      <Menu data={data} />
    </>
  );
}

