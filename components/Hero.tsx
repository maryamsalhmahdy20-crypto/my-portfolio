"use client";

/* ============================================================
   Hero.tsx

   هذا الملف مسؤول عن أول واجهة يراها الزائر.

   تستطيع مستقبلاً تغيير:

   1- الاسم
   2- المسمى الوظيفي
   3- الوصف
   4- الصورة
   5- الألوان

   الصورة المستخدمة:

   public/images/profile.jpg

============================================================ */

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">

      {/* حاوية المحتوى */}
      <div className="max-w-7xl mx-auto px-8 w-full">

        {/* نقسم الصفحة إلى عمودين */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* =======================
              الجهة اليسرى
          ======================== */}

          <div>

            {/* النص الصغير */}
            <p className="text-blue-400 font-semibold tracking-widest uppercase">

              Welcome to my portfolio

            </p>

            {/* الاسم */}

            <h1 className="text-6xl font-black mt-4 leading-tight">

              Maryam
              <br />
              Saleh

            </h1>

            {/* التخصص */}

            <h2 className="text-2xl mt-6 text-slate-300">

              CSIT Student • Frontend Developer

            </h2>

            {/* الوصف */}

            <p className="mt-8 text-slate-400 leading-8 max-w-xl">

              Passionate about building modern web applications using
              Next.js, React and TypeScript.
              I enjoy designing clean interfaces and creating
              responsive user experiences.

            </p>

            {/* الأزرار */}

            <div className="flex gap-5 mt-10">

              {/* المشاريع */}

              <Link
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 duration-300 px-7 py-4 rounded-xl font-semibold"
              >
                View Projects
              </Link>

              {/* التواصل */}

              <Link
                href="/contact"
                className="border border-blue-500 hover:bg-blue-500 duration-300 px-7 py-4 rounded-xl font-semibold"
              >
                Contact Me
              </Link>

            </div>

          </div>

          {/* =======================
                الصورة
          ======================== */}

          <div className="flex justify-center">

            <Image
              src="/images/profile.jpg"
              alt="Maryam"
              width={420}
              height={420}
              className="rounded-full border-8 border-blue-500 shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}