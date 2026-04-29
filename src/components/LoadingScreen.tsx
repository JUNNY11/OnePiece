import { motion, AnimatePresence } from "framer-motion";
import goingMerry from "@/assets/going-merry.png";

interface LoadingScreenProps {
  isLoading: boolean;
  onComplete: () => void;
}

const LoadingScreen = ({ isLoading, onComplete }: LoadingScreenProps) => {
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Ocean waves background */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-32 rounded-[50%]"
                style={{
                  background: `linear-gradient(180deg, transparent, hsl(210 90% ${15 + i * 5}% / ${0.3 - i * 0.05}))`,
                  bottom: `${i * 40}px`,
                  left: '-10%',
                  width: '120%',
                }}
                animate={{
                  x: [0, 30, 0, -30, 0],
                  y: [0, -10, 0, -10, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {/* Title */}
          <motion.div
            className="relative z-10 mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <h1 className="font-cursed text-3xl md:text-5xl text-glow-purple">
              <span className="text-primary text-4xl md:text-6xl">O</span>NE PIECE
            </h1>
            <p className="font-heading text-sm md:text-lg text-gold tracking-[0.3em] mt-2">.PROJECT - RP</p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="relative z-10 mt-10 w-64 h-1 bg-muted rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              onAnimationComplete={() => {
                setTimeout(onComplete, 300);
              }}
            />
          </motion.div>
          <motion.p
            className="relative z-10 mt-3 text-muted-foreground text-sm font-body tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          >
            Zarpando para a aventura...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
