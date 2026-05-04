export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-green-400">
          Puttabasappa
        </h1>

        <div className="flex gap-6 text-lg">
          <a href="#" className="hover:text-green-400">Home</a>
          <a href="#" className="hover:text-green-400">Products</a>
          <a href="#" className="hover:text-green-400">About</a>
          <a href="#" className="hover:text-green-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-32 px-6">

        <h1 className="text-7xl font-extrabold mb-6">
          Healthy Ragi Products 🌾
        </h1>

        <p className="text-2xl text-gray-300 max-w-3xl">
          Premium quality ragi ambli powder and healthy traditional food products.
        </p>

        <div className="flex gap-6 mt-10">

          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold">
            View Products
          </button>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="bg-white text-black px-8 py-4 rounded-2xl text-xl font-semibold hover:bg-gray-300"
          >
            WhatsApp Us
          </a>

        </div>
      </section>

    </main>
  );
}