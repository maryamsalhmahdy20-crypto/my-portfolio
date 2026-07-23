"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[#0B1120] text-white">

      {/* الخلفية */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* النص */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <p className="uppercase tracking-[5px] text-blue-400 font-semibold text-center lg:text-right">
              {language === "ar" ? "مصممة جرافيك" : "Graphic Designer"}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mt-4 lg:mt-6 leading-tight text-center lg:text-right">
              {language === "ar" ? "مصممة" : "Designer"}
              <br />
              Maryam
            </h1>

            <h2 className="mt-4 lg:mt-6 text-xl sm:text-2xl text-slate-300 text-center lg:text-right">
              {language === "ar" ? "هوية بصرية وتصميم طباعة" : "Brand Identity & Print Designer"}
            </h2>

            <p className="mt-6 lg:mt-8 text-slate-400 leading-7 lg:leading-8 max-w-xl text-center lg:text-right mx-auto lg:mx-0">
              {language === "ar"
                ? "أبتكر هويات بصرية احترافية، شعارات، حملات سوشيال ميديا، بروشورات، تغليف وهويات بصرية حديثة للشركات."
                : "I create professional branding, logos, social media campaigns, brochures, packaging and modern visual identities for businesses."}
            </p>

            <div className="flex flex-wrap gap-4 mt-8 lg:mt-10 justify-center lg:justify-start">

              <Link
                href="/portfolio"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-sm sm:text-base"
              >
                {language === "ar" ? "شاهد أعمالي" : "View Portfolio"}
              </Link>

              <Link
                href="/pricing"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-blue-500 hover:bg-blue-600 transition text-sm sm:text-base"
              >
                {language === "ar" ? "الأسعار" : "Pricing"}
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

            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-blue-500/20 rounded-[45px] blur-2xl" />
              <Image
                src="/images/portfolio/profile.jpg"
                alt="Designer Maryam"
                width={430}
                height={530}
                priority
                className="relative w-[200px] sm:w-[260px] lg:w-[380px] xl:w-[430px] rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] border-4 border-blue-500 shadow-2xl object-cover aspect-[4/5]"
              />
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
