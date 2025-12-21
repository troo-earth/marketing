import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[var(--background-image-main-gradient)] px-6 py-12 font-nunito">
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="w-full max-w-[440px] z-10">
        

        {/* Main Login Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(23,62,53,0.08)] border border-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-secondary">Welcome Back</h2>
            <p className="text-gray-500 text-sm mt-1 font-medium">
              Enter your credentials to access your impact
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-secondary/70 uppercase tracking-wider ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="w-full rounded-2xl border border-gray-100 bg-white px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold text-secondary/70 uppercase tracking-wider">
                  Password
                </label>
                <a href="#" className="text-xs font-bold text-primary hover:text-secondary transition-colors">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-gray-100 bg-white px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-2xl bg-primary-gradient p-px font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="relative bg-transparent py-4 px-6 flex items-center justify-center gap-2">
                <span>Sign In to Dashboard</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </form>

          {/* Social Divider */}
          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-100"></span>
            </div>
            <span className="relative bg-white px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
              Or
            </span>
          </div>

          <button className="w-full flex items-center justify-center gap-3 rounded-2xl border border-gray-100 py-3.5 px-6 font-bold text-secondary hover:bg-gray-50 transition-all duration-200">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
            <span>Continue with Google</span>
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 font-medium">
            New to Troo?{" "}
            <Link
              to="/signup"
              className="text-primary font-bold hover:underline decoration-accent decoration-2 underline-offset-4"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;