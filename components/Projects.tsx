"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
  {
    titleEn: "Brand Identity",
    titleAr: "هوية بصرية",
    descriptionEn: "Professional logos and complete visual identity.",
    descriptionAr: "شعارات احترافية وهوية بصرية متكاملة.",
    image: "/images/portfolio/branding.jpg",
    link: "/portfolio/brand-identity",
  },
  {
    titleEn: "Social Media",
    titleAr: "سوشيال ميديا",
    descriptionEn: "Instagram, Facebook and advertising campaigns.",
    descriptionAr: "حملات إنستغرام، فيسبوك وإعلانية.",
    image: "/images/portfolio/social.jpg",
    link: "/portfolio/social-media",
  },
  {
    titleEn: "Print Design",
    titleAr: "تصميم طباعة",
    descriptionEn: "Brochures, flyers, business cards and packaging.",
    descriptionAr: "بروشورات، فلايرز، بطاقات عمل وتغليف.",
    image: "/images/portfolio/print.jpg",
    link: "/portfolio/print-design",
  },
];

export default function Projects() {
  const { language } = useLanguage();

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
            {language === "ar" ? "أعمالي" : "Portfolio"}
          </p>

          <h2 className="text-5xl font-black mt-4">
            {language === "ar" ? "مشاريع مختارة" : "Selected Projects"}
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl">
            {language === "ar"
              ? "مجموعة مختارة من أعمال الهوية البصرية، تصميم الطباعة، والسوشيال ميديا."
              : "A selection of branding, print design and social media work."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (

            <motion.div
              key={project.link}
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
                    alt={language === "ar" ? project.titleAr : project.titleEn}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    {language === "ar" ? project.titleAr : project.titleEn}
                  </h3>

                  <p className="text-slate-400 mt-3">
                    {language === "ar" ? project.descriptionAr : project.descriptionEn}
                  </p>

                  <span className="inline-block mt-6 text-blue-400 font-semibold">
                    {language === "ar" ? "عرض المشروع →" : "View Project →"}
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
