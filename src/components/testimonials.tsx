import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

  const doubled = [...testimonials, ...testimonials];
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!trackRef.current) return;
      const totalWidth = trackRef.current.scrollWidth / 2;

      const tween = gsap.to(trackRef.current, {
        x: -totalWidth,
        duration: 45,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x: string) => (parseFloat(x) % totalWidth)),
        },
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top 90%",
          toggleActions: "play pause resume pause",
        },
      });

      // pause on hover
      const wrap = trackRef.current.parentElement!;
      const pause = () => tween.pause();
      const play = () => tween.resume();
      wrap.addEventListener("mouseenter", pause);
      wrap.addEventListener("mouseleave", play);

      // hover lift for cards
      const cards = gsap.utils.toArray<HTMLDivElement>(".t-card");
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () =>
          gsap.to(card, { y: -6, scale: 1.02, duration: 0.25, ease: "power2.out" })
        );
        card.addEventListener("mouseleave", () =>
          gsap.to(card, { y: 0, scale: 1, duration: 0.25, ease: "power2.out" })
        );
      });

      return () => {
        wrap.removeEventListener("mouseenter", pause);
        wrap.removeEventListener("mouseleave", play);
      };
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-gray-100 py-12">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        What Our Neighbours Say
      </h2>

      <div className="relative overflow-hidden">
        {/* gradient edge fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-100 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-100 to-transparent z-10" />

        <div ref={trackRef} className="flex gap-6 px-6 w-max">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="t-card min-w-[260px] max-w-[260px] bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center"
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
