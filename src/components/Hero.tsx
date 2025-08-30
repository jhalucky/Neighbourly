export default function Hero() {
  return(
    <section className="py-20 overflow-x-hidden px-2 md:px-20 bg-gray-100">
    <div className="ml-2 bg-gray-100">
      <h1 className="text-5xl md:text-8xl mb-2 md:mb-5">Hire Trusted </h1>
      <h1 className="text-5xl md:text-9xl text-red-600">Professionals</h1>
      <h1 className="text-5xl md:text-8xl mt-2 md:mt-5">Near You</h1>
    </div>

    <div className="ml-2 mt-5">
      <input className="border border-gray-300 py-2 px-4 mt-5 rounded" placeholder="Enter your area/pincode"></input>
      <button className="bg-red-600 text-white p-2 rounded ml-2">Search</button>
    </div>
    </section>

  )
}