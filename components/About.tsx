"use client";

/*
==========================================================
About Section
يمكنك تعديل النصوص لاحقاً كما تريد.
==========================================================
*/

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-28 bg-[#060B1F]">
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Creative Graphic Designer
          </h2>

          <p className="mt-8 text-slate-400 leading-9 max-w-3xl">
            I specialize in visual identity design, social media campaigns,
            print materials, brochures, logos and modern branding solutions.
          </p>

        </motion.div>

      </div>
    </section>
  );
}