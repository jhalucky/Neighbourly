import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(aboutRef);

      gsap.from(q(".reveal"), {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      });
      
      const proLetters = q("neighbourly span");
      gsap.from(proLetters, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.05,
        delay: 0.3,
      });
      
      gsap.to(q(".about-img"), {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} className="py-20 bg-gray-50 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="reveal inline-block">About</span>{" "}
            <span className="reveal inline-block text-red-600">Neighbourly</span>
          </h2>
          <p className="reveal text-lg text-gray-700 mb-4">
            <span className="neighbourly">Neighbourly </span>connects you with <span className="font-semibold">trusted professionals</span> in your area, making it easy to hire services you need — from electricians to cleaners — all in one place.
          </p>
          <p className="reveal text-lg text-gray-700">
            Our mission is to bring convenience, trust, and quality to your doorstep with just a few taps.
          </p>
        </div>

        
          <div className="flex justify-center">
            <img
              src="/about-illustration.png" 
              alt="About Neighbourly"
              className="about-img w-96 h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
