"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Brand Identity",
    description: "Professional logos and complete visual identity.",
    image: "/images/portfolio/branding.jpg",
    link: "/portfolio/brand-identity",
  },
  {
    title: "Social Media",
    description: "Instagram, Facebook and advertising campaigns.",
    image: "/images/portfolio/social.jpg",
    link: "/portfolio/social-media",
  },
  {
    title: "Print Design",
    description: "Brochures, flyers, business cards and packaging.",
    image: "/images/portfolio/print.jpg",
    link: "/portfolio/print-design",
  },
];

export default function Projects() {
  return (
    <section className="bg-[#020617] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
            Portfolio
          </p>

          <h2 className="text-5xl font-black mt-4">
            Selected Projects
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl">
            A selection of branding, print design and social media work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >

              <Link
                href={project.link}
                className="block overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500 transition"
              >

                <div className="relative h-72">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mt-3">
                    {project.description}
                  </p>

                  <span className="inline-block mt-6 text-blue-400 font-semibold">
                    View Project →
                  </span>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}