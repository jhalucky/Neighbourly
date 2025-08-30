import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.from(heroRef.current.querySelectorAll("h1"), {
        x: -100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      })
      .from(heroRef.current.querySelector("input"), {
        y: 50,
        opacity: 0,
        duration: 0.8,
      }, "-=0.5")
      .from(heroRef.current.querySelector("button"), {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      }, "-=0.4");
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="py-20 overflow-x-hidden px-4 md:px-20 bg-gradient-to-r from-black to-gray-900 text-white"
    >
      <div>
        <h1 className="text-5xl md:text-8xl mb-2 md:mb-5">Hire Trusted</h1>
        <h1 className="text-5xl md:text-9xl text-red-600">Professionals</h1>
        <h1 className="text-5xl md:text-8xl mt-2 md:mt-5">Near You</h1>
      </div>

      <div className="mt-8">
        <input
          className="border border-gray-600 bg-black/70 text-white py-2 px-4 rounded w-72 focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder="Enter your area/pincode"
        />
        <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded ml-2 shadow-lg shadow-red-600/40 transition">
          Search
        </button>
      </div>
    </section>
  );
}
