// Testimonials.jsx
export default function Testimonials() {
  const testimonials = [
    { id: 1, name: "John Doe", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "https://i.pravatar.cc/50?img=1" },
    { id: 2, name: "Jane Smith", text: "Accusantium doloremque laudantium totam rem aperiam.", img: "https://i.pravatar.cc/50?img=2" },
    { id: 3, name: "Robert Lee", text: "Quis autem vel eum iure reprehenderit qui in ea.", img: "https://i.pravatar.cc/50?img=3" },
    { id: 4, name: "Emily Johnson", text: "Ut enim ad minima veniam, quis nostrum exercitationem.", img: "https://i.pravatar.cc/50?img=4" },
    { id: 5, name: "Chris Evans", text: "Excepteur sint occaecat cupidatat non proident.", img: "https://i.pravatar.cc/50?img=5" },
    { id: 6, name: "Sophia Brown", text: "Sed ut perspiciatis unde omnis iste natus error sit.", img: "https://i.pravatar.cc/50?img=6" },
    { id: 7, name: "Liam Wilson", text: "Duis aute irure dolor in reprehenderit in voluptate.", img: "https://i.pravatar.cc/50?img=7" },
    { id: 8, name: "Olivia Davis", text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.", img: "https://i.pravatar.cc/50?img=8" },
    { id: 9, name: "Mason Taylor", text: "Neque porro quisquam est qui dolorem ipsum quia dolor.", img: "https://i.pravatar.cc/50?img=9" },
    { id: 10, name: "Ava Martinez", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", img: "https://i.pravatar.cc/50?img=10" },
  ];

  // Duplicate list to make loop seamless
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="w-full overflow-hidden bg-gray-100 py-10">
      <h2 className="text-center text-2xl font-bold mb-8">What Our Neighbours Say</h2>
      <div className="relative flex overflow-hidden">
        <div className="flex animate-scroll gap-6 px-6">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="min-w-[250px] max-w-[250px] bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full mb-3" />
              <p className="text-sm text-gray-600 mb-2">"{t.text}"</p>
              <h4 className="font-semibold text-gray-800">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
