import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    const setBP = () => setIsMobile(window.innerWidth < 768);
    setBP();
    window.addEventListener("resize", setBP);
    return () => window.removeEventListener("resize", setBP);
  }, []);

  
  const getStep = () => {
    if (!cardRef.current) return 0;
    const gap = 16;
    return cardRef.current.offsetWidth + gap;
  };

  const slideTo = (i) => {
    const clamped = Math.max(0, Math.min(i, CARDS.length - 1));
    setIndex(clamped);
  };

  const next = () => slideTo(index + 1);
  const prev = () => slideTo(index - 1);

  return (
    <section className="py-10">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Popular Services
      </h3>

      {/* MOBILE SLIDER */}
      {isMobile ? (
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-stretch transition-transform duration-500 ease-in-out"
            style={{
              gap: 16,
              transform: `translateX(-${index * getStep()}px)`,
            }}
          >
            {CARDS.map((c, i) => (
              <div
                key={c.title}
                ref={i === 0 ? cardRef : null}
                className="flex-shrink-0 w-[85vw] h-64 rounded-xl shadow-lg p-4 bg-white justify-center items-center flex flex-col"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-36 h-36 object-cover rounded-md mb-3"
                />
                <h4 className="text-lg font-semibold text-gray-900 text-center">{c.title}</h4>
                <button className="mt-2 px-4 py-2 mb-2 bg-red-600 hover:bg-red-700 text-white rounded-full">Find Service</button>
              </div>
            ))}
          </div>

          {/* Chevrons */}
          {index > 0 && (
            <button
              aria-label="Previous"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-900/80 text-white p-2 rounded-full"
            >
              <ChevronLeft size={18} />
            </button>
          )}
          {index < CARDS.length - 1 && (
            <button
              aria-label="Next"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-900/80 text-white p-2 rounded-full"
            >
              <ChevronRight size={18} />
            </button>
          )}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="rounded-xl shadow-lg p-4 bg-white w-full h-64 justify-center items-center flex flex-col"
            >
              <img
                src={c.img}
                alt={c.title}
                className="w-36 h-36 object-cover rounded-md mb-3"
              />
              <h4 className="text-lg font-semibold text-center text-gray-900">{c.title}</h4>
              <button className="mt-2 px-4 py-2 mb-2 bg-red-600 hover:bg-red-700 text-white cursor-pointer rounded-full">Find Service</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
