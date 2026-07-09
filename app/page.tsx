// الصفحة الرئيسية، فيها صورة شخصية ونبذة وزر يوجه للأعمال
// غيري اسمك، النصوص، والصورة حسب رغبتك

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <img
          src="/images/profile.jpg" // غيري هذا إلى اسم صورتك داخل public/images
          alt="Maryam Saleh"
          className="w-40 h-40 rounded-full border-4 border-pink-400 shadow-lg mb-6"
        />
        <h1 className="text-5xl font-bold text-pink-600">Maryam Saleh</h1>
        <p className="text-gray-600 mt-4 text-xl">
          CSIT Student • Frontend Designer • Modern Web Experiences
        </p>
        <a
          href="/projects"
          className="mt-6 inline-block bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
        >
          View My Work
        </a>
      </section>

      <Footer />
    </main>
  );
}
