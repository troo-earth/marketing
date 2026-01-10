import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ArrowUpRight, Linkedin, Instagram, Twitter, ArrowRight } from "lucide-react";
import logo from '../../assets/mainLogo.svg';
import FooterWaterMark from "/assets/footerwatermark.svg";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHashNavigation = (id: string) => {
    // If not on home page, navigate home first, then scroll
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="relative w-full pt-12 pb-8 overflow-hidden">
      {/* Blueprint Grid Background - Referencing Watershed Style */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#173E35 1px, transparent 1px), linear-gradient(90deg, #173E35 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-22 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 mb-12">
          
          {/* ✅ COLUMN 1: BRAND IDENTITY */}
          <div className="lg:col-span-4 space-y-6">
            <HashLink to="/" smooth className="inline-block transition-transform hover:scale-105">
              <img src={logo} alt="troo.earth" className="h-10 w-auto" />
            </HashLink>
            <p className="text-gray-500 font-medium text-base leading-relaxed max-w-sm">
              Simplifying access to verified carbon credits for enterprises through direct data bridges and secure technology.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <Linkedin size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" }
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-9 h-9 rounded-xl bg-secondary/5 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ✅ COLUMN 2: NAVIGATION */}
          <div className="lg:col-span-2 space-y-4 lg:pt-2">
            <h4 className="text-secondary font-black text-[10px] uppercase tracking-[0.3em]">Platform</h4>
            <div className="flex flex-col gap-3">
              <HashLink 
                smooth 
                to="/#what-we-do" 
                onClick={() => handleHashNavigation('what-we-do')}
                className="text-gray-400 font-bold text-sm hover:text-primary transition-colors"
              >
                Capabilities
              </HashLink>
              <HashLink 
                smooth 
                to="/#market-dynamics" 
                onClick={() => handleHashNavigation('market-dynamics')}
                className="text-gray-400 font-bold text-sm hover:text-primary transition-colors"
              >
                Opportunity
              </HashLink>
              <Link to="/marketplace" className="text-gray-400 font-bold text-sm hover:text-primary transition-colors flex items-center gap-1">
                Marketplace <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>

          {/* ✅ COLUMN 3: TRANSPARENCY */}
          <div className="lg:col-span-2 space-y-4 lg:pt-2">
            <h4 className="text-secondary font-black text-[10px] uppercase tracking-[0.3em]">Integrity</h4>
            <div className="flex flex-col gap-3">
              <Link to="/vision-mission" className="text-gray-400 font-bold text-sm hover:text-primary transition-colors">Vision & Mission</Link>
              <Link to="/faq" className="text-gray-400 font-bold text-sm hover:text-primary transition-colors">FAQ</Link>
              <Link to="/privacy-policy" className="text-gray-400 font-bold text-sm hover:text-primary transition-colors">Data Privacy</Link>
              <Link to="/terms-and-conditions" className="text-gray-400 font-bold text-sm hover:text-primary transition-colors">Governance</Link>
            </div>
          </div>

          {/* ✅ COLUMN 4: GLOBAL ACCESS */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-[2rem] bg-primary text-white relative overflow-hidden group shadow-lg shadow-primary/10">
              <img 
                src={FooterWaterMark} 
                className="absolute -right-2 -bottom-2 w-24 opacity-20 group-hover:scale-110 transition-transform duration-700 pointer-events-none" 
                alt="Watermark" 
              />
              <h4 className="font-black text-[9px] uppercase tracking-[0.4em] mb-3 opacity-80">Direct Access</h4>
              <p className="text-base font-black tracking-tighter mb-5 leading-tight relative z-10">
                Ready to demonstrate measurable climate impact? 
              </p>
              <HashLink 
                smooth 
                to="/#contact-us" 
                onClick={() => handleHashNavigation('contact-us')}
                className="inline-flex items-center gap-2 text-white font-bold text-xs group relative z-10"
              >
                Contact Partnerships <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
              </HashLink>
            </div>
          </div>
        </div>

        {/* ✅ BOTTOM BAR */}
        <div className="pt-8 border-t border-secondary/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">
            © 2026 troo.earth — Infrastructure for verified impact 
          </p>
          <div className="flex items-center gap-6 text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">
             <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-secondary opacity-80 uppercase">Trust at the Foundation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;