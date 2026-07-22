import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 text-center bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <Link href="/" className="text-3xl font-black tracking-tight text-white">
          Maryam
        </Link>
        <p className="mt-4 text-slate-400 max-w-md mx-auto">
          Graphic Designer specializing in Brand Identity, Social Media, and Print Design.
        </p>
        <div className="flex justify-center gap-6 mt-6 text-slate-500 text-sm">
          <Link href="/about" className="hover:text-blue-400 transition">About</Link>
          <Link href="/portfolio" className="hover:text-blue-400 transition">Portfolio</Link>
          <Link href="/pricing" className="hover:text-blue-400 transition">Pricing</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Maryam Saleh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
