"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutContent() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-32">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
            {language === "ar" ? "عني" : "About Me"}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mt-4 tracking-tight">
            {language === "ar" ? "مصممة" : "Creative"}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}{language === "ar" ? "مبدعة" : "Designer"}
            </span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Image
                  src="/images/portfolio/profile.jpg"
                  alt="Designer Maryam"
                  width={500}
                  height={600}
                  className="rounded-[35px] object-cover shadow-2xl border-4 border-blue-500/30"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl px-8 py-6 shadow-xl">
                  <p className="text-4xl font-black">4+</p>
                  <p className="text-sm">{language === "ar" ? "سنوات تصميم" : "Years Design"}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black">
                {language === "ar" ? "من أنا" : "Who I Am"}
              </h2>
              <p className="mt-6 text-slate-400 leading-9 text-lg">
                {language === "ar"
                  ? "أنا مصممة مريم، مصممة جرافيك شغوفة بقوة القصص البصرية. أتخصص في إنشاء الهويات البصرية، حملات السوشيال ميديا، مواد الطباعة، وأنظمة بصرية متكاملة تساعد الشركات على التميز."
                  : "I'm Designer Maryam, a passionate graphic designer with a deep love for visual storytelling. I specialize in creating brand identities, social media campaigns, print materials, and complete visual systems that help businesses stand out."}
              </p>
              <p className="mt-6 text-slate-400 leading-9 text-lg">
                {language === "ar"
                  ? "كل مشروع أعمل عليه مدفوع بالاستراتيجية والإبداع والاهتمام بأدق التفاصيل. من الشعارات إلى التغليف، أضمن أن كل عنصر تصميم يخدم غرضاً ويروي قصة."
                  : "Every project I work on is driven by strategy, creativity, and attention to the smallest details. From logos to packaging, I ensure every design element serves a purpose and tells a story."}
              </p>

              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                  <h3 className="text-4xl font-black text-blue-400">50+</h3>
                  <p className="mt-2 text-slate-300">{language === "ar" ? "مشروع منجز" : "Projects Done"}</p>
                </div>
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                  <h3 className="text-4xl font-black text-blue-400">30+</h3>
                  <p className="mt-2 text-slate-300">{language === "ar" ? "عميل سعيد" : "Happy Clients"}</p>
                </div>
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                  <h3 className="text-4xl font-black text-blue-400">3+</h3>
                  <p className="mt-2 text-slate-300">{language === "ar" ? "سنوات خبرة" : "Years Experience"}</p>
                </div>
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                  <h3 className="text-4xl font-black text-blue-400">95%</h3>
                  <p className="mt-2 text-slate-300">{language === "ar" ? "رضا العملاء" : "Client Satisfaction"}</p>
                </div>
              </div>

              <Link
                href="/portfolio"
                className="inline-block mt-10 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
              >
                {language === "ar" ? "شاهد أعمالي" : "View My Work"}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
              {language === "ar" ? "مهاراتي" : "My Skills"}
            </p>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              {language === "ar" ? "ما أجيد فعله" : "What I Do Best"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                titleEn: "Brand Identity",
                titleAr: "الهوية البصرية",
                descriptionEn: "Complete visual identity systems including logos, color palettes, typography, and brand guidelines.",
                descriptionAr: "أنظمة هوية بصرية متكاملة تشمل الشعارات ولوحات الألوان والخطوط ودليل العلامة التجارية.",
                icon: "🎨",
              },
              {
                titleEn: "Social Media Design",
                titleAr: "تصميم سوشيال ميديا",
                descriptionEn: "Engaging social media posts, stories, cover images, and ad creatives for all platforms.",
                descriptionAr: "منشورات سوشيال ميديا جذابة، قصص، صور غلاف، وإعلانات إبداعية لجميع المنصات.",
                icon: "📱",
              },
              {
                titleEn: "Print Design",
                titleAr: "تصميم طباعة",
                descriptionEn: "Brochures, flyers, business cards, posters, packaging, and marketing materials.",
                descriptionAr: "بروشورات، فلايرز، بطاقات عمل، ملصقات، تغليف، ومواد تسويقية.",
                icon: "📄",
              },
              {
                titleEn: "Logo Design",
                titleAr: "تصميم شعارات",
                descriptionEn: "Unique and memorable logos that capture the essence of your brand.",
                descriptionAr: "شعارات فريدة لا تنسى تلتقط جوهر علامتك التجارية.",
                icon: "⭐",
              },
              {
                titleEn: "UI Design",
                titleAr: "تصميم واجهات",
                descriptionEn: "Modern and user-friendly interface designs for websites and applications.",
                descriptionAr: "تصميم واجهات حديثة وسهلة الاستخدام للمواقع والتطبيقات.",
                icon: "💻",
              },
              {
                titleEn: "Packaging Design",
                titleAr: "تصميم تغليف",
                descriptionEn: "Creative packaging solutions that make products stand out on shelves.",
                descriptionAr: "حلول تغليف إبداعية تجعل المنتجات تبرز على الرفوف.",
                icon: "📦",
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.titleEn}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300 hover:-translate-y-2"
              >
                <span className="text-4xl">{skill.icon}</span>
                <h3 className="text-2xl font-bold mt-4">
                  {language === "ar" ? skill.titleAr : skill.titleEn}
                </h3>
                <p className="text-slate-400 mt-3 leading-relaxed">
                  {language === "ar" ? skill.descriptionAr : skill.descriptionEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

