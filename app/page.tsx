export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6">
      
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center">
        <h1 className="text-5xl font-bold">Maryam Saleh</h1>
        <p className="text-gray-400 mt-4 text-xl">
          CSIT Student • Frontend Developer • Building modern web experiences
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          View My Work
        </a>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Git", "Vercel"].map(
            (skill) => (
              <div
                key={skill}
                className="border border-gray-700 p-4 rounded-lg text-center hover:bg-gray-800 transition"
              >
                {skill}
              </div>
            )
          )}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="border border-gray-700 p-6 rounded-lg hover:bg-gray-800 transition">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-400 mt-2">
              Description of your project goes here.
            </p>
          </div>

          <div className="border border-gray-700 p-6 rounded-lg hover:bg-gray-800 transition">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-400 mt-2">
              Description of your project goes here.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-400">Email: your@email.com</p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500">
        © 2026 Maryam Saleh. All rights reserved.
      </footer>

    </main>
  );
}
