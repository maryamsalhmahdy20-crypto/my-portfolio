export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <img
          src="/profile.jpg"
          alt="Maryam Saleh"
          className="w-40 h-40 rounded-full border-4 border-white mb-6"
        />
        <h1 className="text-5xl font-bold">Maryam Saleh</h1>
        <p className="text-gray-400 mt-4 text-xl">
          CSIT Student • Frontend Developer
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          View My Work
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          أنا مريم، طالبة CSIT ومطوّرة واجهات أمامية. أحب بناء مواقع حديثة
          وتجارب مستخدم مميزة باستخدام Next.js و TailwindCSS.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="border border-gray-700 p-6 rounded-lg hover:bg-gray-800 transition">
            <img src="/project1.jpg" alt="Project 1" className="rounded mb-4" />
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-400 mt-2">
              وصف مختصر للمشروع الأول.
            </p>
          </div>

          <div className="border border-gray-700 p-6 rounded-lg hover:bg-gray-800 transition">
            <img src="/project2.jpg" alt="Project 2" className="rounded mb-4" />
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-400 mt-2">
              وصف مختصر للمشروع الثاني.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Pricing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-700 p-6 rounded-lg hover:bg-gray-800 transition">
            <h3 className="text-xl font-semibold">تصميم واجهة</h3>
            <p className="text-gray-400 mt-2">50$</p>
          </div>
          <div className="border border-gray-700 p-6 rounded-lg hover:bg-gray-800 transition">
            <h3 className="text-xl font-semibold">موقع كامل</h3>
            <p className="text-gray-400 mt-2">200$</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-400">Email: your@email.com</p>
        <p className="text-gray-400">Instagram: @maryam.designs</p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500">
        © 2026 Maryam Saleh. All rights reserved.
      </footer>
    </main>
  );
}
