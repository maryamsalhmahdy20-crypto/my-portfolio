"use client";

/* ==========================================================
Hero Section

يمكنك تعديل:

1- الاسم
2- المسمى الوظيفي
3- الوصف
4- الصورة

الصورة:

public/images/profile.jpg

========================================================== */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">

      {/* الخلفية */}

      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-700/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* =========================
                 النص
          ========================= */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="uppercase tracking-[5px] text-blue-400 font-semibold">

              Creative Designer

            </span>

            <h1 className="text-6xl lg:text-8xl font-black leading-tight mt-6">

              Maryam
              <br />
              Saleh

            </h1>

            <h2 className="mt-8 text-3xl text-slate-300 leading-relaxed">

              Graphic Designer
              <br />
              Brand Identity Specialist

            </h2>

            <p className="mt-10 text-slate-400 leading-9 max-w-xl text-lg">

              I design visual identities,
              social media campaigns,
              printed materials
              and modern websites
              that help brands grow professionally.

            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <Link
                href="/portfolio"
                className="rounded-xl bg-blue-600 hover:bg-blue-700 duration-300 px-8 py-4 font-semibold"
              >

                View Portfolio

              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-blue-500 hover:bg-blue-600 duration-300 px-8 py-4 font-semibold"
              >

                Contact Me

              </Link>

            </div>

          </motion.div>

          {/* =========================
                 الصورة
          ========================= */}

          <motion.div

            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}

            className="flex justify-center"

          >

            <div className="relative">

              {/* الإطار */}

              <div className="absolute inset-0 rounded-[40px] border-4 border-blue-500 rotate-6" />

              <Image

                src="/images/profile.jpg"

                alt="Maryam"

                width={430}

                height={540}

                priority

                className="
                relative
                rounded-[40px]
                object-cover
                shadow-2xl
                hover:scale-105
                duration-500
                "

              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}