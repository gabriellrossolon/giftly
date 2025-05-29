import { FaGift } from "react-icons/fa";
import { motion } from "framer-motion";

const NUM_GIFTS = 20;

const random = (min: number, max: number) => Math.random() * (max - min) + min;

const FallingGifts = () => {
  const gifts = Array.from({ length: NUM_GIFTS });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {gifts.map((_, i) => {
        const delay = random(0, 5);
        const duration = random(4, 8);
        const left = `${random(0, 100)}%`;
        const size = `${random(20, 40)}px`;
        const rotation = random(0, 360);

        return (
          <motion.div
            key={i}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: "110vh", opacity: 1, rotate: rotation }}
            transition={{ delay, duration, repeat: Infinity, repeatType: "loop", ease: "linear" }}
            className="absolute"
            style={{ left, width: size, height: size, color: "#FF6F61" }}
          >
            <FaGift size="100%" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FallingGifts;
