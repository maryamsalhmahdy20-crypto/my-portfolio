"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-[#0F172A] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
            About Me
          </p>

          <h2 className="text-5xl font-black mt-5">
            Creative Graphic Designer
          </h2>

          <p className="mt-8 text-slate-400 leading-9 max-w-3xl text-lg">
            I specialize in creating visual identities, logo systems,
            social media campaigns, brochures, flyers, business cards,
            packaging and professional marketing materials that help
            businesses present a strong and memorable brand.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8">
              <h3 className="text-4xl font-black text-blue-400">
                3+
              </h3>

              <p className="mt-3 text-slate-400">
                Years Learning Design
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8">
              <h3 className="text-4xl font-black text-blue-400">
                50+
              </h3>

              <p className="mt-3 text-slate-400">
                Design Concepts
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8">
              <h3 className="text-4xl font-black text-blue-400">
                100%
              </h3>

              <p className="mt-3 text-slate-400">
                Responsive Design
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}