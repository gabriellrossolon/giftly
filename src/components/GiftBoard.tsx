import { motion } from "framer-motion";
import GiftCard from "./GiftCard";
import type { Gift } from "../types/Gift";

interface GiftBoardProps {
  gifts: Gift[];
  onToggleBought: (id: string) => void;
  onDelete: (id: string) => void;
}

const GiftBoard: React.FC<GiftBoardProps> = ({
  gifts,
  onToggleBought,
  onDelete,
}) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-3 rounded-xl md:col-span-2 p-6
      shadow-xl shadow-black/20 bg-amber-100/30 backdrop-blur
      "
    >
      {gifts.map((gift) => (
        <motion.div
          key={gift.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          layout
        >
          <GiftCard
            gift={gift}
            onToggleBought={onToggleBought}
            onDelete={onDelete}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default GiftBoard;
