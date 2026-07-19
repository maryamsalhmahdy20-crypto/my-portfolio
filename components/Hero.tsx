"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1120] text-white">

      {/* الخلفية */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* النص */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <p className="uppercase tracking-[5px] text-blue-400 font-semibold">
              Graphic Designer
            </p>

            <h1 className="text-5xl lg:text-7xl font-black mt-6 leading-tight">
              Maryam
              <br />
              Saleh
            </h1>

            <h2 className="mt-6 text-2xl text-slate-300">
              Brand Identity & Print Designer
            </h2>

            <p className="mt-8 text-slate-400 leading-8 max-w-xl">
              I create professional branding,
              logos, social media campaigns,
              brochures, packaging and modern
              visual identities for businesses.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                href="/portfolio"
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
              >
                View Portfolio
              </Link>

              <Link
                href="/pricing"
                className="px-8 py-4 rounded-xl border border-blue-500 hover:bg-blue-600 transition"
              >
                Pricing
              </Link>

            </div>

          </motion.div>

          {/* الصورة */}

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <Image
              src="/images/portfolio/profile.jpg"
              alt="Maryam"
              width={430}
              height={530}
              priority
              className="rounded-[35px] border-4 border-blue-500 shadow-2xl object-cover"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}