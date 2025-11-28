import Insta from "../../public/assets/insta.svg";
import XIcon from "../../public/assets/x.svg";
import Linkedin from "../../public/assets/linkedin.svg";
import FooterWaterMark from "../../public/assets/footerwatermark.svg";

const Footer = () => {
  return (
    <footer className="w-full  px-6 pb-10 pt-4">
<div className="w-full max-h-[301px] h-full rounded-3xl bg-primary-gradient-vertical text-white overflow-hidden flex">
        {/* ✅ LEFT CONTENT AREA */}
        <div className="flex-1 px-12 py-10 flex flex-col justify-between">
          {/* ✅ Top Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 items-start">
            {/* ✅ Left Brand + Social */}
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

            {/* ✅ Right Navigation Groups — pushed DOWN properly */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 text-base pt-6 lg:pt-10">
              <p className="font-semibold">Business</p>
              <p className="font-semibold">Legal</p>
              <p className="font-semibold">Company</p>
              <p className="font-semibold">Community</p>
            </div>
          </div>

          {/* ✅ Divider ONLY under left content */}
          <div className="w-full h-[1px] bg-white/30 my-12" />

          {/* ✅ Bottom Bar */}
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

        {/* ✅ RIGHT WATERMARK COLUMN (PURE, NO TEXT, NO DIVIDER) */}
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

export default Footer;
