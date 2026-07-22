import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Print Design - Designer Maryam Portfolio",
  description:
    "Print Design portfolio by Designer Maryam - Brochures, flyers, business cards and packaging.",
};

export default function PrintDesignPage() {
  const project = projects.find((p) => p.id === "print-design");

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            Print Design
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {project.title}
            </span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              اخر احدث تصاميمي
            </h2>
            <p className="text-slate-400 mt-2">
              بروشور لمدرسة فتحت حديثا بالبصرة
            </p>
            <div className="mt-2 border-t border-slate-800 w-16 mx-auto" />
            <p className="text-slate-500 text-sm mt-2">
              My Latest Design — Brochure for a newly opened school in Basra
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative h-[420px] rounded-3xl overflow-hidden group"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          {/* Back to Portfolio */}
          <div className="mt-16 text-center">
            <Link
              href="/portfolio"
              className="inline-block px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

