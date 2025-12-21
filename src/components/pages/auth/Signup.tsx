import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Leaf, ShieldCheck, Sparkles } from "lucide-react";

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[var(--background-image-main-gradient)] px-6 py-12 font-nunito">
      {/* Dynamic Background Accents */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-[5%] right-[-5%] w-[450px] h-[450px] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="w-full max-w-[480px] z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            <span>Start your journey</span>
          </div>
          <h1 className="text-4xl font-black text-secondary tracking-tight">
            Create your <span className="text-primary-gradient">Troo</span> account
          </h1>
          <p className="text-gray-500 mt-3 font-medium">
            Join thousands making a real impact on the planet.
          </p>
        </div>

        {/* Signup Card */}
        <div className="bg-white/70 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_25px_60px_rgba(23,62,53,0.1)] border border-white/50">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            
            {/* Full Name Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-secondary/70 uppercase tracking-wider ml-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-2xl border border-gray-100 bg-white px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-secondary/70 uppercase tracking-wider ml-1">
                Work Email
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                className="w-full rounded-2xl border border-gray-100 bg-white px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-secondary/70 uppercase tracking-wider ml-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className="w-full rounded-2xl border border-gray-100 bg-white px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="text-[10px] text-gray-400 ml-1">Must be at least 8 characters long.</p>
            </div>

            {/* Terms Consent */}
            <div className="flex items-start gap-3 py-2">
              <input 
                type="checkbox" 
                className="mt-1 rounded border-gray-300 text-primary focus:ring-primary accent-primary" 
                id="terms"
              />
              <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed">
                I agree to the <a href="#" className="text-secondary font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-secondary font-bold hover:underline">Privacy Policy</a>.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-primary-gradient py-4 font-bold text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Create Free Account</span>
              <Leaf size={18} className="group-hover:rotate-12 transition-transform" />
            </button>
          </form>

          {/* Alternative Signup */}
          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-100"></span>
            </div>
            <span className="relative bg-white/0 px-4 text-xs font-bold text-gray-400 uppercase tracking-widest backdrop-blur-sm">
              Or join with
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-100 bg-white/50 py-3 px-4 font-bold text-secondary hover:bg-white transition-all duration-200 text-sm">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-100 bg-white/50 py-3 px-4 font-bold text-secondary hover:bg-white transition-all duration-200 text-sm">
              <img src="https://www.svgrepo.com/show/448234/linkedin.svg" className="w-4 h-4" alt="LinkedIn" />
              LinkedIn
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center flex flex-col items-center gap-4">
          <p className="text-gray-500 font-medium">
            Already have an account?{" "}
            <Link to="/login" className="text-primary-gradient font-black hover:opacity-80 transition-opacity">
              Log in
            </Link>
          </p>
          <div className="flex items-center gap-2 text-secondary/40 text-[10px] font-bold uppercase tracking-tighter">
            <ShieldCheck size={12} />
            <span>Secure, encrypted & carbon-neutral</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;