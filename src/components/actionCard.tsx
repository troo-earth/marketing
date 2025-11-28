import Troo from "../../public/assets/troobg.svg?url";

interface CarbonActionCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const CarbonActionCard = ({
  title,
  subtitle,
  description,
  icon,
}: CarbonActionCardProps) => {
  return (
    <div className="w-[270px] h-[312px] bg-primary rounded-2xl relative py-6 pl-6 pr-4 flex flex-col shadow-lg overflow-hidden">
      {/* ✅ Decorative Background Image (Bottom Right) */}
      <img
        src={Troo}
        alt="decorative"
        className="absolute bottom-0 right-0 w-[140px] pointer-events-none z-0"
      />

      {/* Top Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[6px] bg-accent rounded-b-lg z-10" />

      {/* ✅ ICON + TITLE ROW (SIDE BY SIDE) */}
      <div className="flex items-center gap-4 relative z-10">
        {/* Icon */}
        <div className="text-white text-3xl flex-shrink-0">{icon}</div>

        {/* Title + Subtitle */}
        <div className="pl-12">
          <h3 className="text-white font-black text-xl leading-tight text-right">
            {title}
          </h3>
          <p className="text-white text-xs tracking-wide opacity-90">
            {subtitle}
          </p>
        </div>
      </div>

      {/* ✅ Description anchored at bottom */}
      <p className="mt-20 pt-16 text-white text-lg font-semibold leading-[20px] relative z-10">
        {description}
      </p>
    </div>
  );
};

export default CarbonActionCard;
