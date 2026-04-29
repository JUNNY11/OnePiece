import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const InteractiveCard = ({ children, className = "", onClick }: InteractiveCardProps) => {
  return (
    <motion.div
      className={`relative bg-card border-glow rounded-lg p-6 cursor-pointer overflow-hidden group ${className}`}
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 box-glow-purple rounded-lg" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default InteractiveCard;
