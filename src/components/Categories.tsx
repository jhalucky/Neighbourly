export default function Categories() {
  return (
    <section className="bg-white text-black py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Explore Categories</h2>
        <p className="text-lg mb-8">Find services in your area.</p>
        <div className="bg-white">
        <div className="grid-cols-1 md:grid-cols-3 gap-4 flex">
          <div className="bg-white shadow p-4 rounded-lg">
            <img src="/city.jpg"/>
            <h3 className="text-xl font-semibold mb-2">Category 1</h3>
            <p className="text-gray-400">Description for category 1.</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Category 2</h3>
            <p className="text-gray-400">Description for category 2.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">Category 3</h3>
            <p className="text-gray-400">Description for category 3.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">Category 3</h3>
            <p className="text-gray-400">Description for category 3.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">Category 3</h3>
            <p className="text-gray-400">Description for category 3.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">Category 3</h3>
            <p className="text-gray-400">Description for category 3.</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
