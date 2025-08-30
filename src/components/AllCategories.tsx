import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Dumbbell,
    Pill,
    WashingMachine,
    CircuitBoard,
    ScissorsLineDashed,
    Barrel
 } from "lucide-react";
const CARDS = [
  { title: "Pharmacy", icon: <Pill className="w-20 h-20 text-blue-500" /> },
  { title: "Gym and Fitness", icon: <Dumbbell className="w-20 h-20 text-red-500" /> },
  { title: "Laundry", icon: <WashingMachine className="w-20 h-20 text-green-500" /> },
  { title: "Electronics Repair", icon: <CircuitBoard className="w-20 h-20 text-yellow-500" /> },
  { title: "Salons", icon: <ScissorsLineDashed className="w-20 h-20 text-pink-500" /> },
  { title: "Watertank Cleaning", icon: <Barrel className="w-20 h-20 text-blue-500" /> },
];

export default function AllCategories() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (trackRef.current) {
      gsap.to(trackRef.current, {
        xPercent: -50,
        repeat: -1,
        ease: "linear",
        duration: 35,
      });
    }
  }, []);

  const doubled = [...CARDS, ...CARDS];

  return (
    <section className="py-12 bg-gray-50">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
        All Services
      </h3>

      <div className="overflow-hidden w-full">
        <div ref={trackRef} className="flex gap-6 w-max">
          {doubled.map((c, i) => (
            <div
              key={i}
              className="w-64 h-72 flex-shrink-0 rounded-xl shadow-lg bg-white border border-gray-100 flex flex-col items-center justify-center p-4 hover:scale-105 transition"
            >
              <div className="flex justify-center mb-3">{c.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900">{c.title}</h4>
              <button className="mt-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full">
                Check Nearby
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
