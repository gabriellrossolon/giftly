import type { Gift } from "../types/Gift";
import { FaShoppingBag, FaUser, FaCalendarAlt, FaTrash, FaGift } from "react-icons/fa";

interface GiftCardProps {
  gift: Gift;
  onToggleBought: (id: string) => void;
  onDelete: (id: string) => void;
}

const GiftCard: React.FC<GiftCardProps> = ({ gift, onToggleBought, onDelete }) => {
  return (
    <div
      className={`relative bg-amber-100/30 shadow-md rounded-lg p-4 h-fit border-t-4 ${
        gift.bought ? "border-green-500" : "border-red-400"
      }`}
    >
      <div className="absolute -top-5.5 z-2 left-1/2 -translate-x-1/2">
        <FaGift
          className={gift.bought ? "text-green-500" : "text-red-400"}
          size={20}
        />
      </div>

      <h2 className="text-xl pb-2 font-semibold text-black break-words">
        {gift.name}
      </h2>
      <div className="flex items-center border-b-1 p-1">
        <FaUser />
        <p className="text-sm text-gray-800 break-words">
          Para: <strong>{gift.giftTo}</strong>
        </p>
      </div>
      <div className="flex items-center border-b-1 p-1">
        <FaCalendarAlt />
        <p className="text-sm text-gray-800 break-words">
          Presente de: <strong>{gift.category}</strong>
        </p>
      </div>
      <div className="flex items-center justify-between mt-2">
        <button
          onClick={() => onToggleBought(gift.id)}
          className={`flex items-center gap-2 text-sm p-2 rounded-md border transition-colors duration-300 shadow-sm cursor-pointer
          ${
            gift.bought
              ? "text-green-600 border-green-600 hover:bg-green-100"
              : "text-red-600 border-red-600 hover:bg-red-100"
          }
          `}
        >
          <FaShoppingBag />
          {gift.bought ? "Comprado" : "Não comprado"}
        </button>
        <button 
        className="flex items-center justify-center p-2 rounded-md  hover:bg-red-200 transition cursor-pointer"
        onClick={() => onDelete(gift.id)}
        >
          <FaTrash className="text-2xl text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
