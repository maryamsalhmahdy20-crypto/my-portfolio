"use client";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Brand Identity",
    description: "Logo design and complete visual identity.",
    image: "/images/portfolio/branding.jpg",
    link: "/portfolio/branding",
  },
  {
    title: "Social Media",
    description: "Instagram & Facebook campaigns.",
    image: "/images/portfolio/social.jpg",
    link: "/portfolio/social-media",
  },
  {
    title: "Printing Design",
    description: "Brochures, flyers and business cards.",
    image: "/images/portfolio/print.jpg",
    link: "/portfolio/printing",
  },
];

export default function Projects() {
  return (
    <section className="py-24 bg-[#05081c]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white mb-4">
          My Portfolio
        </h2>

        <p className="text-slate-400 mb-14">
          Selected branding, print and social media projects.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              className="group bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:border-blue-500 transition duration-300"
            >
              <div className="relative h-72">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-3">
                  {project.description}
                </p>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}