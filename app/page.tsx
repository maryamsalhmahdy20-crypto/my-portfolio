export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 text-gray-900">
      
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <img
          src="/profile.jpg"
          alt="Maryam Saleh"
          className="w-40 h-40 rounded-full border-4 border-pink-400 shadow-lg mb-6"
        />
        <h1 className="text-5xl font-bold text-pink-600">Maryam Saleh</h1>
        <p className="text-gray-600 mt-4 text-xl">
          CSIT Student • Frontend Designer • Modern Web Experiences
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
        >
          View My Work
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-pink-600">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          أنا مريم، مصممة واجهات ومطوّرة مواقع حديثة. أحب إبراز الأعمال
          بشكل أنيق واحترافي مع لمسة ألوان مميزة تناسب الذوق العصري.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">
            <img src="/project1.jpg" alt="Project 1" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-pink-600">Project 1</h3>
              <p className="text-gray-600 mt-2">وصف مختصر للمشروع الأول.</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">
            <img src="/project2.jpg" alt="Project 2" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-pink-600">Project 2</h3>
              <p className="text-gray-600 mt-2">وصف مختصر للمشروع الثاني.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-pink-600">Pricing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-pink-600">تصميم واجهة</h3>
            <p className="text-gray-700 mt-2">50$</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-pink-600">موقع كامل</h3>
            <p className="text-gray-700 mt-2">200$</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-pink-600">Contact</h2>
        <p className="text-gray-700">Email: your@email.com</p>
        <p className="text-gray-700">Instagram: @maryam.designs</p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500">
        © 2026 Maryam Saleh. All rights reserved.
      </footer>
    </main>
  );
}
