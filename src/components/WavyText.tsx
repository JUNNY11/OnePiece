import { motion } from "framer-motion";

interface WavyTextProps {
  text: string;
  className?: string;
}

const WavyText = ({ text, className = "" }: WavyTextProps) => {
  return (
    <span className={`inline-flex ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          whileHover={{
            y: [-2, 2, -2],
            rotate: [-2, 2, -2],
            transition: { duration: 0.4, repeat: Infinity },
          }}
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.08,
            ease: "easeInOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default WavyText;
