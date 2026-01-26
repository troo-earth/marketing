import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Database } from 'lucide-react';

const MarketplaceComingSoon = () => {
  return (
    <div className="min-h-screen bg-white font-nunito relative overflow-hidden flex items-center justify-center pt-32">
      {/* Blueprint Grid Background (Watershed Style) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#173E35 1px, transparent 1px), linear-gradient(90deg, #173E35 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />
      
      {/* Branded Atmosphere */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[140px]" />

      <div className="relative z-10 w-full max-w-4xl px-6 text-center">
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-secondary/5 border border-secondary/10 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-secondary">
            System Deployment in Progress
          </span>
        </motion.div>

        {/* Main Heading - Explicit Coming Soon */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-secondary font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] mb-8"
        >
          Marketplace <br />
          <span className="text-primary-gradient italic tracking-normal">Coming Soon.</span>
        </motion.h1>

        {/* Subtext - Sourced from TE-CP */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          We are finalizing our enterprise-grade marketplace to ensure 
          total climate integrity. Our platform is currently undergoing 
          final registry synchronization and will be available shortly.
        </motion.p>

        {/* Feature Teasers */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left"
        >
          {[
            { icon: <Database size={18}/>, label: "Registry Sync", desc: "Establishing real-time data bridges." },
            { icon: <ShieldCheck size={18}/>, label: "Governance", desc: "Setting the standard for security." },
            { icon: <Globe size={18}/>, label: "Access", desc: "Preparing global project pipelines." }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white border border-secondary/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary mb-3">{item.icon}</div>
              <h3 className="text-secondary font-black text-xs uppercase tracking-widest mb-2">{item.label}</h3>
              <p className="text-gray-400 text-xs font-medium leading-normal">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarketplaceComingSoon;