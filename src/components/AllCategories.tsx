import { useState } from "react";
import { fetchNearbyServices } from "../utils/fetchnearbyservices";
import Modal from "./Modal";
import type { Service } from "../utils/types";
import { Dumbbell, Pill, WashingMachine, CircuitBoard, ScissorsLineDashed, Barrel } from "lucide-react";

const CARDS = [
  { title: "Pharmacy", icon: <Pill className="w-16 h-16 text-blue-500" /> },
  { title: "Gyms", icon: <Dumbbell className="w-16 h-16 text-red-500" /> },
  { title: "Laundry", icon: <WashingMachine className="w-16 h-16 text-green-500" /> },
  { title: "Electronics Repairs", icon: <CircuitBoard className="w-16 h-16 text-yellow-500" /> },
  { title: "Salons", icon: <ScissorsLineDashed className="w-16 h-16 text-pink-500" /> },
  { title: "Watertank Cleaning", icon: <Barrel className="w-16 h-16 text-blue-500" /> },
];

export default function AllCategories() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [nearbyServices, setNearbyServices] = useState<Service[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState(false);

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


  return (
    <section className="py-12 bg-gray-50">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
        All Categories
      </h3>

      <div className="flex flex-wrap justify-center gap-6">
        {CARDS.map((c, i) => (
          <div
            key={i}
            className="all-card w-40 h-48 rounded-lg shadow-lg bg-white border border-gray-100 flex flex-col items-center justify-center p-4 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="icon mb-3">{c.icon}</div>
            <h4 className="text-sm text-gray-900">{c.title}</h4>
            <button
              className="mt-2 px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm"
              onClick={() => handleCheckNearby(c.title)}
            >
              {loading ? "Loading..." : "Find Service"}
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        services={nearbyServices}
        selectedCategory={selectedCategory}
      />
    </section>
  );
}
