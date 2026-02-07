// src/components/Navbar.tsx
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/mainLogo.svg';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const NAV_ITEMS = [
    { 
      label: "Products", 
      isDropdown: true,
      children: [
        { label: "Troo Atlas", href: "https://atlas.troo.earth", tag: "Simulation", isExternal: true },
        { label: "Troo Offset", tag: "Coming Soon", isComingSoon: true }
      ]
    },
    { label: "What We Do", id: "what-we-do" },
    { label: "Opportunity", id: "market-dynamics" },
    { label: "Meet the Team", id: "meet-the-team" },
    { label: "Contact Us", id: "contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (id?: string) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    
    if (id && location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <style>{`
        @media (max-height: 700px) {
          .nav-container { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
          .mobile-menu-content { max-height: 75vh !important; padding-top: 1rem !important; padding-bottom: 1rem !important; }
          .mobile-menu-item { font-size: 1.125rem !important; margin-bottom: 0.5rem !important; }
          .product-section { padding-bottom: 0.75rem !important; margin-bottom: 0.75rem !important; }
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 md:p-6 pointer-events-none">
        <div className={`
          w-full max-w-[1600px] pointer-events-auto transition-all duration-500 ease-in-out
          rounded-[1.5rem] md:rounded-[2rem] py-2 nav-container
          ${isScrolled || mobileOpen 
            ? 'border border-white/20 backdrop-blur-xl bg-white shadow-[0_20px_40px_-15px_rgba(23,62,53,0.15)]' 
            : 'border border-transparent bg-transparent shadow-none'
          }
        `}>
          <div className="px-6 md:px-10 flex items-center justify-between h-12 md:h-16">
            
            {/* Logo */}
            <a onClick={() => location.pathname === '/' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : navigate('/')} className="flex items-center shrink-0 cursor-pointer">
              <img src={logo} alt="troo.earth" className="h-6 md:h-8 w-auto transition-transform hover:scale-105" />
            </a>

            {/* Desktop Center Links - Hidden until XL (Desktop) */}
            <nav className="hidden xl:flex items-center justify-center flex-1 px-10">
              <div className="flex items-center space-x-8">
                {NAV_ITEMS.map((item) => (
                  item.isDropdown ? (
                    <div key={item.label} className="relative" ref={dropdownRef}>
                      <button 
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center gap-1 text-[13px] font-black uppercase tracking-[0.1em] text-secondary/80 hover:text-primary transition-colors"
                      >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className={`absolute top-full left-0 mt-4 w-64 bg-white rounded-2xl border border-secondary/5 shadow-xl transition-all duration-300 ${dropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                        <div className="p-2">
                          {item.children?.map((child) => (
                            child.isComingSoon ? (
                              <div key={child.label} className="flex items-center justify-between px-4 py-3 rounded-xl opacity-50 cursor-not-allowed">
                                <span className="text-sm font-bold text-secondary">{child.label}</span>
                                <span className="text-[10px] font-black uppercase tracking-tighter text-secondary/40">{child.tag}</span>
                              </div>
                            ) : (
                              <a 
                                key={child.label} 
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-secondary/5 transition-colors group"
                              >
                                <span className="text-sm font-bold text-secondary group-hover:text-primary">{child.label}</span>
                                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-accent/10 text-accent">{child.tag}</span>
                              </a>
                            )
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <HashLink
                      key={item.id}
                      to={`/#${item.id}`}
                      smooth
                      className="text-[13px] font-black uppercase tracking-[0.1em] transition-colors text-secondary/80 hover:text-primary whitespace-nowrap"
                      onClick={() => handleNavClick(item.id)}
                    >
                      {item.label}
                    </HashLink>
                  )
                ))}
              </div>
            </nav>

            {/* Right Button - Also Hidden until XL */}
            <div className="hidden xl:flex items-center shrink-0">
              <a
                href="https://atlas.troo.earth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-[11px] uppercase tracking-widest transition-all bg-primary-gradient text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 group"
              >
                <span>Explore Atlas</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent" />
              </a>
            </div>

            {/* Mobile Menu Button - Shown until XL (covers iPad Pro) */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="xl:hidden p-2 text-secondary">
              <div className="w-7 flex flex-col items-end gap-1.5">
                <span className={`h-0.5 bg-current transition-all ${mobileOpen ? 'w-7 rotate-45 translate-y-2' : 'w-7'}`} />
                <span className={`h-0.5 bg-current transition-all ${mobileOpen ? 'opacity-0' : 'w-5'}`} />
                <span className={`h-0.5 bg-current transition-all ${mobileOpen ? 'w-7 -rotate-45 -translate-y-2' : 'w-7'}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu Content - Scrollable for Nest Hub */}
          <div className={`xl:hidden transition-all duration-300 overflow-y-auto mobile-menu-content ${
            mobileOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-10 py-8 space-y-4 text-center border-t border-secondary/5">
              {/* Products Section */}
              <div className="space-y-4 pb-4 border-b border-secondary/5 product-section">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40">Products</p>
                <a href="https://atlas.troo.earth" className="block text-xl font-black text-primary mobile-menu-item">
                  Troo Atlas <span className="text-[10px] align-middle ml-2 px-2 py-0.5 rounded-full bg-accent/10 text-accent">Simulation</span>
                </a>
                <p className="text-xl font-black text-secondary/30 mobile-menu-item">
                  Troo Offset <span className="text-[10px] align-middle ml-2 font-normal italic">Coming Soon</span>
                </p>
              </div>
              
              {NAV_ITEMS.filter(i => !i.isDropdown).map((item) => (
                <HashLink
                  key={item.id}
                  to={`/#${item.id}`}
                  smooth
                  className="block text-xl font-black text-secondary hover:text-primary tracking-tighter mobile-menu-item"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </HashLink>
              ))}

              <div className="pt-4 flex items-center justify-center">
                <a href="https://atlas.troo.earth" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full max-w-md bg-primary text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm">
                  Explore Atlas <ArrowUpRight size={18} />
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