import { useState } from "react";
import { CheckCircle2, Mail, Globe, ArrowRight } from "lucide-react";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
    _gotcha: "" // Honeypot field for bot protection
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formId = import.meta.env.VITE_FORMSPREE_ID;
    try {
      // REPLACE 'YOUR_FORM_ID' with the ID provided by Formspree
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowToast(true);
        setFormData({ firstName: "", lastName: "", email: "", company: "", message: "", _gotcha: "" });
        setTimeout(() => setShowToast(false), 3000);
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      alert("Connectivity error. Please check your network.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact-us" className="w-full min-h-screen relative flex items-center justify-center py-20 px-6 md:px-12 lg:px-20 xl:px-24 bg-[var(--background-image-main-gradient)] font-nunito overflow-hidden">
      
      {/* Toast Notification */}
      <div className={`fixed top-24 right-6 z-[100] transition-all duration-500 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="bg-white rounded-2xl shadow-2xl border border-primary/20 px-6 py-4 flex items-center gap-3 backdrop-blur-xl">
          <CheckCircle2 className="text-primary" size={20} />
          <div>
            <p className="font-black text-secondary text-sm">Message Received</p>
            <p className="text-gray-500 text-xs font-medium">Our team will respond shortly.</p>
          </div>
        </div>
      </div>

      {/* --- ATMOSPHERIC ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center lg:items-stretch text-center lg:text-left">
          
          {/* LEFT: BRAND INFO */}
          <div className="w-full lg:w-[40%] flex flex-col justify-between items-center lg:items-start">
            <div className="flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 border border-primary/5 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Global Inquiries</span>
              </div>
              
              <h2 className="text-secondary font-black text-[38px] md:text-[50px] xl:text-[64px] leading-[1.05] tracking-tighter mb-8">
                Ready to scale <br />
                <span className="text-primary-gradient italic tracking-normal inline-block pr-3">your impact?</span>
              </h2>
              
              <p className="text-gray-500 font-medium text-lg lg:text-xl leading-relaxed max-w-md mx-auto lg:mx-0">
                Connect with our infrastructure specialists to deploy verified carbon solutions for your organization.
              </p>
            </div>

            <div className="mt-12 space-y-6 w-full max-w-sm lg:max-w-none">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-xl group hover:bg-white/60 transition-all text-left">
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/10 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Email Access</p>
                  <p className="text-secondary font-black text-sm">partnerships@troo.earth</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-xl group hover:bg-white/60 transition-all text-left">
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shrink-0">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Global Support Network</p>
                  <p className="text-secondary font-black text-sm">Replies Delivered Within 24 Hours </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: THE FORM */}
          <div className="w-full lg:w-[60%] flex justify-center">
            <div className="relative w-full max-w-[800px] p-8 md:p-12 lg:p-16 rounded-[3rem] bg-white/40 backdrop-blur-2xl border border-white/80 shadow-[0_40px_80px_-20px_rgba(23,62,53,0.12)] text-left">
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(circle_at_center,_#173E35_1px,_transparent_1px)] bg-[size:40px_40px] rounded-[3rem]" />
              
              <div className="relative z-10">
                <h3 className="text-secondary font-black text-2xl md:text-3xl tracking-tighter mb-10">Get in touch</h3>

                <form className="space-y-10" onSubmit={handleSubmit}>
                  {/* Honeypot field - Invisible to users */}
                  <input 
                    type="text" 
                    name="_gotcha" 
                    value={formData._gotcha} 
                    onChange={handleChange} 
                    style={{ display: "none" }} 
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="relative group">
                      <label className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 block">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border-0 border-b border-secondary/10 bg-transparent text-secondary placeholder:text-secondary/20 focus:outline-none focus:border-primary py-2 transition-all"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="relative group">
                      <label className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 block">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border-0 border-b border-secondary/10 bg-transparent text-secondary placeholder:text-secondary/20 focus:outline-none focus:border-primary py-2 transition-all"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 block">Enterprise Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-0 border-b border-secondary/10 bg-transparent text-secondary placeholder:text-secondary/20 focus:outline-none focus:border-primary py-2 transition-all"
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <div className="relative group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 block">Message / Inquiry</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full border-0 border-b border-secondary/10 bg-transparent text-secondary placeholder:text-secondary/20 focus:outline-none focus:border-primary py-2 transition-all resize-none"
                      placeholder="How can we assist your sustainability goals?"
                      required
                    />
                  </div>

                  <div className="pt-6 flex justify-center lg:justify-start">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full sm:w-auto flex items-center justify-center gap-4 bg-primary text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl shadow-primary/20 hover:bg-secondary transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;