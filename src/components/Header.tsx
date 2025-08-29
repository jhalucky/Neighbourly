export default function Header() {
  return (
    <header className="bg-white p-4 flex justify-between items-center">
      <h1 className="text-black text-2xl">neighbourly<span className="text-red-600 text-3xl">.</span></h1>
      <nav className="mr-5">
        <ul className="flex space-x-4 mt-2 title gap-3">
          <li><a href="#" className="text-black hover:text-red-600">Home</a></li>
          <li><a href="#" className="text-black hover:text-red-600">About</a></li>
          <li><a href="#" className="text-black hover:text-red-600">Services</a></li>
          <li><a href="#" className="text-black hover:text-red-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
