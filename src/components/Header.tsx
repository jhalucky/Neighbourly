import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!headerRef.current) return;

      gsap.from(headerRef.current, { y: -60, opacity: 0, duration: 0.6, ease: "power2.out" });

      // On scroll: add shadow + shrink slightly
      gsap.to(headerRef.current, {
        backgroundColor: "#ffffff",
        boxShadow: "0 6px 24px rgba(0,0,0,0.07)",
        duration: 0.3,
        scrollTrigger: {
          trigger: document.body,
          start: "top -10",
          end: 99999,
          toggleActions: "play none none reverse",
        },
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const NavLink = ({ href, children, }: { href:string, children: React.ReactNode }) => {
    const linkRef = useRef<HTMLAnchorElement | null>(null);
    useEffect(() => {
      const el = linkRef.current;
      if (!el) return;
      const enter = () => gsap.to(el, { color: "#dc2626", duration: 0.2 });
      const leave = () => gsap.to(el, { color: "#111827", duration: 0.2 });
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      return () => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      };
    }, []);
    return (
      <a ref={linkRef} href="#home" className="relative text-gray-900 transition-colors">
        <span className="after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:content-[''] hover:after:w-full after:transition-all after:duration-300">
          {children}
        </span>
      </a>
    );
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full px-3 md:px-6 py-4 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 mr-2">
          <img src="/favicon.svg" alt="Neighbourly Logo" className="w-12 h-12" />
          <h1 className="text-2xl md:text-3xl font-bold">
            neighbourly<span className="text-red-600">.</span>
          </h1>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-6 text-lg font-medium">
            <li><NavLink href="#home">Home</NavLink></li>
            <li><NavLink href="#about">About</NavLink></li>
            <li><NavLink href="#services">Services</NavLink></li>
            <li><NavLink href="#contact">Contact</NavLink></li>
          </ul>
        </nav>

        <button
          className="md:hidden text-2xl text-black"
          aria-label="Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <nav className="mt-3 md:hidden">
          <ul className="flex flex-col gap-4 p-4 text-lg font-medium bg-white rounded-lg shadow">
            {["Home", "About", "Services", "Contact"].map((x) => (
              <li key={x}>
                <a href="#" onClick={() => setIsOpen(false)} className="hover:text-red-600">
                  {x}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
