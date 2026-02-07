// src/components/LandingPage.tsx
import { useEffect, useRef } from "react";
import { ArrowRight, Globe } from "lucide-react";

// --- UNIQUE CARBON FLOW ANIMATION ---
const CarbonFlowCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    class FlowParticle {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      size: number;
      opacity: number;
      speed: number;
      color: string;
      trail: { x: number; y: number }[];

      constructor(canvas: HTMLCanvasElement) {
        this.x = -20;
        this.y = Math.random() * canvas.height;
        this.targetX = canvas.width + 20;
        this.targetY = canvas.height * 0.5 + (Math.random() - 0.5) * canvas.height * 0.6;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.speed = Math.random() * 3.0 + 2.0;
        const colors = ['#007473', '#173E35', '#FFB71B'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.trail = [];
      }

      update(canvas: HTMLCanvasElement) {
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > 12) {
          this.trail.shift();
        }

        const progress = this.x / canvas.width;
        this.x += this.speed;
        this.y += Math.sin(progress * Math.PI * 3) * 0.5;

        if (this.x > canvas.width + 20) {
          this.x = -20;
          this.y = Math.random() * canvas.height;
          this.targetY = canvas.height * 0.5 + (Math.random() - 0.5) * canvas.height * 0.6;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        );
        gradient.addColorStop(0, `${this.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${this.color}00`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let particles: FlowParticle[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth || window.innerWidth;
      canvas.height = canvas.offsetHeight || window.innerHeight;
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push(new FlowParticle(canvas));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update(canvas);
        particle.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 150);
    };

    window.addEventListener("resize", handleResize);
    resize();
    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full opacity-40" />;
};

const LandingPage = () => {
  return (
    <div className="relative min-h-screen xl:h-screen w-full bg-[var(--background-image-main-gradient)] font-nunito overflow-hidden flex flex-col items-center">
      
      {/* --- BRANDED ATMOSPHERIC LAYER --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px]" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[5%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Animated Carbon Flow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <CarbonFlowCanvas />
      </div>

      <div className="relative z-10 w-full max-w-7xl h-screen flex flex-col justify-between px-6 pt-32 pb-24 md:py-16 lg:pb-20 lg:pt-32">
        
        {/* --- HERO CONTENT --- */}
        <section className="flex flex-col items-center justify-center text-center flex-grow">
          
          <h1 className="text-secondary font-black text-[50px] sm:text-[60px] md:text-[80px] lg:text-[80px] xl:text-[95px] leading-[0.9] tracking-tighter mb-8 max-w-5xl">
            Turning Commitments <br />
            <span className="text-primary-gradient italic">into Action.</span>
          </h1>

          <p className="text-secondary/70 font-medium text-base md:text-[24px] xl:text-xl max-w-3xl leading-relaxed mb-10">
            troo.earth is the infrastructure for a regenerative future. 
            We provide the ecosystem for seamless climate capital deployment, 
            bridging high-integrity projects with scalable corporate and consumer solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-10">
            <a 
              href="https://atlas.troo.earth"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center gap-4 overflow-hidden"
            >
              <span className="relative z-10">Explore Atlas</span>
              <ArrowRight size={20} className="relative z-10 text-accent group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-secondary/10 flex items-center justify-center bg-white/20">
                <Globe className="text-primary animate-spin-slow" size={20} />
              </div>
              <div className="text-left">
                <p className="text-secondary font-black text-2xl tracking-tighter leading-none">USD 4.73T</p>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/60 mt-1">Market Scale by 2030</p>
              </div>
            </div>
          </div>
        </section>
        
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;