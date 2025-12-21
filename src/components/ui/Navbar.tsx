// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/mainLogo.svg'; // Update the path as necessary  

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent ${scrolled ? 'backdrop-blur-lg bg-white/95' : ''}`}
      >
        <div className="px-10">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a href="/" className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
              {/* Or text logo */}
              {/* <span className={`font-bold text-2xl ${scrolled ? 'text-gray-900' : 'text-white'}`}>MyApp</span> */}
            </a>

            {/* Desktop Center Links */}
            <nav className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex space-x-10">
                {['Solutions', 'Pricing', 'Contact', 'Company'].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className={`font-medium transition-colors ${scrolled
                        ? 'text-secondary hover:text-primary'
                        : 'text-secondary hover:text-primary'
                      }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </nav>

            {/* Right Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className={`font-medium transition-colors ${scrolled
                    ? 'text-gray-600 hover:text-gray-900'
                    : 'text-secondary hover:text-primary'
                  }`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`px-6 py-2.5 rounded-3xl font-semibold transition-all ${scrolled
                    ? 'bg-primary hover:bg-secondary text-white'
                    : 'bg-primary hover:bg-secondary text-white'
                  }`}
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-secondary'
                }`}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className={`lg:hidden absolute top-full left-0 right-0 ${scrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-lg'} shadow-xl border-t`}>
            <div className="px-6 py-6 space-y-4">
              {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg font-medium text-secondary hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 space-y-3 border-t">
                <Link to="/login" className="block text-secondary font-medium hover:text-primary">Login</Link>
                <Link
                  to="/signup"
                  className="block text-center bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 hover:shadow-lg"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;