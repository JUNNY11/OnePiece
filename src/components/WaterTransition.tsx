import { motion, AnimatePresence } from "framer-motion";

interface WaterTransitionProps {
  isAnimating: boolean;
}

const WaterTransition = ({ isAnimating }: WaterTransitionProps) => {
  return (
    <AnimatePresence>
      {isAnimating && (
        <div className="fixed inset-0 z-[9998] pointer-events-none">
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, hsl(220 80% 15%) 0%, hsl(210 90% 25%) 50%, hsl(220 80% 15%) 100%)",
            }}
            initial={{ y: "100%" }}
            animate={{ y: ["100%", "0%", "0%", "-100%"] }}
            transition={{ duration: 1.2, times: [0, 0.4, 0.6, 1], ease: "easeInOut" }}
          />
          {/* Bubbles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-foreground/10"
              style={{
                width: Math.random() * 20 + 5,
                height: Math.random() * 20 + 5,
                left: `${Math.random() * 100}%`,
                background: `hsl(210 90% 60% / ${Math.random() * 0.3})`,
              }}
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: "-100vh", opacity: [0, 1, 0] }}
              transition={{ duration: 1.2, delay: Math.random() * 0.5, ease: "easeInOut" }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default WaterTransition;
