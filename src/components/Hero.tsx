export default function Hero() {
  return (
    <section className=" text-black py-30">
      <div className="container mx-auto text-center hero">
        <h2 className="text-6xl mb-4">Hire Trusted </h2>
        <h2 className="text-6xl mb-4">Professionals Near You.</h2>
        </div>

       <div className="flex justify-center mt-8 gap-1">
        <input type="text" placeholder="Enter your location/pincode" className="border border-gray-900 py-2 px-6 rounded-l" />
        <a href="#" className="bg-red-600 text-white py-2 px-4 rounded-r hover:bg-red-700">Get Started</a>
      </div>
    </section>
  )
}
