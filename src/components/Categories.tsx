import { useRef, useState } from "react";
import { fetchNearbyServices } from "../utils/fetchnearbyservices";
import Modal from "./Modal";
import type { Service } from "../utils/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARDS = [
  { title: "electricians", img: "/electricity.jpg" },
  { title: "plumbers", img: "/plumbing.jpg" },
  { title: "cleaners", img: "/cleaning.jpg" },
  { title: "painters", img: "/painting.jpg" },
  { title: "carpenters", img: "/carpenter.jpg" },
  { title: "gardeners", img: "/gardening.jpg" }
];

export default function Categories() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [nearbyServices, setNearbyServices] = useState<Service[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const trackRef = useRef<HTMLDivElement | null>(null);

  const handleCheckNearby = async (category: string) => {
  setLoading(true);
  setSelectedCategory(category);

  try {
    const services: Service[] = await fetchNearbyServices();

    // Normalize category
    const normalizedCategory = category.trim().toLowerCase();

    // Helper: strip plural "s" for better matching
    const normalizeWord = (word: string) =>
      word.trim().toLowerCase().replace(/s$/, "");

    const filteredServices = services.filter((service) => {
      const serviceCategory = normalizeWord(service.category);
      const cardCategory = normalizeWord(normalizedCategory);

      // Flexible match: exact, partial, or singular/plural
      return (
        serviceCategory === cardCategory ||
        serviceCategory.includes(cardCategory) ||
        cardCategory.includes(serviceCategory)
      );
    });

    // 🔎 Debug logs
    console.log("🔎 Clicked category:", normalizedCategory);
    console.log("📦 All service categories:", services.map(s => s.category));
    console.log("✅ Filtered services:", filteredServices);

    setNearbyServices(filteredServices);
    setModalOpen(true);
  } catch (err) {
    console.error("Error fetching services:", err);
    alert("Failed to fetch nearby services: " + err);
  } finally {
    setLoading(false);
  }
};


  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-white relative">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Popular Services
      </h3>

      {/* Chevron Left */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md md:hidden"
        onClick={scrollLeft}
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <div
        ref={trackRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide px-4"
      >
        {CARDS.map((c, i) => (
          <div
            key={i}
            className="cat-card w-48 h-56 flex-shrink-0 rounded-lg shadow-lg bg-white border border-gray-100 flex flex-col items-center justify-center p-4 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={c.img}
              alt={c.title}
              className="w-20 h-20 object-cover rounded-md mb-3"
            />
            <h4 className="text-md font-semibold text-gray-900">
              {c.title.charAt(0).toUpperCase() + c.title.slice(1)}
            </h4>
            <button
              className="mt-2 px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm"
              onClick={() => handleCheckNearby(c.title)}
            >
              {loading ? "Loading..." : "Find Service"}
            </button>
          </div>
        ))}
      </div>

      {/* Chevron Right */}
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md md:hidden"
        onClick={scrollRight}
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        services={nearbyServices}
        selectedCategory={selectedCategory}
      />
    </section>
  );
}
