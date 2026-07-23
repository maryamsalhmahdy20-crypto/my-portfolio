import type { Metadata } from "next";
import BrandIdentityGallery from "@/components/portfolio/BrandIdentityGallery";

export const metadata: Metadata = {
  title: "Brand Identity - Designer MAREAM Portfolio",
  description:
    "معرض تصاميم الهوية البصرية - Brand Identity Gallery by Designer MAREAM",
};

export default function BrandIdentityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            Brand Identity
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
            هوية
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              بصرية
            </span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            مجموعة من تصاميم الهوية البصرية التي تجمع بين الإبداع والاحترافية،
            لتقديم هويات فريدة تعكس شخصية كل علامة تجارية.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              احب الاعمال لقلبي من الهويات البصرية
            </h2>
            <div className="mt-2 border-t border-slate-800 w-16 mx-auto" />
            <p className="text-slate-500 text-sm mt-2">
              My Favorite Brand Identity Works
            </p>
          </div>
          <BrandIdentityGallery />
        </div>
      </section>
    </main>
  );
}

