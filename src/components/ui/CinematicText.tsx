import { motion } from "framer-motion";

interface CinematicTextProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const CinematicText = ({ children, className = "", delay = 0 }: CinematicTextProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggeredText = ({ text, className = "" }: { text: string; className?: string }) => {
    const words = text.split(" ");

    return (
        <div className={`flex flex-wrap gap-x-2 ${className}`}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </div>
    );
};
