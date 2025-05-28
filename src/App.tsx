import { useState, useEffect } from "react";
import GiftForm from "./components/GiftForm";
import type { Gift } from "./types/Gift";
import { saveGifts, loadGifts } from "./utils/storage";
import GiftBoard from "./components/GiftBoard";
import { FaGift, FaHeart } from "react-icons/fa";

const App: React.FC = () => {
  const [giftsData, setGiftsData] = useState<Gift[]>([]);
  const [isLoaded, setIsLoaded] = useState(false); // flag para controlar carregamento

  useEffect(() => {
    const storedGifts = loadGifts();
    setGiftsData(storedGifts);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveGifts(giftsData);
    }
  }, [giftsData, isLoaded]);

  const addGift = (gift: Gift) => {
    setGiftsData((prev) => [...prev, gift]);
  };

  const deleteGift = (id: string) => {
    setGiftsData((prev) => prev.filter((gift) => gift.id !== id));
  };

  const toggleBought = (id: string) => {
    setGiftsData((prev) =>
      prev.map((gift) =>
        gift.id === id ? { ...gift, bought: !gift.bought } : gift
      )
    );
  };

  return (
    <div className="min-h-screen">
      <header className="mb-4 ">
        <div className="flex items-center justify-center gap-2 bg-purple-400 p-1 rounded-b-full">
          <FaGift className="text-red-600 text-2xl" />
          <h1 className="text-black text-2xl font-bold">Giftly</h1>
          <p>-</p>
          <h2 className="text-xl text-black/70 hidden md:block">
            Pequenos gestos, grandes emoções!
          </h2>
          <FaHeart className="text-red-600 text-2xl" />
        </div>
      </header>
      <main className="grid md:grid-cols-3 md:gap-10 gap-4 mx-2">
        <GiftForm onAdd={addGift} />
        <GiftBoard gifts={giftsData} onToggleBought={toggleBought} onDelete={deleteGift}/>
      </main>
    </div>
  );
};

export default App;
