import React from 'react';
import {  Timer, ArrowLeft, Sparkles, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Marketplace: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-[var(--background-image-main-gradient)] flex items-center justify-center pt-2 px-6 overflow-hidden">
      
      {/* Branded Atmospheric Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Animated Icon Header */}
        

        {/* Text Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-primary/10 backdrop-blur-sm shadow-sm">
            <Sparkles className="text-primary" size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">The Future of Exchange</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-secondary leading-[0.9] tracking-tighter">
            Marketplace <br />
            <span className="text-primary-gradient">Coming Soon.</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            We are building a decentralized hub for verified carbon credits, sustainable assets, and impact-first procurement. 
            Moving the planet forward, one transaction at a time.
          </p>
        </div>

        {/* Feature Teasers */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Verified Credits', icon: <Globe size={16}/> },
            { label: 'Impact Tracking', icon: <Sparkles size={16}/> },
            { label: 'Instant Settlement', icon: <Timer size={16}/> },
          ].map((item) => (
            <div key={item.label} className="bg-white/40 backdrop-blur-md border border-white/60 p-4 rounded-2xl flex items-center justify-center gap-3">
              <span className="text-primary">{item.icon}</span>
              <span className="text-xs font-black text-secondary uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Navigation Back */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <Link 
            to="/" 
            className="group flex items-center gap-2 text-secondary font-black hover:text-primary transition-colors uppercase tracking-widest text-xs"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to troo.earth Home
          </Link>
          
          <div className="h-px w-24 bg-secondary opacity-20" />
          <p className="text-[10px] font-bold text-secondary/40 uppercase tracking-[0.4em]">troo.earth Impact Engine v2.0</p>
        </div>
      </div>
    </main>
  );
};

export default Marketplace;