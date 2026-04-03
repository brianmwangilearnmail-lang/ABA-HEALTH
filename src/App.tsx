import { Search, ShoppingCart, Menu, Upload, Plus, Minus, ArrowRight, Package, Leaf, ShieldCheck, Zap, Facebook, Twitter, Instagram, Eye, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useRef } from 'react';

const productsData = [
  { id: 1, title: "100% Wild Alaskan Salmon Oil", composition: "Omega-3 EPA & DHA & Omega 5, 6, 7, 8 & 9 plus Astaxanthin & Vitamin D", brand: "Natural Factors", price: 3500 },
  { id: 2, title: "Advanced Omega-3 Complex", composition: "High Potency EPA/DHA Fish Oil", brand: "Doppelherz", price: 4200 },
  { id: 3, title: "Daily Multivitamin Plus", composition: "Essential Vitamins & Minerals", brand: "Natural Factors", price: 2800 },
  { id: 4, title: "Vitamin C 1000mg + Zinc", composition: "Immune System Support & Antioxidant", brand: "Natural Factors", price: 1500 },
  { id: 5, title: "Magnesium Bisglycinate", composition: "Muscle Relaxation & Nervous System Health", brand: "Doppelherz", price: 2200 },
  { id: 6, title: "Probiotic 30 Billion CFU", composition: "10 Strains for Optimal Gut Flora", brand: "Natural Factors", price: 3800 },
  { id: 7, title: "Vitamin D3 5000 IU", composition: "Bone Health & Immune Support", brand: "Doppelherz", price: 1200 },
  { id: 8, title: "Collagen Peptides Powder", composition: "Hydrolyzed Type I & III Collagen", brand: "Natural Factors", price: 4500 },
  { id: 9, title: "Ashwagandha Root Extract", composition: "Adaptogen for Stress & Anxiety Relief", brand: "Doppelherz", price: 2600 },
  { id: 10, title: "Whey Protein Isolate", composition: "25g Protein for Muscle Recovery", brand: "ABA Premium", price: 6500 },
  { id: 11, title: "B-Complex 100", composition: "Energy Metabolism & Nervous System", brand: "Natural Factors", price: 1800 },
  { id: 12, title: "Iron + Vitamin C", composition: "Gentle Iron for Blood Health", brand: "Doppelherz", price: 1400 },
  { id: 13, title: "Melatonin 5mg", composition: "Natural Sleep Cycle Support", brand: "Natural Factors", price: 1100 },
  { id: 14, title: "Zinc Picolinate 50mg", composition: "Immune & Skin Health", brand: "Natural Factors", price: 1300 },
  { id: 15, title: "L-Glutamine Powder", composition: "Gut Health & Recovery", brand: "ABA Premium", price: 3200 },
  { id: 16, title: "Creatine Monohydrate", composition: "Muscle Power & Strength", brand: "ABA Premium", price: 2500 },
  { id: 17, title: "Turmeric Curcumin", composition: "Joint Support & Anti-inflammatory", brand: "Doppelherz", price: 2900 },
  { id: 18, title: "CoQ10 100mg", composition: "Heart Health & Energy", brand: "Natural Factors", price: 4800 },
  { id: 19, title: "BCAA 2:1:1", composition: "Intra-Workout Recovery", brand: "ABA Premium", price: 3400 },
  { id: 20, title: "Maca Root Extract", composition: "Energy & Vitality", brand: "Natural Factors", price: 1900 },
  { id: 21, title: "L-Theanine 200mg", composition: "Focus & Stress Relief", brand: "Doppelherz", price: 2100 },
  { id: 22, title: "Glucosamine Chondroitin", composition: "Joint Mobility", brand: "Natural Factors", price: 3600 },
  { id: 23, title: "Pre-Workout Explosive", composition: "Energy & Pump", brand: "ABA Premium", price: 4500 }
];

function NewArrivalCard({ customImage, title, price }: { customImage: string | null, title: string, price: number }) {
  return (
    <div className="min-w-[260px] w-[260px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-[1.25rem] p-4 flex flex-col gap-4 group hover:-translate-y-1 transition-all duration-300 hover:border-[#ccff00]">
      <div className="w-full aspect-square bg-white/5 rounded-xl relative flex items-center justify-center p-4 overflow-hidden">
        <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
          <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#ccff00] hover:text-black transition-colors">
            <Eye className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#ff5e00] hover:border-[#ff5e00] transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        {customImage ? (
          <img src={customImage} alt={title} className="w-full h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="flex flex-col items-center text-white/30">
             <Package className="w-8 h-8 mb-2" />
             <span className="text-[10px] uppercase font-bold tracking-wider">No Visual</span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1 flex-grow">
        <h3 className="font-display font-bold text-[1.1rem] text-white leading-[1.2] line-clamp-2">{title}</h3>
        <p className="text-[#ccff00] font-black text-lg mt-1">Ksh {price.toLocaleString()}</p>
      </div>
      <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-[#ff5e00] text-white font-black text-sm tracking-widest transition-all flex items-center justify-center gap-2 border border-transparent hover:border-white hover:shadow-[0_0_20px_rgba(255,94,0,0.4)]">
        <Plus className="w-4 h-4" /> ADD TO CART
      </button>
    </div>
  );
}

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

function AboutPage() {
  return (
    <div className="relative z-20 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
      <div className="text-center mb-16">
        <h1 className="font-display font-black text-5xl md:text-7xl tracking-tighter mb-6">
          ABOUT <span className="text-[#ccff00]">ABA HEALTH</span>
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed">
          We are dedicated to providing premium, scientifically-backed supplements to help you achieve your peak physical and mental performance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12">
          <h2 className="font-display font-bold text-3xl mb-6 text-[#ccff00]">Our Story</h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Founded with a passion for holistic well-being, ABA HEALTH started as a small initiative to bring transparent, high-quality nutrition to our community. We noticed a gap in the market for supplements that were both effective and sustainably sourced.
          </p>
          <p className="text-white/80 leading-relaxed">
            Today, we partner with top researchers and sustainable farms globally to ensure every product we offer meets the highest standards of purity and potency.
          </p>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80" alt="Laboratory" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
          <div className="w-16 h-16 bg-[#ff5e00] rounded-full flex items-center justify-center mx-auto mb-6">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-xl mb-4">Pure Ingredients</h3>
          <p className="text-white/70 text-sm">We source only the finest raw materials, ensuring no artificial fillers or harmful additives.</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
          <div className="w-16 h-16 bg-[#ccff00] rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 text-black" />
          </div>
          <h3 className="font-bold text-xl mb-4">Rigorous Testing</h3>
          <p className="text-white/70 text-sm">Every batch undergoes strict third-party testing for quality, safety, and efficacy.</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
          <div className="w-16 h-16 bg-[#00d2ff] rounded-full flex items-center justify-center mx-auto mb-6">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-xl mb-4">Maximum Efficacy</h3>
          <p className="text-white/70 text-sm">Formulated for optimal absorption so your body gets exactly what it needs.</p>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="relative z-20 py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-white">
      <div className="text-center mb-16">
        <h1 className="font-display font-black text-5xl md:text-7xl tracking-tighter mb-6">
          GET IN <span className="text-[#ff5e00]">TOUCH</span>
        </h1>
        <p className="text-xl text-white/80 font-medium">
          Have questions about our products or your order? We're here to help.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold tracking-wider uppercase text-white/80">First Name</label>
              <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] transition-colors" placeholder="John" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold tracking-wider uppercase text-white/80">Last Name</label>
              <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] transition-colors" placeholder="Doe" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold tracking-wider uppercase text-white/80">Email Address</label>
            <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] transition-colors" placeholder="john@example.com" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold tracking-wider uppercase text-white/80">Subject</label>
            <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] transition-colors appearance-none">
              <option value="" className="text-black">Select a topic...</option>
              <option value="order" className="text-black">Order Inquiry</option>
              <option value="product" className="text-black">Product Question</option>
              <option value="wholesale" className="text-black">Wholesale</option>
              <option value="other" className="text-black">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold tracking-wider uppercase text-white/80">Message</label>
            <textarea rows={5} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] transition-colors resize-none" placeholder="How can we help you?"></textarea>
          </div>

          <button type="submit" className="w-full bg-[#ccff00] hover:bg-[#b3e600] text-black py-4 rounded-xl font-black text-lg tracking-widest transition-all hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] mt-4">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}

function SciencePage() {
  return (
    <div className="relative z-20 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
      <div className="text-center mb-16">
        <h1 className="font-display font-black text-5xl md:text-7xl tracking-tighter mb-6">
          OUR <span className="text-[#00d2ff]">SCIENCE</span>
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed">
          At ABA Health, we don't guess. We test. Our formulations are built on clinical research and rigorous scientific validation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80" alt="Microscope" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12">
          <h2 className="font-display font-bold text-3xl mb-6 text-[#00d2ff]">Evidence-Based Formulation</h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Every ingredient we select is backed by peer-reviewed clinical trials. We use the exact dosages proven to be effective in human studies, never hiding behind "proprietary blends."
          </p>
          <ul className="space-y-4 text-white/80">
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#ccff00] shrink-0" />
              <span>Third-party tested for heavy metals, microbes, and allergens.</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#ccff00] shrink-0" />
              <span>Bioavailable forms of vitamins (e.g., Methylcobalamin instead of Cyanocobalamin).</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#ccff00] shrink-0" />
              <span>Manufactured in cGMP certified facilities.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function PrivacyPage() {
  return (
    <div className="relative z-20 py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-white">
      <div className="mb-12">
        <h1 className="font-display font-black text-4xl md:text-5xl tracking-tighter mb-6">
          PRIVACY <span className="text-[#ff5e00]">POLICY</span>
        </h1>
        <p className="text-white/60">Last updated: April 2026</p>
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 space-y-8 text-white/80 leading-relaxed">
        <section>
          <h2 className="font-bold text-2xl text-white mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you create an account, make a purchase, or contact us for support. This may include your name, email address, shipping address, and payment information.</p>
        </section>
        
        <section>
          <h2 className="font-bold text-2xl text-white mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to process your orders, communicate with you about your purchases, and improve our website and product offerings. We do not sell your personal data to third parties.</p>
        </section>

        <section>
          <h2 className="font-bold text-2xl text-white mb-4">3. Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information during transmission and storage. All payment processing is handled by secure, PCI-compliant third-party processors.</p>
        </section>
      </div>
    </div>
  );
}

export default function App() {
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact' | 'science' | 'privacy'>('home');
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
              <button onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className={`font-bold text-sm uppercase tracking-wider transition-colors ${currentPage === 'home' ? 'text-[#ff5e00]' : 'text-gray-900 hover:text-[#ff5e00]'}`}>Products</button>
              <button onClick={() => setCurrentPage('about')} className={`font-bold text-sm uppercase tracking-wider transition-colors ${currentPage === 'about' ? 'text-[#ff5e00]' : 'text-gray-900 hover:text-[#ff5e00]'}`}>About Us</button>
              <button onClick={() => setCurrentPage('contact')} className={`font-bold text-sm uppercase tracking-wider transition-colors ${currentPage === 'contact' ? 'text-[#ff5e00]' : 'text-gray-900 hover:text-[#ff5e00]'}`}>Contact</button>
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

      {currentPage === 'home' && (
        <>
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

      {/* New Arrivals Section */}
      <section className="relative z-20 bg-black/30 backdrop-blur-md py-16 border-t border-white/10 w-full">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
            <h2 className="font-display font-black text-3xl md:text-4xl text-white tracking-tighter">
              NEW TO <span className="text-[#ccff00]">ABA HEALTH</span>
            </h2>
            <a href="#" className="text-[#ff5e00] hover:text-white font-bold flex items-center gap-2 transition-colors text-sm md:text-base uppercase tracking-wider">
              View All <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
          
          <div className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory custom-scrollbar">
            {productsData.slice(15, 23).map((product) => (
              <div key={`new-${product.id}`} className="snap-start shrink-0">
                <NewArrivalCard customImage={customImage} title={product.title} price={product.price} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop-section" className="relative z-20 bg-black/20 backdrop-blur-sm py-24 border-t border-white/10 w-full">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-5xl md:text-6xl text-white tracking-tighter mb-4">
              SHOP <span className="text-[#ccff00]">PREMIUM</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto font-medium">
              Elevate your daily routine with our scientifically formulated, sustainably sourced supplements.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 md:gap-8 w-full mx-auto">
            {productsData.map((product) => (
              <ProductCard 
                key={product.id}
                customImage={customImage} 
                title={product.title} 
                composition={product.composition}
                brand={product.brand}
                basePrice={product.price} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-20 bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tighter mb-4">
              WHY CHOOSE <span className="text-[#ff5e00]">ABA HEALTH</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#ccff00]/20 rounded-full flex items-center justify-center mb-6 text-[#88aa00]">
                <Leaf className="w-10 h-10" />
              </div>
              <h3 className="font-black text-xl mb-3 text-gray-900">Sustainably Sourced</h3>
              <p className="text-gray-600 font-medium">We prioritize the environment by sourcing our ingredients from sustainable, eco-friendly suppliers globally.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#ff5e00]/10 rounded-full flex items-center justify-center mb-6 text-[#ff5e00]">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="font-black text-xl mb-3 text-gray-900">Clinically Tested</h3>
              <p className="text-gray-600 font-medium">Every batch undergoes rigorous third-party testing to ensure maximum purity, potency, and safety.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 text-blue-600">
                <Zap className="w-10 h-10" />
              </div>
              <h3 className="font-black text-xl mb-3 text-gray-900">Maximum Absorption</h3>
              <p className="text-gray-600 font-medium">Formulated with advanced delivery systems to ensure your body absorbs the nutrients it needs efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-20 bg-gray-50 py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=1000&auto=format&fit=crop" alt="Laboratory" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff5e00]/40 to-transparent mix-blend-multiply"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tighter mb-6">
              OUR MISSION
            </h2>
            <p className="text-gray-600 text-lg mb-6 font-medium leading-relaxed">
              At ABA Health, we believe that premium nutrition should be accessible, transparent, and highly effective. Founded by a team of health enthusiasts and clinical researchers, we set out to disrupt the supplement industry by removing fillers and focusing purely on active, bioavailable ingredients.
            </p>
            <p className="text-gray-600 text-lg mb-8 font-medium leading-relaxed">
              Whether you are an elite athlete, a busy professional, or simply looking to optimize your daily wellness, our products are designed to support your unique journey to peak health.
            </p>
            <button className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold tracking-widest transition-all hover:-translate-y-1">
              READ OUR STORY
            </button>
          </div>
        </div>
      </section>
      </>
      )}

      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'science' && <SciencePage />}
      {currentPage === 'privacy' && <PrivacyPage />}

      {/* Footer */}
      <footer className="relative z-20 bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <span className="font-display font-black text-3xl text-[#ff5e00] tracking-tighter mb-6 block">
                ABA HEALTH
              </span>
              <p className="text-gray-400 font-medium mb-6">
                Premium dietary supplements formulated for maximum efficacy and daily wellness.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff5e00] transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff5e00] transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff5e00] transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Shop</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li><button onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-white transition-colors">All Products</button></li>
                <li><button onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-white transition-colors">Vitamins & Minerals</button></li>
                <li><button onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-white transition-colors">Omega & Fish Oils</button></li>
                <li><button onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-white transition-colors">Proteins</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Company</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => setCurrentPage('science')} className="hover:text-white transition-colors">Our Science</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Support</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
                <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} ABA Health. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button onClick={() => setCurrentPage('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
