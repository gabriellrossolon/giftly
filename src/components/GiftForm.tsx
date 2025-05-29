import { useState } from "react";
import type { Gift } from "../types/Gift";
import { FaGift } from "react-icons/fa";

interface GiftFormProps {
  onAdd: (gift: Gift) => void;
}

const GiftForm: React.FC<GiftFormProps> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [giftTo, setGiftTo] = useState("");
  const [category, setCategory] = useState<Gift["category"]>("Outros");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !giftTo.trim()) return;

    const newGift: Gift = {
      id: crypto.randomUUID(),
      name,
      giftTo,
      category,
      bought: false,
    };

    onAdd(newGift);
    setName("");
    setGiftTo("");
    setCategory("Outros");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex flex-col items-center justify-center gap-1 lg:gap-2 rounded-xl shadow-xl shadow-black/20 px-4 py-3 w-full
        sticky top-4 self-start max-h-[calc(100vh-2rem)] overflow-auto z-2 bg-amber-100/30 backdrop-blur
      "
    >
      <h2 className="flex items-center justify-center gap-2 text-xl font-semibold mb-4 text-gray-800">
        Adicione um Presente <FaGift className="text-red-600 text-2xl" />
      </h2>
      <input
        type="text"
        placeholder="Nome do presente"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
        className="border-2 border-gray-800/70 rounded-md px-2 py-1 w-full shadow-md shadow-black/20 text-gray-800"
      />
      <input
        type="text"
        placeholder="Para quem é o presente?"
        value={giftTo}
        required
        onChange={(e) => setGiftTo(e.target.value)}
        className="border-2 border-gray-800/70 rounded-md px-2 py-1 w-full shadow-md shadow-black/20 text-gray-800"
      />
      <select
        value={category}
        required
        onChange={(e) => setCategory(e.target.value as Gift["category"])}
        className="border-2 border-gray-800/70 rounded-md px-2 py-1 w-full shadow-md shadow-black/20 text-gray-800"
      >
        <option value="Natal">Natal</option>
        <option value="Aniversário">Aniversário</option>
        <option value="Dia dos Namorados">Dia dos Namorados</option>
        <option value="Dia das Mães">Dia das Mães</option>
        <option value="Dia dos Pais">Dia dos Pais</option>
        <option value="Dia das Crianças">Dia das Crianças</option>
        <option value="Páscoa">Páscoa</option>
        <option value="Outros">Outros</option>
      </select>
      <button
        type="submit"
        className="border border-gray-800/70 px-6 py-2 rounded-full mt-2 cursor-pointer font-bold shadow-md shadow-black/70 
        transition-colors duration-300 text-gray-800"
      >
        Adicionar presente
      </button>
    </form>
  );
};

export default GiftForm;
