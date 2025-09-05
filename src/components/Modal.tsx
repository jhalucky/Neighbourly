import type { Service } from "../utils/types";
import { Phone } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: Service[];
  selectedCategory: string;
}

export default function Modal({
  isOpen,
  onClose,
  services,
  selectedCategory,
}: ModalProps) {
  console.log("Modal Services:", services); // Log the services passed to the modal
  console.log("Selected Category:", selectedCategory); // Log the selected category

  if (!isOpen) return null;

  // Filter services by the selected category
  const filteredServices = services.filter(
    (s) => s.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Nearby</h2>
        {filteredServices.length === 0 ? (
          <p>No services found in this category nearby.</p>
        ) : (
          filteredServices.map((service) => (
            <div
              key={service.id}
              className="mb-3 p-2 border-b border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-between items-center mb-1">
                <div>
                  <h3 className="font-semibold">{service.name}</h3>
                  <p>Phone: {service.phone}</p>
                </div>

                <a
                  href={`tel:${service.phone}`}
                  className="flex items-center px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  <Phone className="w-4 h-4 mr-1" />
                  Call
                </a>
              </div>
              <p>Address: {service.address}</p>
            </div>
          ))
        )}
        <button
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

