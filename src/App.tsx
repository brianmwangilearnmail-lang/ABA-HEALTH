import { Search, ShoppingCart, Menu, Upload, Plus, Minus, ArrowRight, Package } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useRef } from 'react';

function ProductCard({ customImage, title, composition, brand, basePrice }: { customImage: string | null, title: string, composition: string, brand: string, basePrice: number }) {
  const [quantity, setQuantity] = useState(1);
  
  const handleIncrement = (e: React.MouseEvent) => { e.stopPropagation(); setQuantity(q => q + 1); };
  const handleDecrement = (e: React.MouseEvent) => { e.stopPropagation(); setQuantity(q => Math.max(1, q - 1)); };

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[1.25rem] p-[1.25rem] relative transition-all duration-300 flex flex-col gap-4 cursor-pointer hover:-translate-y-[5px] hover:border-[#ccff00] hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)] group text-left">
      
      <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[0.65rem] font-black uppercase bg-[#ccff00] text-black z-10">
        {brand}
      </span>

      <div className="w-full aspect-square bg-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
        {customImage ? (
          <img src={customImage} alt={title} className="w-full h-full object-contain p-4 drop-shadow-xl group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="flex flex-col items-center text-white/30">
             <Package className="w-8 h-8 mb-2" />
             <span className="text-[10px] uppercase font-bold tracking-wider">No Visual</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-display font-bold text-[1.1rem] text-white leading-[1.2]">{title}</h3>
        <p className="text-[0.8rem] text-white/60 leading-[1.4] mt-1 line-clamp-1 italic">{composition}</p>
      </div>
      
      <div className="mt-auto flex flex-col gap-4 pt-4 border-t border-white/10">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-white/50 text-[10px] font-bold tracking-wider mb-1 uppercase">Total Price</p>
            <p className="text-[#ccff00] font-black text-xl">Ksh {(basePrice * quantity).toLocaleString()}</p>
          </div>
          
          <div className="flex items-center space-x-2 bg-black/30 rounded-full p-1 border border-white/10">
            <button onClick={handleDecrement} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
              <Minus className="w-3 h-3" />
            </button>
            <span className="text-white font-bold text-sm w-4 text-center">{quantity}</span>
            <button onClick={handleIncrement} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>
        
        <button className="w-full bg-[#ff5e00] hover:bg-[#e05300] text-white py-3 rounded-xl font-black text-sm tracking-widest transition-all hover:shadow-[0_0_20px_rgba(255,94,0,0.4)] border border-[#ff5e00] hover:border-white flex items-center justify-center space-x-2">
          <ShoppingCart className="w-4 h-4" />
          <span>ADD TO CART</span>
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [customImage, setCustomImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImage(url);
    }
  };
  return (
    <div className="min-h-screen bg-electric-blue relative font-sans">
      {/* Topographic Background Pattern */}
      <div className="topo-pattern z-0 fixed inset-0 pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-50 bg-white shadow-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <span className="font-display font-black text-3xl text-[#ff5e00] tracking-tighter">
                ABA HEALTH
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-10">
              <a href="#" className="text-gray-900 hover:text-[#ff5e00] font-bold text-sm uppercase tracking-wider transition-colors">Products</a>
              <a href="#" className="text-gray-900 hover:text-[#ff5e00] font-bold text-sm uppercase tracking-wider transition-colors">About Us</a>
              <a href="#" className="text-gray-900 hover:text-[#ff5e00] font-bold text-sm uppercase tracking-wider transition-colors">Science</a>
              <a href="#" className="text-gray-900 hover:text-[#ff5e00] font-bold text-sm uppercase tracking-wider transition-colors">Contact</a>
            </nav>

            {/* Icons & CTA */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-gray-900 hover:text-[#ff5e00] transition-colors">
                <Search className="w-6 h-6" />
              </button>
              <button className="text-gray-900 hover:text-[#ff5e00] transition-colors relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-[#ff5e00] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">2</span>
              </button>
              <button className="bg-[#ff5e00] hover:bg-[#e05300] text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-[0_4px_14px_0_rgba(255,94,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,94,0,0.23)] hover:-translate-y-0.5">
                SHOP NOW
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-900 hover:text-[#ff5e00]">
                <Menu className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 min-h-[90vh]">
        
        {/* Background Typography */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[15vw] leading-[0.8] text-[#ccff00] text-center tracking-tighter drop-shadow-2xl whitespace-nowrap"
          >
            BOOST YOUR
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display font-black text-[14vw] leading-[0.9] text-outline text-center tracking-tighter whitespace-nowrap"
          >
            DAILY HEALTH
          </motion.h1>
        </div>

        {/* Product Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative z-20 flex justify-center items-center h-[50vh] md:h-[60vh] mt-8 cursor-pointer group"
          onClick={() => fileInputRef.current?.click()}
        >
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageUpload} 
            accept="image/*" 
            className="hidden" 
          />
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="h-full relative z-10 flex items-center justify-center"
          >
            {customImage ? (
              <img 
                src={customImage} 
                alt="ABA Health Premium Supplement" 
                className="h-full object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.4)]"
              />
            ) : (
              <div className="h-[40vh] md:h-[50vh] aspect-[3/4] bg-white/10 backdrop-blur-md border-2 border-dashed border-white/50 rounded-3xl flex flex-col items-center justify-center p-8 text-white text-center hover:bg-white/20 transition-all shadow-[0_40px_40px_rgba(0,0,0,0.2)] group-hover:scale-105 group-hover:border-[#ccff00]">
                <Upload className="w-16 h-16 mb-4 text-[#ccff00] group-hover:scale-110 transition-transform" />
                <p className="font-black text-2xl mb-2 tracking-tight">CLICK TO UPLOAD</p>
                <p className="text-sm font-medium opacity-90">Upload your Salmon Oil image here!</p>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="relative z-30 mt-8 md:mt-12 mb-8"
        >
          <button 
            onClick={() => document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#ff5e00] hover:bg-[#e05300] text-white px-12 py-5 rounded-full font-black text-xl tracking-widest transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,94,0,0.6)] border-2 border-[#ff5e00] hover:border-white flex items-center space-x-3"
          >
            <span>VIEW SUPPLEMENTS</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </motion.div>

      </main>

      {/* Shop Section */}
      <section id="shop-section" className="relative z-20 bg-black/20 backdrop-blur-sm py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-5xl md:text-6xl text-white tracking-tighter mb-4">
              SHOP <span className="text-[#ccff00]">PREMIUM</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto font-medium">
              Elevate your daily routine with our scientifically formulated, sustainably sourced supplements.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8 max-w-[1400px] mx-auto w-full">
            <ProductCard 
              customImage={customImage} 
              title="100% Wild Alaskan Salmon Oil" 
              composition="Omega-3 EPA & DHA & Omega 5, 6, 7, 8 & 9 plus Astaxanthin & Vitamin D"
              brand="Natural Factors"
              basePrice={3500} 
            />
            <ProductCard 
              customImage={customImage} 
              title="Advanced Omega-3 Complex" 
              composition="High Potency EPA/DHA Fish Oil"
              brand="Doppelherz"
              basePrice={4200} 
            />
            <ProductCard 
              customImage={customImage} 
              title="Daily Multivitamin Plus" 
              composition="Essential Vitamins & Minerals"
              brand="Natural Factors"
              basePrice={2800} 
            />
          </div>
        </div>
      </section>
    </div>
  );
}
