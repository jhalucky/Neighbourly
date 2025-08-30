import { useEffect, useRef } from "react";
import gsap from "gsap";

const CARDS = [
  { title: "Electricians", img: "/electricity.jpg" },
  { title: "Plumbing", img: "/plumbing.jpg" },
  { title: "Cleaning", img: "/cleaning.jpg" },
  { title: "Painting", img: "/painting.jpg" },
  { title: "Carpenters", img: "/carpenter.jpg" },
  { title: "Gardening", img: "/gardening.jpg" },
];

export default function Categories() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (trackRef.current) {
      gsap.to(trackRef.current, {
        xPercent: -50,
        repeat: -1,
        ease: "linear",
        duration: 30,
      });
    }
  }, []);

  const doubled = [...CARDS, ...CARDS];

  return (
    <section className="py-12 bg-white">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Popular Services
      </h3>

      <div className="overflow-hidden w-full">
        <div ref={trackRef} className="flex gap-6 w-max">
          {doubled.map((c, i) => (
            <div
              key={i}
              className="w-64 h-72 flex-shrink-0 rounded-xl shadow-lg bg-white border border-gray-100 flex flex-col items-center justify-center p-4 hover:scale-105 transition"
            >
              <img
                src={c.img}
                alt={c.title}
                className="w-28 h-28 object-cover rounded-md mb-3"
              />
              <h4 className="text-lg font-semibold text-gray-900">{c.title}</h4>
              <button className="mt-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full">
                Find Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
