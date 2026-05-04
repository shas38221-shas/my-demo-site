export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-green-400">
          Puttabasappa
        </h1>

        <div className="flex gap-6 text-lg">
          <a href="#" className="hover:text-green-400">Home</a>
          <a href="#products" className="hover:text-green-400">Products</a>
          <a href="#" className="hover:text-green-400">About</a>
          <a href="#" className="hover:text-green-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center mt-28 px-6">

        <h1 className="text-7xl font-extrabold mb-6">
          ಪುಟ್ಟಬಸಪ್ಪ 🌾
        </h1>

        <p className="text-2xl text-gray-300 max-w-3xl">
          Traditional healthy ragi and millet products made with purity, nutrition, and trust.
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

      {/* Products Section */}
      <section
        id="products"
        className="mt-40 px-10 pb-24"
      >

        <h2 className="text-5xl font-bold text-center mb-16">
          Our Products
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Product Card */}
          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-green-500 transition">

            <h3 className="text-3xl font-bold mb-4">
              Ragi Ambli Powder
            </h3>

            <p className="text-gray-400 mb-6">
              Healthy instant ragi drink mix packed with nutrition and energy.
            </p>

            <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold">
              Order Now
            </button>

          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-green-500 transition">

            <h3 className="text-3xl font-bold mb-4">
              Millet Health Mix
            </h3>

            <p className="text-gray-400 mb-6">
              Traditional millet mix for healthy breakfast and nutrition.
            </p>

            <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold">
              Order Now
            </button>

          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-green-500 transition">

            <h3 className="text-3xl font-bold mb-4">
              Organic Ragi Flour
            </h3>

            <p className="text-gray-400 mb-6">
              Natural and fresh organic ragi flour for daily healthy cooking.
            </p>

            <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold">
              Order Now
            </button>

          </div>

        </div>
      </section>
{/* Footer */}
<footer className="border-t border-gray-800 py-10 text-center text-gray-400">

  <h2 className="text-3xl font-bold text-green-400 mb-4">
    Contact Us
  </h2>

  <p className="mb-2">
    📞 +91 9999999999
  </p>

  <p className="mb-2">
    📍 Karnataka, India
  </p>

  <p>
    © 2026 Puttabasappa. All rights reserved.
  </p>

</footer>
    </main>
  );
}