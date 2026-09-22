import { useState, useEffect } from "react";

const SERVICES = [
  { n:"Chat", i:"💬", c:"bg-green-100", d:"" },
  { n:"Moments", i:"🖼️", c:"bg-orange-100", d:"" },
  { n:"Wallet", i:"👛", c:"bg-yellow-100", d:"" },
  { n:"Hotel booking", i:"🏨", c:"bg-blue-100", d:"" },
  { n:"Restaurant", i:"🍽️", c:"bg-red-100", d:"" },
  { n:"Car rental", i:"🚗", c:"bg-sky-100", d:"" },
  { n:"Online courses", i:"🎓", c:"bg-purple-100", d:"" },
  { n:"Pharmacy", i:"✚", c:"bg-emerald-100", d:"" },
  { n:"Teleconsultation", i:"👨‍⚕️", c:"bg-green-200", d:"" },
  { n:"Mini-jeux", i:"🎲", c:"bg-yellow-50", d:"Ludo • Dame • Quiz" },
  { n:"Offres d'emploi", i:"💼", c:"bg-blue-50", d:"" },
  { n:"Techniciens", i:"🛠️", c:"bg-orange-50", d:"" },
];

export default function App() {
  const [wallet, setWallet] = useState(()=>Number(localStorage.getItem("k_wallet")||0));
  useEffect(()=>{localStorage.setItem("k_wallet",wallet)},[wallet]);
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-[380px] min-h-screen bg-white shadow-2xl relative pb-20">
        {/* Header KAMCHAT */}
        <div className="px-4 pt-8 pb-3 flex justify-between items-center">
          <div>
            <h1 className="font-black text-xl tracking-tight"><span className="text-yellow-700">KAM</span>CHAT</h1>
            <p className="text-[9px] text-gray-500 -mt-1">WeChat Africain</p>
            <p className="text-[10px] font-bold mt-1">{wallet}F gagnés</p>
          </div>
          <div className="flex gap-3 text-xl">🔔 👤</div>
        </div>

        {/* Services */}
        <div className="px-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-sm">Services</h2>
            <span className="text-[11px] text-green-600">Voir tout {'>'}</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {SERVICES.map(s=>(
              <button key={s.n} onClick={()=>setWallet(w=>w+7)} className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl ${s.c} flex items-center justify-center text-2xl shadow-sm`}>{s.i}</div>
                <span className="text-[10px] font-semibold mt-1 text-center leading-tight">{s.n}</span>
                {s.d && <span className="text-[7px] text-gray-400 text-center">{s.d}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 text-[10px]">
          <div className="flex flex-col items-center text-green-600 font-bold">🏠<span>Accueil</span></div>
          <div className="flex flex-col items-center text-gray-400">👥<span>Contacts</span></div>
          <div className="flex flex-col items-center text-gray-400">🧭<span>Découvrir</span></div>
          <div className="flex flex-col items-center text-gray-400">👤<span>Moi</span></div>
        </div>
      </div>
    </div>
  );
}
