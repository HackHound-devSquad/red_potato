import Navbar from "./Navbar"
import { BsArrowDownCircle } from "react-icons/bs"
import { Orbitron } from "next/font/google"
const orbitron = Orbitron({
    weight: ["400", "500", "600", "700", "900"],
    subsets: ["latin"],
    variable: "--font-orbitron"
})
function Herosection() {
    return (
        <main className={`${orbitron.variable} font-orbitron hero   bg-red-500 w-screen h-screen relative `}>
            <Navbar />
            <section className="mt-24">
                <h1 className="text-center text-7xl font-black text-mPrimary">Orbital Oven</h1>
                <p className="border-b border-b-white/60 px-7 block w-fit mx-auto pb-4 text-center mt-4 text-2xl text-white/60 font-semibold">Earthly Delights,Martian Setting</p>
                <a href="#about"><BsArrowDownCircle className="text-5xl text-white/50 mx-auto block mt-32 animate-pulse animate-bounce" /></a>

            </section>
        </main>
    )
}

export default Herosection