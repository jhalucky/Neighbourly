import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.4, duration: 0.8, ease: "easeOut" },
    }),
  };

  const thisVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.4, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="w-full bg-gray-100 py-20 px-3 md:px-6 flex flex-col items-start">
      <div className="max-w-4xl text-left">
        {/* Animated Heading */}
        <motion.h1
          custom={0}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={textVariants}
          className="text-4xl sm:text-5xl md:text-7xl"
        >
          Hire Trusted
        </motion.h1>

        <motion.h1
          custom={1}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={thisVariants}
          className="text-5xl sm:text-8xl md:text-8xl text-red-600 my-2 md:my-1"
        >
          Professionals
        </motion.h1>

        <motion.h1
          custom={2}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={textVariants}
          className="text-4xl sm:text-5xl md:text-7xl"
        >
          Near You
          <span className="text-red-600">.</span>
        </motion.h1>

        {/* Input and Button */}
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
