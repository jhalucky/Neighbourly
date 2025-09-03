import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(heroRef);

      gsap.from(q(".word:not(.pro-word):not(.trusted-word)"), {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.08,
      });

      const proLetters = q(".pro-word span");
      gsap.from(proLetters, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.05,
        delay: 0.3,
      });

      gsap.from(q(".trusted-word"), {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        delay: 0.6,
      });

      
      gsap.fromTo(
        q(".hero-inner"),
        { y: 0 },
        {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      if (btnRef.current) {
        const btn = btnRef.current;
        const move = (e: MouseEvent) => {
          const r = btn.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2);
          const y = e.clientY - (r.top + r.height / 2);
          gsap.to(btn, { x: x * 0.25, y: y * 0.25, duration: 0.3, ease: "power3.out" });
        };
        const reset = () => gsap.to(btn, { x: 0, y: 0, duration: 0.3, ease: "power3.out" });

        btn.addEventListener("mousemove", move);
        btn.addEventListener("mouseleave", reset);

        return () => {
          btn.removeEventListener("mousemove", move);
          btn.removeEventListener("mouseleave", reset);
        };
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="w-full bg-white py-20 px-4 md:px-6">
      <div className="hero-inner max-w-5xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          <span className="word inline-block">Hire</span>{" "}
          <span className="word trusted-word inline-block">Trusted</span>{" "}
          <span className="word pro-word inline-block text-red-600">
            {"Professionals".split("").map((letter, i) => (
              <span key={i} className="inline-block">
                {letter}
              </span>
            ))}
          </span>{" "}
          <span className="word inline-block">Near</span>{" "}
          <span className="word inline-block">
            You<span className="text-red-600">.</span>
          </span>
        </h1>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter your location"
            className="px-4 py-3 border border-gray-300 rounded-lg flex-1 text-lg focus:ring-2 focus:ring-red-600 outline-none"
          />
          <button
            ref={btnRef}
            className="px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}


