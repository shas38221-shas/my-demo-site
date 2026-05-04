export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">
        My First Website 🚀
      </h1>

      <p className="text-xl text-gray-300">
        Built with Next.js + Vercel + Supabase
      </p>

      <button className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300">
        Get Started
      </button>
    </main>
  );
}