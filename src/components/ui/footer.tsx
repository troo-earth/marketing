import Insta from "/assets/insta.svg";
import XIcon from "/assets/x.svg";
import Linkedin from "/assets/linkedin.svg";
import FooterWaterMark from "/assets/footerwatermark.svg";

const Footer = () => {
  return (
    <footer className="w-full px-6 pb-10 pt-4 bg-main-gradient">
      <div className="w-full min-h-[300px] lg:max-h-[350px] rounded-[2.5rem] bg-primary-gradient-vertical text-white overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        
        {/* ✅ LEFT CONTENT AREA */}
        <div className="flex-1 px-8 md:px-12 py-10 flex flex-col">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            {/* ✅ Brand + Social Group */}
            <div className="space-y-6">
              <div className="flex flex-col">
                <p className="text-[50px] leading-tight font-black tracking-tighter">
                  troo<span className="text-accent">.</span><span className="font-light opacity-80">earth</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50 ml-1">
                  Moving the planet forward
                </p>
              </div>

              <div className="flex items-center gap-5 ml-1">
                {[
                  { src: Linkedin, alt: "LinkedIn" },
                  { src: Insta, alt: "Instagram" },
                  { src: XIcon, alt: "X" }
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent transition-all group"
                  >
                    <img
                      src={social.src}
                      alt={social.alt}
                      className="w-5 h-5 cursor-pointer group-hover:invert transition-all"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* ✅ Navigation - Professional Alignment */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4 pt-4">
              {['Business', 'Legal', 'Company', 'Community'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-sm font-black uppercase tracking-widest text-white/70 hover:text-accent transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* ✅ Divider - Tighter & Cleaner */}
          <div className="w-full h-px bg-white/10 mt-auto mb-8" />

          {/* ✅ Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] uppercase tracking-widest font-bold text-white/50">
            <p>© 2025 troo.earth</p>

            <div className="flex flex-wrap justify-center items-center gap-8">
              {["Contact Us", "Privacy Policy", "Terms & Conditions"].map((link) => (
                <span key={link} className="cursor-pointer hover:text-white transition-colors">
                  {link}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ RIGHT WATERMARK COLUMN */}
        <div className="hidden  lg:flex w-[280px]  items-end justify-center">
          {/* Sublte glow behind watermark */}
          <div className="absolute w-40 h-40 bg-accent/20 blur-[80px] -bottom-10" />
          <img
            src={FooterWaterMark}
            alt="Footer Watermark"
            className="w-full relative z-10 scale-110 origin-bottom opacity-100 pointer-events-none transition-transform duration-700 hover:scale-125"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/*
create a footer
dont change the colour, use the icon used as it is shown as a water mark
import Insta from "/assets/insta.svg";
import XIcon from "/assets/x.svg";
import Linkedin from "/assets/linkedin.svg";
import FooterWaterMark from "/assets/footerwatermark.svg";

const Footer = () => {
  return (
    <footer className="w-full  px-6 pb-10 pt-4">
<div className="w-full max-h-[301px] h-full rounded-3xl bg-primary-gradient-vertical text-white overflow-hidden flex">
        
        <div className="flex-1 px-12 py-10 flex flex-col justify-between">
          <div className="flex flex-col lg:flex-row justify-between gap-12 items-start">
            <div className="space-y-2">
              <p className="text-[50px] text-[#007473] font-bold">
                troo.<span className="font-normal">earth</span>
              </p>

              <div className="flex items-center justify-center gap-6">
                <img
                  src={Linkedin}
                  alt="LinkedIn"
                  className="w-5 h-5 cursor-pointer hover:opacity-80"
                />
                <img
                  src={Insta}
                  alt="Instagram"
                  className="w-5 h-5 cursor-pointer hover:opacity-80"
                />
                <img
                  src={XIcon}
                  alt="X"
                  className="w-5 h-5 cursor-pointer hover:opacity-80"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 text-base pt-6 lg:pt-10">
              <p className="font-semibold">Business</p>
              <p className="font-semibold">Legal</p>
              <p className="font-semibold">Company</p>
              <p className="font-semibold">Community</p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white/30 my-12" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm">
            <p className=" font-light">Copyrights @ 2025 - Troo</p>

            <div className="flex items-center gap-10 text-sm font-light ">
              <span className="cursor-pointer hover:underline">Contact Us</span>
              <span className="cursor-pointer hover:underline">
                Privacy Policy
              </span>
              <span className="cursor-pointer hover:underline">
                Terms & Conditions
              </span>
            </div>
          </div>
        </div>

        <div className="w-[215px] flex items-end justify-end ">
          <img
            src={FooterWaterMark}
            alt="Footer Watermark"
            className="w-full opacity-100 pointer-events-none"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer; */