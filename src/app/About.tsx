"use client"
import { m as motion } from "framer-motion";
import "./marquee.css";
const marqueeVariants = {
    animate: {
        x: [0, -900],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 5,
                ease: "linear",
            },
        },
    },
};
const About = () => {
    return (
        <>
            <div className="marquee" id="about">
                <motion.div
                    className="track"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    <p>
                        With the hands of a cosmic chef, every product becomes a work of art - a masterpiece of flavor, texture, and beauty.
                    </p>
                </motion.div>
            </div>
        </>
    );
};
export default About;