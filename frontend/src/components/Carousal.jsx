import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import carousal_1 from "../assets/carousal/carousal_1.webp";
import carousal_2 from "../assets/carousal/carousal_2.jpg";
import carousal_3 from "../assets/carousal/carousal_3.webp";
import carousal_4 from "../assets/carousal/carousal_4.jpg";
import carousal_5 from "../assets/carousal/carousal_5.jpg";
import carousal_6 from "../assets/carousal/carousal_6.webp";

// Images (keep them in /public/images/)
const carouselImages = [
    carousal_1,
    carousal_2,
    carousal_3,
    carousal_4,
    carousal_5,
    carousal_6
];

const Carousal = () => {
    const [current, setCurrent] = useState(0);
    const length = carouselImages.length;

    const nextSlide = () => {
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    };

    // Auto scroll every 4s
    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className="relative w-full max-w-6xl mx-auto mt-10 overflow-hidden rounded-xl shadow-lg">
            {/* Left Button */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-emerald-500/60 p-2 rounded-full shadow hover:bg-emerald-600/80 transition"
            >
                <ChevronLeft size={28} className="text-gray-900" />
            </button>

            {/* Right Button */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-emerald-500/60 p-2 rounded-full shadow hover:bg-emerald-600/80 transition"
            >
                <ChevronRight size={28} className="text-gray-900" />
            </button>

            {/* AnimatePresence for smooth slide */}
            <div className="relative w-full h-64 md:h-96">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={current}
                        src={carouselImages[current]}
                        alt={`Slide ${current + 1}`}
                        className="absolute w-full h-full object-cover rounded-xl"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                </AnimatePresence>
            </div>

            {/* Small indicators (dots) */}
            <div className="flex justify-center mt-4 mb-2 space-x-2">
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full ${current === index ? "bg-emerald-600" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousal;
