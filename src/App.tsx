import { useState, useEffect, useMemo } from "react";
import GiftForm from "./components/GiftForm";
import type { Gift } from "./types/Gift";
import { saveGifts, loadGifts } from "./utils/storage";
import GiftBoard from "./components/GiftBoard";
import { FaGift, FaHeart } from "react-icons/fa";
import FallingGifts from "./components/FallingGifts";

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

  const memorizedRain = useMemo(() => <FallingGifts />, []);

  return (
    <div className="min-h-screen flex flex-col">
      
      <header className="md:mb-6 mb-2">
        <div className="flex items-center justify-center gap-2 bg-amber-50 shadow-xl p-1 rounded-b-full">
          <FaGift className="text-red-600 text-2xl" />
          <h1 className="text-black text-2xl font-bold">Giftly</h1>
          <p>-</p>
          <h2 className="text-xl text-black/70 hidden md:block">
            Pequenos gestos, grandes emoções!
          </h2>
          <FaHeart className="text-red-600 text-2xl" />
        </div>
      </header>
      {memorizedRain}
      <main className="md:flex-1 grid md:grid-cols-3 md:gap-10 gap-4 mx-2">
        <GiftForm onAdd={addGift} />
        <GiftBoard
          gifts={giftsData}
          onToggleBought={toggleBought}
          onDelete={deleteGift}
        />
      </main>
      <footer className="mt-4 hidden md:block">
        <div className="bg-amber-50 p-1">
          <p className="text-center text-gray-800 font-semibold">
            Feito por Gabriell Rossolon -{" "} 
            <a href="https://portfolio-2025-cyan-eight.vercel.app" className="text-blue-700 underline" target="_blank">
              Portfólio
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
