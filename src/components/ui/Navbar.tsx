// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import logo from '../../assets/mainLogo.svg';
import { ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const NAV_ITEMS = [
  { label: "What We Do", id: "what-we-do" },
  { label: "Opportunity", id: "market-dynamics" },
  { label: "Meet the Team", id: "meet-the-team" },
  { label: "Contact Us", id: "contact-us" },
];


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent ${
          scrolled ? 'backdrop-blur-lg bg-white/95 shadow-sm' : ''
        }`}
      >
        <div className="px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </a>

            {/* Desktop Center Links */}
            <nav className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex space-x-10">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="font-medium transition-colors text-secondary hover:text-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* Right Button: Marketplace Replacement */}
            <div className="hidden md:flex items-center">
  <a
    href="/marketplace"
    className="flex items-center gap-2 px-7 py-2.5 rounded-3xl font-bold transition-all bg-primary-gradient text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 group"
  >
    <span>Marketplace</span>
    {/* ArrowUpRight is more "forward-moving" and fits a tech brand better */}
    <ArrowUpRight 
      size={18} 
      className=" transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
    />
  </a>
</div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                scrolled ? 'text-gray-700' : 'text-secondary'
              }`}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileOpen ? "M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className={`lg:hidden absolute top-full left-0 right-0 ${scrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-lg'} shadow-xl border-t`}>
            <div className="px-6 py-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-lg font-medium text-secondary hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t">
                <a
                  href="/marketplace"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-xl font-bold hover:shadow-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  Marketplace
                  <ArrowUpRight 
      size={18} 
      className=" transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
    />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;