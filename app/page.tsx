export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">

        <h1 className="text-7xl font-extrabold mb-6">
          ಪುಟ್ಟಬಸಪ್ಪ 🌾
        </h1>

        <p className="text-2xl text-gray-300 max-w-3xl leading-relaxed">
          Traditional healthy millet and ragi products made with purity,
          nutrition, and trust.
        </p>

        <button className="mt-10 bg-green-500 hover:bg-green-600 px-10 py-5 rounded-2xl text-2xl font-semibold transition">
          Order Now
        </button>

      </section>

      {/* Products Section */}
      <section className="py-24 px-6 bg-black">

        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          Our Products
        </h2>

        <div className="max-w-5xl mx-auto">

          <div className="bg-gradient-to-br from-gray-900 to-blue-950 p-12 rounded-3xl border border-gray-800 shadow-2xl">

            <h3 className="text-5xl font-bold mb-6 text-white">
              40 Varieties Millet & Ragi Ambli Powder 🌾
            </h3>

            <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
              Traditional healthy millet and ragi ambli powder made with natural ingredients.
              Rich in nutrition, energy, and taste for all age groups.
            </p>

            <ul className="text-gray-300 text-xl space-y-3 mb-10">
              <li>✅ Natural Ingredients</li>
              <li>✅ No Preservatives</li>
              <li>✅ Healthy Daily Nutrition</li>
              <li>✅ Traditional Karnataka Style</li>
              <li>✅ 42 Healthy Millet Varieties</li>
            </ul>

            <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl text-2xl font-semibold transition">
              Order Now
            </button>

          </div>

        </div>

      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-gray-950 text-center">

        <h2 className="text-5xl font-bold mb-8">
          About Us
        </h2>

        <p className="max-w-4xl mx-auto text-2xl text-gray-300 leading-relaxed">
          Puttabasappa provides traditional Karnataka-style healthy millet
          and ragi products prepared with quality ingredients and authentic methods.
          Our mission is to bring nutritious and natural food to every family.
        </p>

      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 text-center">

        <h2 className="text-5xl font-bold mb-10">
          Contact Us
        </h2>

        <div className="text-2xl text-gray-300 space-y-5">

          <p>
            📞 +91 9980406040
          </p>

          <p>
            📍 Karnataka, India
          </p>

          <p>
            📧 puttabasappa@gmail.com
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-10 text-center text-gray-500">

        <p className="text-lg">
          © 2026 Puttabasappa. All rights reserved.
        </p>

      </footer>

    </main>
  );
}