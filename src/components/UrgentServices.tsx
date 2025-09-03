import { Ambulance, Phone, Shield, Flame, Home, Zap } from "lucide-react";

const services = [
  { icon: <Ambulance className="w-10 h-10 text-red-500" />, title: "Ambulance", desc: "Call emergency medical services instantly." },
  { icon: <Phone className="w-10 h-10 text-blue-500" />, title: "Police", desc: "Connect with local police for urgent help." },
  { icon: <Flame className="w-10 h-10 text-orange-500" />, title: "Fire Services", desc: "Report and handle fire emergencies quickly." },
  { icon: <Zap className="w-10 h-10 text-yellow-500" />, title: "Electrician", desc: "Fix sudden electrical hazards at home." },
  { icon: <Shield className="w-10 h-10 text-green-500" />, title: "Security", desc: "Neighbourhood watch and urgent protection." },
  { icon: <Home className="w-10 h-10 text-purple-500" />, title: "Locksmith", desc: "Quick help for lockouts and emergencies." },
];

export default function UrgentServices() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Urgent Services</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1"
            >
              <div className="flex justify-center mb-3">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
