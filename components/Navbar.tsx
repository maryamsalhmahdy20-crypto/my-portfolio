"use client";

/* ============================================================
   Navbar.tsx

   مسؤول عن شريط التنقل العلوي.

   لتغيير اسم الموقع:
   ابحث عن Maryam

   لإضافة صفحة:
   أضف رابطاً داخل links

   لتغيير اللون:
   غيّر bg-slate-950
============================================================ */

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {

  // فتح وإغلاق القائمة في الهاتف
  const [open, setOpen] = useState(false);

  // جميع روابط الموقع موجودة هنا
  const links = [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Gallery", href: "/gallery" },
    { title: "Pricing", href: "/pricing" },
    { title: "Contact", href: "/contact" },
  ];

  return (

    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* اسم الموقع */}

        <Link
          href="/"
          className="text-2xl font-black text-white tracking-wide"
        >
          Maryam
        </Link>

        {/* روابط الكمبيوتر */}

        <nav className="hidden md:flex gap-8">

          {links.map((item) => (

            <Link
              key={item.title}
              href={item.href}
              className="text-slate-300 hover:text-blue-400 duration-300 font-medium"
            >
              {item.title}
            </Link>

          ))}

        </nav>

        {/* زر الهاتف */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >

          {open ? <X size={28}/> : <Menu size={28}/>}

        </button>

      </div>

      {/* القائمة الخاصة بالموبايل */}

      {open && (

        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          {links.map((item)=>(

            <Link
              key={item.title}
              href={item.href}
              onClick={()=>setOpen(false)}
              className="block px-8 py-5 border-b border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-blue-400 duration-300"
            >
              {item.title}
            </Link>

          ))}

        </div>

      )}

    </header>

  );

}