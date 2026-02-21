import { AddToCart } from "./AddToCart";



export function Header() {
  return (
    <header className="w-full shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">
          miniStore
        </h1>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-black transition">
            Home
          </a>
          <a href="#" className="hover:text-black transition">
            Product
          </a>
<AddToCart/>
          
        </nav>
      </div>
    </header>
  );
}