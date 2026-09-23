import { useState, useEffect } from "react";

const SERVICES = [
  { id:"hotel", name:"Hôtel", icon:"🏨", link:"https://www.booking.com/city/cm/yaounde.fr.html" },
  { id:"resto", name:"Restaurant", icon:"🍔", link:"https://glovoapp.com/cm/fr/yaounde/" },
  { id:"car", name:"Voiture", icon:"🚗", link:"https://www.yango.com/fr_cm/" },
  { id:"pharma", name:"Pharmacie", icon:"💊", link:"https://www.google.com/maps/search/pharmacie+yaounde" },
  { id:"tech", name:"Technicien", icon:"🔧", link:"https://wa.me/237600000000" },
];

export default function App() {
  const [wallet, setWallet] = useState(0);
  const [showAd, setShowAd] = useState(false);
  const [pendingLink, setPendingLink] = useState(null);

  const BANNER_ID = "ca-app-pub-7503834573234948/1803826748";
  const INTER_ID = "ca-app-pub-7503834573234948/6673010040";
  const REWARD_ID = "ca-app-pub-7503834573234948/3603593570";

  // Bannière Google
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7503834573234948";
    s.async = true; s.crossOrigin = "anonymous";
    document.head.appendChild(s);
  }, []);

  // Quand on clique un service -> Pub interstitielle puis ouvre le site
  const ouvrirService = (s) => {
    setPendingLink(s.link);
    setShowAd(true);
    console.log("Pub Interstitielle: " + INTER_ID);
    setTimeout(() => {
      setShowAd(false);
      window.open(s.link, '_blank');
    }, 2500); // 2.5s de pub
  };

  const gagnerPieces = () => {
    setShowAd(true);
    console.log("Pub Rewarded: " + REWARD_ID);
    setTimeout(() => {
      setShowAd(false);
      setWallet(wallet + 25);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-[400px] bg-white min-h-screen relative pb-[80px]">

        <div className="p-4 bg-black text-white flex justify-between items-center">
          <span className="font-bold">GELDS - {wallet}</span>
          <button onClick={gagnerPieces} className="bg-yellow-400 text-black px-3 py-1 rounded text-sm">+25 Pub</button>
        </div>

        <div className="p-4 grid grid-cols-3 gap-3">
          {SERVICES.map((s) => (
            <button key={s.id} onClick={() => ouvrirService(s)} className="bg-gray-100 p-4 rounded-xl flex flex-col items-center">
              <span className="text-2xl">{s.icon}</span>
              <span className="text-[11px] mt-1">{s.name}</span>
            </button>
          ))}
        </div>

        {showAd && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white z-50">
            <p className="font-bold">Publicité {INTER_ID === pendingLink? "" : ""}</p>
            <p className="text-xs mt-2">Chargement du site...</p>
            <div className="mt-4 w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gray-200 border-t flex items-center justify-center text-[10px]">
          PUB: {BANNER_ID}
        </div>

      </div>
    </div>
  );
          }
