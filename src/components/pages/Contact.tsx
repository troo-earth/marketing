import ForestBg from "../../../public/assets/forestbg.jpg";
import troowhite from "../../../public/assets/trooearthwhite.svg";

const Contact = () => {
  return (
    <section
      className="w-full h-screen flex items-center justify-center px-4 py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${ForestBg})` }}
    >
      {/* Main Card */}
      <div className="relative w-full max-w-[1192px] bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        {/* LEFT PANEL */}
        <div className="relative w-full lg:w-[45%] bg-primary-gradient-vertical text-white p-12 flex flex-col justify-between">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img
              src={troowhite}
              alt="troo.earth logo"
              className="h-14 w-auto object-contain"
            />
          </div>

          {/* Message */}
          <p className="mx-auto text-[20px] font-medium text-center leading-relaxed ">
            Let’s talk. Whether you need help, insights, or next steps, we’re
            just a message away.
          </p>
          {/* ✅ Yellow Notch — 100% Inside Green */}
          {/* ✅ Half-Visible Yellow Notch — NO GAP, Seam Flush */}
          <div
            className="
    absolute
    right-[-3px]
    top-10
    w-[7px]
    h-[76px]
    bg-accent
    rounded-full
  "
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-[55%] bg-white p-10 relative">
          {/* Yellow Vertical Notch */}

          <h3 className="text-[#2F4F4F] font-semibold text-[35px] mb-10">
            Get In Touch
          </h3>

          <form className="space-y-8">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border-0 border-b border-[#2F4F4F]/50 text-[#2F4F4F] placeholder:text-[#2F4F4F]/50 focus:outline-none focus:border-[#2F4F4F] py-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border-0 border-b border-[#2F4F4F]/50 text-[#2F4F4F] placeholder:text-[#2F4F4F]/50 focus:outline-none focus:border-[#2F4F4F] py-2"
              />
            </div>

            {/* Row 2 */}
            <input
              type="email"
              placeholder="Email"
              className="w-full border-0 border-b border-[#2F4F4F]/50 text-[#2F4F4F] placeholder:text-[#2F4F4F]/50 focus:outline-none focus:border-[#2F4F4F] py-2"
            />

            {/* Row 3 */}
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border-0 border-b border-[#2F4F4F]/50 text-[#2F4F4F] placeholder:text-[#2F4F4F]/50 focus:outline-none focus:border-[#2F4F4F] py-2"
            />

            {/* Row 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Country"
                className="w-full border-0 border-b border-[#2F4F4F]/50 text-[#2F4F4F] placeholder:text-[#2F4F4F]/50 focus:outline-none focus:border-[#2F4F4F] py-2"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full border-0 border-b border-[#2F4F4F]/50 text-[#2F4F4F] placeholder:text-[#2F4F4F]/50 focus:outline-none focus:border-[#2F4F4F] py-2"
              />
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-primary text-white px-8 py-3 rounded-[30px] font-semibold flex items-center gap-2 hover:opacity-90 transition"
              >
                Contact Us
                <span>→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
