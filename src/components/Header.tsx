import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-white relative">
      <div className="flex items-center">
      <img src="/favicon.svg" alt="Neighbourly Logo" className="w-16 h-16" />
      <h1 className="text-2xl md:text-3xl font-bold">
        neighbourly<span className="text-red-600">.</span>
      </h1>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 text-lg font-medium">
          <li><a href="#" className="hover:text-red-600">Home</a></li>
          <li><a href="#" className="hover:text-red-600">About</a></li>
          <li><a href="#" className="hover:text-red-600">Services</a></li>
          <li><a href="#" className="hover:text-red-600">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile icon */}
      <button
        className="md:hidden text-2xl text-black"
        aria-label="Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col gap-4 p-6 text-lg font-medium">
            <li><a href="#" className="hover:text-red-600" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#" className="hover:text-red-600" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#" className="hover:text-red-600" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#" className="hover:text-red-600" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
