export default function Header() {
  return (
    <header className="w-full px-4 py-3 flex items-center justify-between">
      <h1 className="text-2xl md:text-3xl font-bold">
        neighbourly<span className="text-red-600">.</span>
      </h1>

      {/* Desktop nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 text-lg">
          <li><a href="#" className="hover:text-red-600">Home</a></li>
          <li><a href="#" className="hover:text-red-600">About</a></li>
          <li><a href="#" className="hover:text-red-600">Services</a></li>
          <li><a href="#" className="hover:text-red-600">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile icon placeholder */}
      <button className="md:hidden text-2xl" aria-label="Menu">☰</button>
    </header>
  );
}

