// src/components/Navbar.tsx
import { useState } from 'react';
import logo from '../../assets/mainLogo.svg';
import { ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const NAV_ITEMS = [
    { label: "What We Do", id: "what-we-do" },
    { label: "Opportunity", id: "market-dynamics" },
    { label: "Meet the Team", id: "meet-the-team" },
    { label: "Contact Us", id: "contact-us" },
  ];

  

  return (
    <>
      {/* Outer wrapper provides the 'Floating' placement */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
        <div
          className={`
            w-full max-w-[1600px] pointer-events-auto transition-all duration-500 ease-in-out
            rounded-[2rem] border border-white/20 
            backdrop-blur-xl bg-white shadow-[0_20px_40px_-15px_rgba(23,62,53,0.15)] py-2 
            
            }
          `}
        >
          <div className="px-6 md:px-10 lg:px-12 flex items-center justify-between h-14 md:h-16">
            
            {/* Logo */}
            <a href="/" className="flex items-center shrink-0">
              <img src={logo} alt="troo.earth" className="h-7 md:h-9 w-auto transition-transform hover:scale-105" />
            </a>

            {/* Desktop Center Links */}
            <nav className="hidden lg:flex items-center justify-center flex-1 px-10">
              <div className="flex space-x-10">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-[14px] font-black uppercase tracking-[0.1em] transition-colors text-secondary/80 hover:text-primary whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* Right Button */}
            <div className="hidden md:flex items-center shrink-0">
              <a
                href="/marketplace"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-[11px] uppercase tracking-widest transition-all bg-primary-gradient text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 group"
              >
                <span>Marketplace</span>
                <ArrowUpRight 
                  size={16} 
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent" 
                />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-secondary"
              aria-label="Toggle Menu"
            >
              <div className="w-7 flex flex-col items-end gap-1.5">
                <span className={`h-0.5 bg-current transition-all ${mobileOpen ? 'w-7 rotate-45 translate-y-2' : 'w-7'}`} />
                <span className={`h-0.5 bg-current transition-all ${mobileOpen ? 'opacity-0' : 'w-5'}`} />
                <span className={`h-0.5 bg-current transition-all ${mobileOpen ? 'w-7 -rotate-45 -translate-y-2' : 'w-7'}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu - Contained within the rounded island */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-10 py-8 space-y-6 text-center border-t border-secondary/5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-xl font-black text-secondary hover:text-primary tracking-tighter"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-6">
                <a
                  href="/marketplace"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Marketplace
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;