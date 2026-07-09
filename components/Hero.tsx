"use client";

/* ============================================================
   Hero.tsx

   واجهة الصفحة الرئيسية.

   لتغيير الاسم:
   عدّل النص داخل h1.

   لتغيير المسمى:
   عدّل النص داخل h2.

   لتغيير الوصف:
   عدّل الفقرة.

   لتغيير الصورة:
   استبدل الملف:
   public/images/profile.jpg

============================================================ */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 bg-slate-950 text-white flex items-center overflow-hidden">

      {/* =============================
          الخلفية المضيئة
      ============================== */}

      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

      {/* =============================
          المحتوى
      ============================== */}

      <div className="max-w-7xl mx-auto px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* =============================
              النص
          ============================== */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-blue-400 font-semibold tracking-widest uppercase">
              Welcome to my Portfolio
            </p>

            <h1 className="text-6xl lg:text-7xl font-black mt-4 leading-tight">
              Maryam
              <br />
              Saleh
            </h1>

            <h2 className="text-2xl mt-6 text-slate-300 leading-relaxed">
              Graphic Designer
              <br />
              Brand Identity Specialist
            </h2>

            <p className="mt-8 text-slate-400 leading-8 max-w-xl">
              Helping brands grow through creative visual identities,
              print design, social media content and modern marketing
              materials.
            </p>

            <div className="flex gap-5 mt-10">

              <Link
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl font-semibold duration-300"
              >
                View Portfolio
              </Link>

              <Link
                href="/contact"
                className="border border-blue-500 hover:bg-blue-600 px-7 py-4 rounded-xl font-semibold duration-300"
              >
                Contact Me
              </Link>

            </div>

          </motion.div>

          {/* =============================
              الصورة
          ============================== */}

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <Image
              src="/images/profile.jpg"
              alt="Maryam"
              width={420}
              height={420}
              priority
              className="
                rounded-full
                border-[10px]
                border-blue-500
                shadow-[0_0_70px_rgba(37,99,235,.45)]
                hover:scale-105
                duration-500
              "
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}