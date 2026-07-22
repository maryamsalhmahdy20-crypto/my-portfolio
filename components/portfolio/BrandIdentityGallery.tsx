"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const galleryItems = [
  {
    src: "/images/portfolio/brand-identity/brand1.jpg",
    title: "Roliqo Fly Branding",
    description:
      "تحدي تصميم هوية بصرية لشركة سياحة وسفر في البصرة مع دمج عنصر النخلة كرمز للمدينة.",
    alt: "Roliqo Fly Branding - هوية بصرية لشركة سياحة وسفر",
  },
  {
    src: "/images/portfolio/brand-identity/brand2.jpg",
    title: "College Identity Concept",
    description:
      "تحدي تصميم هوية بصرية لكلية علوم الحاسوب وتكنولوجيا المعلومات ضمن مشروع تخرج.",
    alt: "College Identity Concept - هوية بصرية لكلية علوم الحاسوب",
  },
  {
    src: "/images/portfolio/brand-identity/brand3.jpg",
    title: "Cat Café Branding",
    description:
      "تحدي تصميم هوية بصرية لمقهى قطط بفكرة عصرية ومبتكرة.",
    alt: "Cat Café Branding - هوية بصرية لمقهى قطط",
  },
];

export default function BrandIdentityGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null && selectedIndex < galleryItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="group cursor-pointer rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500 duration-300 hover:-translate-y-3"
            onClick={() => openLightbox(index)}
          >
            {/* Image Container */}
            <div className="relative h-72 overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 duration-300 flex items-center justify-center">
                <span className="text-white/0 group-hover:text-white/80 text-sm font-medium bg-black/50 px-4 py-2 rounded-full duration-300">
                  اضغط للتكبير
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-3">
                {item.title}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-2 md:p-3 duration-200 z-10"
            aria-label="إغلاق"
          >
            <X size={28} />
          </button>

          {/* Previous button */}
          {selectedIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-2 md:p-3 duration-200 z-10"
              aria-label="السابق"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          {/* Next button */}
          {selectedIndex < galleryItems.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-2 md:p-3 duration-200 z-10"
              aria-label="التالي"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}

          {/* Image and details */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden">
              <Image
                src={galleryItems[selectedIndex].src}
                alt={galleryItems[selectedIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Details below image */}
            <div className="mt-6 text-center text-white max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold">
                {galleryItems[selectedIndex].title}
              </h3>
              <p className="mt-3 text-slate-300 text-base md:text-lg leading-relaxed">
                {galleryItems[selectedIndex].description}
              </p>
              {/* Counter */}
              <p className="mt-4 text-sm text-slate-500">
                {selectedIndex + 1} / {galleryItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

