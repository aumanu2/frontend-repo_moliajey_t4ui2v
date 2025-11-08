import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200" />
          <span className="font-semibold tracking-wide text-gray-800">ELOURA</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#home" className="hover:text-gray-900 transition-colors">Home</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#shop" className="hover:text-gray-900 transition-colors">Shop</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-gray-800 px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-all">
          <ShoppingBag size={18} />
          Shop Now
        </button>
      </div>
    </header>
  );
}
