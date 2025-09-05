import { Heart, Menu, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3 animate-pulse"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                LUXE
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Shop', 'Collections', 'About', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="hover:text-purple-400 transition-all duration-300 hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110 relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full text-xs flex items-center justify-center animate-bounce">
                  3
                </span>
              </button>
              <button 
                className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 animate-in slide-in-from-top duration-300">
            <div className="px-6 py-4 space-y-4">
              {['Shop', 'Collections', 'About', 'Contact'].map((item) => (
                <a key={item} href="#" className="block hover:text-purple-400 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
  )
}

export default Navbar