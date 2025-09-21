import React, { useState, useEffect } from 'react';
import { 
  Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw, 
  Zap, ChevronLeft, ChevronRight, Plus, Minus, Check, X,
  ThumbsUp, MessageCircle, Award, Globe
} from 'lucide-react';
import { fetchProduct, fetchSingleProduct } from '../../store/productSlice';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../store/hook';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../types';

interface ProductImage {
  id: number;
  url: string;
  alt: string;
}

interface ProductOption {
  id: string;
  name: string;
  values: string[];
}

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  helpful: number;
}

const ProductDetail: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [isImageZoomed, setIsImageZoomed] = useState(false);
 const {id} = useParams()
 console.log(id);
 
 const dispatch = useAppDispatch()
 const {singleProduct} = useAppSelector((state)=> state.products)
 console.log(singleProduct);
 
 if(!id){
  return console.log('id not found');
  
 }

 useEffect(()=>{
  dispatch(fetchSingleProduct(id))
 },[])

  const product = {
    id: 1,
    name: "Premium Wireless Headphones Pro Max",
    brand: "LUXE Audio",
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.8,
    reviewCount: 324,
    inStock: true,
    stockCount: 12,
    sku: "LUX-HPM-001",
    category: "Electronics > Audio > Headphones"
  };

  const images: ProductImage[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      alt: "Front view of premium headphones"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop",
      alt: "Side view of headphones"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&h=800&fit=crop",
      alt: "Headphones in use"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop",
      alt: "Close-up details"
    }
  ];

  const colors = [
    { name: 'Midnight Black', value: 'black', color: '#1a1a1a' },
    { name: 'Pearl White', value: 'white', color: '#f8f8f8' },
    { name: 'Rose Gold', value: 'rose-gold', color: '#e8b4a0' },
    { name: 'Space Gray', value: 'space-gray', color: '#5a5a5a' }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const reviews: Review[] = [
    {
      id: 1,
      user: "Sarah M.",
      rating: 5,
      comment: "Absolutely love these headphones! The sound quality is incredible and they're so comfortable for long listening sessions.",
      date: "2025-01-15",
      verified: true,
      helpful: 12
    },
    {
      id: 2,
      user: "David L.",
      rating: 4,
      comment: "Great build quality and amazing noise cancellation. Battery life could be better but overall very satisfied.",
      date: "2025-01-10",
      verified: true,
      helpful: 8
    },
    {
      id: 3,
      user: "Emma R.",
      rating: 5,
      comment: "These are by far the best headphones I've ever owned. Worth every penny!",
      date: "2025-01-08",
      verified: false,
      helpful: 15
    }
  ];

  const features = [
    { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
    { icon: Shield, title: "2 Year Warranty", desc: "Full coverage included" },
    { icon: RotateCcw, title: "30-Day Returns", desc: "Hassle-free returns" },
    { icon: Zap, title: "Fast Charging", desc: "5 min = 2 hours playback" }
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  useEffect(()=>{
   fetchProduct()
  },)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Breadcrumb */}
      <div className="bg-gray-900/50 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="text-sm text-gray-400">
            <span>Home</span> / <span>Electronics</span> / <span>Audio</span> / 
            <span className="text-white ml-1">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative group bg-gray-900/50 rounded-3xl overflow-hidden aspect-square">
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].alt}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  isImageZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsImageZoomed(!isImageZoomed)}
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                    selectedImage === index
                      ? 'ring-2 ring-purple-500 scale-105'
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-purple-400 font-medium">{product.brand}</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span className="text-gray-400 text-sm">SKU: {product.sku}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{product.rating}</span>
                </div>
                <span className="text-gray-400">({product.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-white">Rs{product.price}</span>
              <span className="text-xl text-gray-500 line-through">Rs{product.originalPrice}</span>
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1 rounded-full text-sm font-semibold">
                Save {product.discount}%
              </span>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-400">In Stock ({product.stockCount} left)</span>
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Color</h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`relative w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 ${
                      selectedColor === color.value ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-black' : ''
                    }`}
                    style={{ backgroundColor: color.color }}
                    title={color.name}
                  >
                    {selectedColor === color.value && (
                      <Check className="w-6 h-6 absolute inset-0 m-auto text-white" />
                    )}
                  </button>
                ))}
              </div>
              {selectedColor && (
                <p className="text-sm text-gray-400">
                  Selected: {colors.find(c => c.value === selectedColor)?.name}
                </p>
              )}
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Size</h3>
              <div className="grid grid-cols-6 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-xl border transition-all duration-300 hover:scale-105 ${
                      selectedSize === size
                        ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                        : 'border-gray-700 hover:border-gray-500'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-gray-900 rounded-xl">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-3 hover:bg-gray-800 rounded-l-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 py-3 font-semibold">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-3 hover:bg-gray-800 rounded-r-xl transition-colors duration-300"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  isWishlisted
                    ? 'border-red-500 bg-red-500/20 text-red-400'
                    : 'border-gray-700 hover:border-gray-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
              <button className="p-4 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{feature.title}</p>
                    <p className="text-gray-400 text-xs">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="border-t border-gray-800 pt-16">
          {/* Tab Navigation */}
          <div className="flex gap-8 mb-8 border-b border-gray-800">
            {['description', 'specifications', 'reviews', 'shipping'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 font-semibold capitalize transition-all duration-300 ${
                  activeTab === tab
                    ? 'text-purple-400 border-b-2 border-purple-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[300px]">
            {activeTab === 'description' && (
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold mb-6">Product Description</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Experience audio like never before with our Premium Wireless Headphones Pro Max. 
                  Engineered with cutting-edge technology and premium materials, these headphones 
                  deliver exceptional sound quality, comfort, and style.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-purple-400">Key Features</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        Active Noise Cancellation
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        40-hour battery life
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        Hi-Res Audio certified
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        Comfortable over-ear design
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-purple-400">What's in the Box</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li>• Premium Wireless Headphones</li>
                      <li>• USB-C Charging Cable</li>
                      <li>• 3.5mm Audio Cable</li>
                      <li>• Carrying Case</li>
                      <li>• Quick Start Guide</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {[
                      ['Driver Size', '40mm Dynamic'],
                      ['Frequency Response', '20Hz - 20kHz'],
                      ['Impedance', '32 Ohms'],
                      ['Sensitivity', '100 dB/mW'],
                      ['Battery Life', '40 hours (ANC on)'],
                      ['Charging Time', '3 hours (full charge)']
                    ].map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-800">
                        <span className="text-gray-400">{key}</span>
                        <span className="font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {[
                      ['Connectivity', 'Bluetooth 5.2, 3.5mm'],
                      ['Weight', '280g'],
                      ['Dimensions', '190 x 165 x 85mm'],
                      ['Materials', 'Aluminum, Leather'],
                      ['Colors', '4 Available'],
                      ['Warranty', '2 Years']
                    ].map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-800">
                        <span className="text-gray-400">{key}</span>
                        <span className="font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold">Customer Reviews</h3>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                    Write a Review
                  </button>
                </div>

                {/* Rating Summary */}
                <div className="bg-gray-900/50 rounded-2xl p-6 mb-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">{product.rating}</div>
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-6 h-6 ${
                              i < Math.floor(product.rating) ? 'fill-current text-yellow-400' : 'fill-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-400">Based on {product.reviewCount} reviews</p>
                    </div>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-2">
                          <span className="text-sm w-8">{stars}★</span>
                          <div className="flex-1 bg-gray-800 h-2 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                              style={{ width: `${Math.random() * 80 + 10}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-400 w-12">
                            {Math.floor(Math.random() * 100)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-gray-900/30 rounded-2xl p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-semibold">{review.user}</span>
                            {review.verified && (
                              <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs flex items-center gap-1">
                                <Check className="w-3 h-3" />
                                Verified
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? 'fill-current' : 'fill-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-gray-400 text-sm">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{review.comment}</p>
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-gray-400 hover:text-green-400 transition-colors duration-300">
                          <ThumbsUp className="w-4 h-4" />
                          <span>Helpful ({review.helpful})</span>
                        </button>
                        <button className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                          <MessageCircle className="w-4 h-4" />
                          <span>Reply</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Shipping & Returns</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-purple-400">Shipping Information</h4>
                    <div className="space-y-4 text-gray-300">
                      <div className="flex items-start gap-3">
                        <Truck className="w-5 h-5 text-purple-400 mt-0.5" />
                        <div>
                          <p className="font-semibold">Free Standard Shipping</p>
                          <p className="text-sm text-gray-400">On orders over $50 • 5-7 business days</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-purple-400 mt-0.5" />
                        <div>
                          <p className="font-semibold">Express Shipping</p>
                          <p className="text-sm text-gray-400">$19.99 • 2-3 business days</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Globe className="w-5 h-5 text-purple-400 mt-0.5" />
                        <div>
                          <p className="font-semibold">International Shipping</p>
                          <p className="text-sm text-gray-400">Available to 50+ countries</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-purple-400">Returns & Exchanges</h4>
                    <div className="space-y-4 text-gray-300">
                      <div className="flex items-start gap-3">
                        <RotateCcw className="w-5 h-5 text-purple-400 mt-0.5" />
                        <div>
                          <p className="font-semibold">30-Day Returns</p>
                          <p className="text-sm text-gray-400">Free returns on all orders</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-purple-400 mt-0.5" />
                        <div>
                          <p className="font-semibold">Quality Guarantee</p>
                          <p className="text-sm text-gray-400">100% satisfaction guaranteed</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-purple-400 mt-0.5" />
                        <div>
                          <p className="font-semibold">2-Year Warranty</p>
                          <p className="text-sm text-gray-400">Full manufacturer warranty</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;