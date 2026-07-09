// components/Navbar.tsx
// هذا هو شريط التنقل العلوي، فيه روابط للأقسام الرئيسية
// تقدرِين تغيرين النصوص أو تضيفين روابط جديدة بسهولة

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-pink-600 font-bold text-xl">Maryam</h1>
        <div className="space-x-6">
          <a href="/" className="text-gray-700 hover:text-pink-600">Home</a>
          <a href="/projects" className="text-gray-700 hover:text-pink-600">Projects</a>
          <a href="/pricing" className="text-gray-700 hover:text-pink-600">Pricing</a>
          <a href="/gallery" className="text-gray-700 hover:text-pink-600">Gallery</a>
          <a href="/contact" className="text-gray-700 hover:text-pink-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}
