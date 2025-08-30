import type { Variants } from "framer-motion";
import { easeInOut, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const textVariants: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: ((i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.4,
        duration: 0.8,
        ease: easeInOut,
      },
    })) as any, // <-- cast to any for function-based variant
  };

  const thisVariants: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: ((i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.4,
        duration: 0.8,
        ease: easeInOut,
      },
    })) as any, // <-- cast to any
  };

  const headings = [
    { text: "Hire Trusted", variant: textVariants },
    { text: "Professionals", variant: thisVariants, className: "text-red-600 my-2 md:my-1" },
    { text: "Near You.", variant: textVariants, spanColor: true },
  ];

  return (
    <section className="w-full bg-gray-100 py-20 px-3 md:px-6 flex flex-col items-start">
     
        <div className="max-w-4xl text-left">
        {headings.map((item, index) => (
          <motion.h1
            key={index}
            custom={index}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={item.variant}
            className={`text-4xl sm:text-5xl md:text-7xl ${item.className || ""}`}
          >
            {item.text.split(".")[0]}
            {item.spanColor && <span className="text-red-600">.</span>}
          </motion.h1>
        ))}

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter your location"
            className="px-4 py-3 border border-gray-300 rounded-lg flex-1 text-lg focus:ring-2 focus:ring-red-600 outline-none"
          />
          <button className="px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition">
            Get Started
          </button>
        </div>
      </div>
    
    </section>
  );
}
