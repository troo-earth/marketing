
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/assets/TE_Logo.svg" 
              alt="Logo" 
              className="h-8"
            />
          </div>

          {/* Navigation Links - Centered */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center space-x-8">
              <a
                href="#solutions"
                className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
              >
                Solutions
              </a>
              <a
                href="#resources"
                className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
              >
                Resources
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
              >
                Contact
              </a>
              <a
                href="#company"
                className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
              >
                Company
              </a>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex-shrink-0 flex items-center space-x-4">
            <button className="text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200">
              Login
            </button>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
              Sign Up
            </button>
          </div>
        </div>
      </div>

        </nav>
  );
}