import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
    const ctx = gsap.context(() => {
      if (!trackRef.current) return;

      // cards reveal when section enters
      const cards = gsap.utils.toArray<HTMLDivElement>(".cat-card");
      gsap.from(cards, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top 85%",
        },
      });

      // hover lift
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () =>
          gsap.to(card, { y: -6, duration: 0.25, ease: "power2.out" })
        );
        card.addEventListener("mouseleave", () =>
          gsap.to(card, { y: 0, duration: 0.25, ease: "power2.out" })
        );
      });

      // marquee (right -> left), seamless
      const totalWidth = trackRef.current.scrollWidth / 2;
      const tween = gsap.to(trackRef.current, {
        x: -totalWidth,
        duration: 35,
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

      return () => {
        wrap.removeEventListener("mouseenter", pause);
        wrap.removeEventListener("mouseleave", play);
      };
    }, trackRef);

    return () => ctx.revert();
  }, []);

  const doubled = [...CARDS, ...CARDS];

  return (
    <section className="py-12 bg-white">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Popular Services
      </h3>

      <div className="overflow-hidden w-full">
        <div ref={trackRef} className="flex gap-6 w-max px-4">
          {doubled.map((c, i) => (
            <div
              key={i}
              className="cat-card w-64 h-72 flex-shrink-0 rounded-xl shadow-lg bg-white border border-gray-100 flex flex-col items-center justify-center p-4"
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
