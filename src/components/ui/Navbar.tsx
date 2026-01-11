// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/mainLogo.svg';
import { ArrowUpRight } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const NAV_ITEMS = [
    { label: "What We Do", id: "what-we-do" },
    { label: "Opportunity", id: "market-dynamics" },
    { label: "Meet the Team", id: "meet-the-team" },
    { label: "Contact Us", id: "contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    
    // If not on home page, navigate to home first, then scroll
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

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Otherwise, navigate to home page
      navigate('/');
    }
  };

  return (
    <>
      {/* Outer wrapper provides the 'Floating' placement */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
        <div
          className={`
            w-full max-w-[1600px] pointer-events-auto transition-all duration-500 ease-in-out
            rounded-[2rem] py-2
            ${isScrolled 
              ? 'border border-white/20 backdrop-blur-xl bg-white shadow-[0_20px_40px_-15px_rgba(23,62,53,0.15)]' 
              : 'border border-transparent bg-transparent shadow-none'
            }
            ${mobileOpen ? 'bg-white/95 backdrop-blur-xl border-white/20 shadow-[0_20px_40px_-15px_rgba(23,62,53,0.15)]' : ''}
          `}
        >
          <div className="px-6 md:px-10 lg:px-12 flex items-center justify-between h-14 md:h-16">
            
            {/* Logo */}
            <a 
              onClick={handleLogoClick}
              className="flex items-center shrink-0 cursor-pointer"
            >
              <img src={logo} alt="troo.earth" className="h-7 md:h-9 w-auto transition-transform hover:scale-105" />
            </a>

            {/* Desktop Center Links */}
            <nav className="hidden lg:flex items-center justify-center flex-1 px-10">
              <div className="flex space-x-10">
                {NAV_ITEMS.map((item) => (
                  <HashLink
                    key={item.id}
                    to={`/#${item.id}`}
                    smooth
                    className="text-[14px] font-black uppercase tracking-[0.1em] transition-colors text-secondary/80 hover:text-primary whitespace-nowrap"
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </HashLink>
                ))}
              </div>
            </nav>

            {/* Right Button */}
            <div className="hidden xl:flex items-center shrink-0">
              <HashLink
                to="/marketplace"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-[11px] uppercase tracking-widest transition-all bg-primary-gradient text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 group"
              >
                <span>Marketplace</span>
                <ArrowUpRight 
                  size={16} 
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent" 
                />
              </HashLink>
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
                <HashLink
                  key={item.id}
                  to={`/#${item.id}`}
                  smooth
                  className="block text-xl font-black text-secondary hover:text-primary tracking-tighter"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </HashLink>
              ))}
              <div className="pt-6">
                <HashLink
                  to="/marketplace"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Marketplace
                  <ArrowUpRight size={18} />
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;