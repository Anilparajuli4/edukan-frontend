import React, { useState, useEffect } from 'react';
import { ShoppingBag, Star, ArrowRight,  Heart, Eye, Zap, Shield, Truck, RotateCcw } from 'lucide-react';
import Navbar from '../../globals/components/navbar/Navbar';

interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
  gradient: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  badge: string;
}

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

const Home: React.FC = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const heroSlides: HeroSlide[] = [
    {
      title: "Elevate Your Style",
      subtitle: "Discover the latest in premium fashion",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      gradient: "from-purple-600 via-pink-600 to-blue-600"
    },
    {
      title: "Tech That Inspires",
      subtitle: "Innovation meets everyday excellence",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=600&fit=crop",
      gradient: "from-blue-600 via-teal-600 to-green-600"
    },
    {
      title: "Home Reimagined",
      subtitle: "Transform your space into sanctuary",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&h=600&fit=crop",
      gradient: "from-orange-600 via-red-600 to-pink-600"
    }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Wireless Headphones Pro",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      rating: 4.8,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Watch Elite",
      price: 449,
      originalPrice: 549,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      rating: 4.9,
      badge: "New"
    },
    {
      id: 3,
      name: "Minimalist Sneakers",
      price: 189,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      rating: 4.7,
      badge: "Limited"
    },
    {
      id: 4,
      name: "Designer Backpack",
      price: 129,
      originalPrice: 179,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4.6,
      badge: "Trending"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
    <Navbar/>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-${20 + i * 10} h-${20 + i * 10} bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse`}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Hero Content */}
            <div className="space-y-8 animate-in fade-in duration-1000">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-in slide-in-from-left duration-1000">
                    {heroSlides[currentSlide].title}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-lg animate-in slide-in-from-left duration-1000 delay-300">
                  {heroSlides[currentSlide].subtitle}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-left duration-1000 delay-500">
                <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 flex items-center justify-center">
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/30 flex items-center justify-center">
                  <Eye className="mr-2 w-5 h-5" />
                  Explore Collection
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex space-x-2 animate-in slide-in-from-left duration-1000 delay-700">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white scale-125' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-in slide-in-from-right duration-1000 delay-200">
              <div className="relative">
                {/* Main Featured Image */}
                <div className="relative overflow-hidden rounded-3xl group">
                  <img 
                    src={heroSlides[currentSlide].image}
                    alt="Featured product"
                    className="w-full h-[600px] object-cover transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].gradient} opacity-20 transition-opacity duration-1000`}></div>
                  
                  {/* Floating Product Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg text-white">Featured Product</h3>
                        <p className="text-gray-300 text-sm">Limited Edition Collection</p>
                        <div className="flex items-center mt-2">
                          <span className="text-2xl font-bold text-white">$299</span>
                          <span className="text-gray-400 line-through text-sm ml-2">$399</span>
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 p-3 rounded-full transition-all duration-300 hover:scale-110">
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-40 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Why Choose Us
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience shopping like never before with our premium features and unmatched service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Ultra-fast delivery worldwide" },
              { icon: Shield, title: "Secure Payment", desc: "256-bit SSL encryption" },
              { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
              { icon: RotateCcw, title: "Easy Returns", desc: "30-day return policy" }
            ].map((feature: Feature, index: number) => (
              <div 
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:bg-white/10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Featured Products
            </h2>
            <p className="text-gray-400 text-lg">
              Handpicked items that define modern luxury
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product:any) => (
              <div 
                key={product.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    product.badge === 'Best Seller' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                    product.badge === 'New' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                    product.badge === 'Limited' ? 'bg-gradient-to-r from-red-500 to-pink-500' :
                    'bg-gradient-to-r from-blue-500 to-purple-500'
                  } text-white`}>
                    {product.badge}
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Quick Actions */}
                  <div className={`absolute inset-0 flex items-center justify-center space-x-3 transition-all duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-2">({product.rating})</span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-white">${product.price}</span>
                      <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
                    </div>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-12 hover:bg-white/10 transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Stay in the Loop
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Be the first to know about exclusive drops, flash sales, and insider access to limited collections
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full focus:outline-none focus:border-purple-500 focus:bg-white/15 transition-all duration-300 placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-500 text-sm mt-4">
              Join 50,000+ fashion enthusiasts. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3"></div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  LUXE
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Redefining modern commerce with curated collections that inspire and elevate your lifestyle.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-xs">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {[
              { title: 'Shop', links: ['New Arrivals', 'Best Sellers', 'Sale', 'Gift Cards'] },
              { title: 'Support', links: ['Contact Us', 'FAQ', 'Size Guide', 'Shipping Info'] },
              { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Sustainability'] }
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-6 text-white">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 LUXE. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <a key={link} href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;