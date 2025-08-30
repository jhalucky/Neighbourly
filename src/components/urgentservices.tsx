import { useEffect, useRef, useState } from "react";
import { 
  Ambulance, 
  FireExtinguisher, 
  ShieldAlert, 
  PhoneCall, 
  Hospital, 
  Radiation, 
  Bug, 
  Zap, 
  CloudRainWind, 
  Anchor, 
  Activity, 
  Bell, 
} from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SERVICES = [
  { title: "Ambulance", icon: Ambulance },
  { title: "Fire Services", icon: FireExtinguisher },
  { title: "Police", icon: ShieldAlert },
  { title: "Emergency Call", icon: PhoneCall },
  { title: "Hospital", icon: Hospital },
  { title: "Radiation Control", icon: Radiation },
  { title: "Pest Control", icon: Bug },
  { title: "Electric Emergency", icon: Zap },
  { title: "Flood Rescue", icon: CloudRainWind },
  { title: "Coast Guard", icon: Anchor },
  { title: "Medical Alert", icon: Activity },
  { title: "SOS Alert", icon: Bell },
];

export default function UrgentServices() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const setBP = () => setIsMobile(window.innerWidth < 768);
    setBP();
    window.addEventListener("resize", setBP);
    return () => window.removeEventListener("resize", setBP);
  }, []);

  // Calculate step
  const getStep = () => {
    if (!cardRef.current) return 0;
    const gap = 16;
    return cardRef.current.offsetWidth + gap;
  };

  const slideTo = (i: number) => {
    const clamped = Math.max(0, Math.min(i, SERVICES.length - 1));
    setIndex(clamped);
  };

  const next = () => slideTo(index + 1);
  const prev = () => slideTo(index - 1);

  return (
    <section className="py-12">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Emergency Services
      </h3>

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
            {SERVICES.map((s, i: number) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  ref={i === 0 ? cardRef : null}
                  className="flex-shrink-0 w-[85vw] h-64 rounded-xl shadow-lg p-4 bg-white justify-center items-center flex flex-col"
                >
                  <Icon className="w-20 h-20 text-red-600 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 text-center">{s.title}</h4>
                  <button className="mt-3 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full">
                    Call {s.title}
                  </button>
                </div>
              );
            })}
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
          {index < SERVICES.length - 1 && (
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
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="rounded-xl shadow-lg p-6 bg-white w-full h-64 justify-center items-center flex flex-col"
              >
                <Icon className="w-20 h-20 text-red-600 mb-4" />
                <h4 className="text-lg font-semibold text-center text-gray-900">{s.title}</h4>
                <button className="mt-3 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full">
                  Call {s.title}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
