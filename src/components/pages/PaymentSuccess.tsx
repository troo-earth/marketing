// src/pages/PaymentSuccessPage.tsx
import { motion } from 'framer-motion';

// Reusing the CheckIcon style from the pricing page for consistency
const CheckIconSmall = () => (
  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#007473]/10 flex items-center justify-center mb-3">
    <svg className="w-5 h-5 text-[#007473]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 100,        // Keeps the same feel
      damping: 15,        // Optional: add if you want to fine-tune (default is good)
    },
  },
};

const PaymentSuccessPage = () => {
  return (
    // UPDATED: Main background now matches your '--background-image-main-gradient'
    // Linear gradient to top: #80b9b9 (at bottom) to #FFFFFF (at top)
    // We use h-screen and overflow-hidden to prevent scroll
    <div className="h-screen w-full relative overflow-hidden flex items-center justify-center">

      {/* --- Animated Background Elements (Ambient Blobs) --- */}
      
      {/* BLOB 1: Top Left - FORCED to #007473 with opacity */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.15, 0.25, 0.15], // Lower opacity for subtle effect
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#007473] rounded-full blur-[120px] pointer-events-none"
      />
      
      {/* BLOB 2: Bottom Right - FORCED to #007473 */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 100, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#007473] rounded-full blur-[150px] pointer-events-none"
      />


      {/* --- Main Content Container --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl px-6 h-full justify-center"
      >

        {/* 1. The Hero Success Animation */}
        <motion.div variants={itemVariants} className="relative mb-8">
          {/* A subtle bursting ring effect - using your Brand Teal */}
          <motion.div
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="absolute inset-0 bg-[#007473]/20 rounded-full"
          />
          
          {/* The main check circle */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 200 }}
            // Gradient from your Accent to Primary or just Primary
            className="w-32 h-32 bg-gradient-to-tr from-[#007473] to-[#173E35] rounded-full flex items-center justify-center shadow-xl shadow-[#007473]/20 relative z-10"
          >
            <svg className="w-20 h-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>
        </motion.div>


        {/* 2. Text Content */}
        {/* Forced text-[#007473] to ensure exact match */}
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl font-extrabold text-[#007473] mb-4 tracking-tight">
          Payment Successful!
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl text-[#173E35] max-w-2xl mx-auto mb-12 leading-relaxed">
          Welcome aboard. Your Enterprise Plan is officially active. <br className="hidden md:block"/> You now have unlimited access to the platform.
        </motion.p>


        {/* 3. Refined Feature Pillars */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16"
        >
            {/* Feature 1 */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#007473]/10 shadow-lg shadow-[#007473]/5 flex flex-col items-center transition-transform hover:-translate-y-1">
                <CheckIconSmall />
                <h3 className="text-[#173E35] font-bold mb-2">Unlimited Tracking</h3>
                <p className="text-[#173E35]/70 text-sm">Full access to carbon credit monitoring tools.</p>
            </div>
             {/* Feature 2 */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#007473]/10 shadow-lg shadow-[#007473]/5 flex flex-col items-center transition-transform hover:-translate-y-1">
                <CheckIconSmall />
                <h3 className="text-[#173E35] font-bold mb-2">Real-time Dashboard</h3>
                <p className="text-[#173E35]/70 text-sm">Live transparency and analytics suite.</p>
            </div>
             {/* Feature 3 */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#007473]/10 shadow-lg shadow-[#007473]/5 flex flex-col items-center transition-transform hover:-translate-y-1">
                <CheckIconSmall />
                <h3 className="text-[#173E35] font-bold mb-2">Priority Support</h3>
                <p className="text-[#173E35]/70 text-sm">Direct access to our integration specialists.</p>
            </div>
        </motion.div>


        {/* 4. CTA Button & Footer */}
        <motion.div variants={itemVariants} className="flex flex-col items-center space-y-6">
          <motion.a
            href="/dashboard"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 116, 115, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center px-12 py-4 bg-[#007473] text-white text-xl font-bold rounded-full overflow-hidden shadow-xl shadow-[#007473]/20 transition-all hover:bg-[#173E35]"
          >
             <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
             <span className="relative flex items-center gap-2">
                Go to Dashboard 
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
             </span>
          </motion.a>

          <p className="text-[#173E35]/60 text-sm font-medium">
            Thank you for powering climate impact with troo.earth
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default PaymentSuccessPage;