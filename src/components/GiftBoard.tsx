import GiftCard from "./GiftCard";
import type { Gift } from "../types/Gift";

interface GiftBoardProps {
  gifts: Gift[];
  onToggleBought: (id: string) => void;
  onDelete: (id: string) => void;
}

const GiftBoard: React.FC<GiftBoardProps> = ({ gifts, onToggleBought, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-purple-400 rounded-xl md:col-span-2 p-4">
      {gifts.map((gift) => (
        <GiftCard key={gift.id} gift={gift} onToggleBought={onToggleBought} onDelete={onDelete}/>
      ))}
    </div>
  );
};

export default GiftBoard;
