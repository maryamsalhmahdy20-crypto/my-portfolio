"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const experiences = [
  {
    period: "2024 - Present",
    titleEn: "Freelance Graphic Designer",
    titleAr: "مصممة جرافيك مستقلة",
    companyEn: "Self-Employed",
    companyAr: "عمل حر",
    descriptionEn: "Working with diverse clients on branding, social media, and print design projects. Building visual identities from concept to execution.",
    descriptionAr: "العمل مع عملاء متنوعين في مشاريع الهوية البصرية والسوشيال ميديا والطباعة. بناء هويات بصرية من الفكرة إلى التنفيذ.",
  },
  {
    period: "2023 - 2024",
    titleEn: "Junior Graphic Designer",
    titleAr: "مصممة جرافيك مبتدئة",
    companyEn: "Creative Agency",
    companyAr: "وكالة إبداعية",
    descriptionEn: "Designed marketing materials, social media campaigns, and assisted in brand identity projects for local and international clients.",
    descriptionAr: "تصميم مواد تسويقية وحملات سوشيال ميديا والمساعدة في مشاريع الهوية البصرية لعملاء محليين ودوليين.",
  },
  {
    period: "2022 - 2023",
    titleEn: "Design Intern",
    titleAr: "متدربة تصميم",
    companyEn: "Design Studio",
    companyAr: "استوديو تصميم",
    descriptionEn: "Learned professional design workflows, created mockups, and supported senior designers on branding and print projects.",
    descriptionAr: "تعلمت سير عمل التصميم الاحترافي، إنشاء نماذج أولية، ودعم المصممين الكبار في مشاريع العلامات التجارية والطباعة.",
  },
];

const education = [
  {
    period: "2021 - 2025",
    titleEn: "Bachelor's in Graphic Design",
    titleAr: "بكالوريوس في التصميم الجرافيكي",
    schoolEn: "University of Basrah",
    schoolAr: "جامعة البصرة",
    descriptionEn: "Focused on visual communication, typography, brand identity, and digital design. Graduated with honors.",
    descriptionAr: "تخصصت في التواصل البصري، الخطوط، الهوية البصرية، والتصميم الرقمي. تخرجت مع مرتبة الشرف.",
  },
  {
    period: "2023",
    titleEn: "UI/UX Design Certificate",
    titleAr: "شهادة في تصميم واجهات المستخدم",
    schoolEn: "Online Course",
    schoolAr: "دورة عبر الإنترنت",
    descriptionEn: "Completed intensive training in user interface and user experience design principles.",
    descriptionAr: "أكملت تدريباً مكثفاً في مبادئ تصميم واجهة المستخدم وتجربة المستخدم.",
  },
  {
    period: "2022",
    titleEn: "Adobe Certified Professional",
    titleAr: "محترفة معتمدة من أدوبي",
    schoolEn: "Adobe Certification",
    schoolAr: "شهادة أدوبي",
    descriptionEn: "Certified in Photoshop, Illustrator, and InDesign for professional design work.",
    descriptionAr: "معتمدة في فوتوشوب، إليستريتور، وإنديزاين للعمل التصميمي الاحترافي.",
  },
];

export default function ExperienceContent() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-32">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
            {language === "ar" ? "رحلتي" : "My Journey"}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mt-4 tracking-tight">
            {language === "ar" ? "الخبرة و" : "Experience &"}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}{language === "ar" ? "التعليم" : "Education"}
            </span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            {language === "ar"
              ? "جدول زمني لمسيرتي المهنية والتعليمية."
              : "A timeline of my professional growth and learning journey."}
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black mb-12 text-center"
          >
            {language === "ar" ? "الخبرة" : "Work"} <span className="text-blue-400">{language === "ar" ? "المهنية" : "Experience"}</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-start mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 mt-6 z-10 ring-4 ring-slate-950" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
                    <span className="text-blue-400 text-sm font-semibold">{exp.period}</span>
                    <h3 className="text-2xl font-bold mt-2">
                      {language === "ar" ? exp.titleAr : exp.titleEn}
                    </h3>
                    <p className="text-purple-400 mt-1">
                      {language === "ar" ? exp.companyAr : exp.companyEn}
                    </p>
                    <p className="text-slate-400 mt-3 leading-relaxed">
                      {language === "ar" ? exp.descriptionAr : exp.descriptionEn}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black mb-12 text-center"
          >
            <span className="text-purple-400">{language === "ar" ? "التعليم" : "Education"}</span>
            {" "}{language === "ar" ? "والشهادات" : "& Certificates"}
          </motion.h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500 transition"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <span className="text-purple-400 text-sm font-semibold">{edu.period}</span>
                    <h3 className="text-xl font-bold mt-1">
                      {language === "ar" ? edu.titleAr : edu.titleEn}
                    </h3>
                    <p className="text-blue-400 mt-1">
                      {language === "ar" ? edu.schoolAr : edu.schoolEn}
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 mt-3 leading-relaxed">
                  {language === "ar" ? edu.descriptionAr : edu.descriptionEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

