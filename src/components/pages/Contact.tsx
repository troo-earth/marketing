import { useState } from "react";
import troowhite from "/assets/trooearthwhite.svg";
import { CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show toast
    setShowToast(true);
    
    // Clear form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: ""
    });
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-us" className="w-full h-auto flex items-center justify-center py-12 sm:py-16 md:py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[var(--background-image-main-gradient)]">
      
      {/* Toast Notification */}
      <div 
        className={`fixed top-24 right-6 z-[100] transition-all duration-500 ${
          showToast 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-primary/20 px-6 py-4 flex items-center gap-3 backdrop-blur-xl">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle2 className="text-primary" size={20} />
          </div>
          <div>
            <p className="font-bold text-secondary text-sm">Message Sent!</p>
            <p className="text-gray-500 text-xs">We'll get back to you soon.</p>
          </div>
        </div>
      </div>

      {/* --- BRANDED BACKGROUND ELEMENTS (POP OF COLOUR) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-Right: Warm Accent Pop */}
        <div className="absolute top-[-10%] right-[10%] w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-pulse" />
        
        {/* Bottom-Left: Strong Primary Teal Pop */}
        <div className="absolute bottom-[5%] left-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        
        {/* Center-Right: Soft Primary Glow behind the form */}
        <div className="absolute top-[40%] right-[-5%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px]" />
        
        {/* Signature Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-[1192px] bg-white rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_50px_100px_-20px_rgba(23,62,53,0.15)] border border-white/50 backdrop-blur-sm">
        
        {/* LEFT PANEL */}
        <div className="relative w-full lg:w-[42%] bg-primary-gradient-vertical text-white p-10 md:p-16 flex flex-col justify-between overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:30px_30px]" />
          
          {/* Logo */}
          <div className="relative z-10 pb-5 xl:pb-0 flex items-center justify-center lg:justify-start">
            <img
              src={troowhite}
              alt="troo.earth logo"
              className="h-8 xl:h-12 w-auto object-contain transition-transform hover:scale-105"
            />
          </div>

          {/* Message */}
          <div className="relative z-10">
            <p className="text-[20px] font-medium text-center lg:text-left leading-relaxed opacity-90">
              Let's talk. Whether you need help, insights, or next steps, we're
              just a message away.
            </p>
          </div>

          {/* Bottom Branding Detail */}
          <div className="relative z-10 hidden lg:block">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
              Moving the planet forward
            </p>
          </div>

          {/* Yellow Notch - Flush with the seam */}
          <div className="absolute right-0 top-1/4 w-[6px] h-[80px] bg-accent rounded-l-full shadow-[0_0_20px_rgba(255,183,27,0.4)]" />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-[58%] bg-white p-10 md:p-16 relative">
          <div className="max-w-xl mx-auto">
            <h3 className="text-secondary font-black text-[35px] mb-10 tracking-tighter leading-none">
              Get In Touch
            </h3>

            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full border-0 border-b border-secondary/20 bg-transparent text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-primary py-2 transition-colors"
                    required
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-focus-within:w-full" />
                </div>
                <div className="relative group">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full border-0 border-b border-secondary/20 bg-transparent text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-primary py-2 transition-colors"
                    required
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-focus-within:w-full" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border-0 border-b border-secondary/20 bg-transparent text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-primary py-2 transition-colors"
                  required
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-focus-within:w-full" />
              </div>

              {/* Row 3 */}
              <div className="relative group">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full border-0 border-b border-secondary/20 bg-transparent text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-primary py-2 transition-colors"
                  required
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-focus-within:w-full" />
              </div>

              {/* Message/Query Textbox */}
              <div className="relative group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={3}
                  className="w-full border-0 border-b border-secondary/20 bg-transparent text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-primary py-2 transition-colors resize-none"
                  required
                />
                <div className="absolute bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-focus-within:w-full" />
              </div>

              {/* Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-primary text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95"
                >
                  Send Message
                  <span className="text-xl leading-none">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;