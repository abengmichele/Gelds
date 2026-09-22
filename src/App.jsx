import { useState } from "react";

const SERVICES = [
  { id:"chat", name:"Chat", icon:"💬", color:"bg-green-100", page:"Messagerie GELDS - Bientôt disponible" },
  { id:"moments", name:"Moments", icon:"🖼️", color:"bg-orange-100", page:"Partage tes photos du Cameroun" },
  { id:"wallet", name:"Wallet", icon:"👛", color:"bg-yellow-100", page:"Ton portefeuille", isWallet:true },
  { id:"hotel", name:"Hotel booking", icon:"🏨", color:"bg-blue-100", page:"Réserve un hôtel à Yaoundé, Douala..." },
  { id:"resto", name:"Restaurant", icon:"🍽️", color:"bg-red-100", page:"Commande ton Ndolé, Poisson braisé" },
  { id:"car", name:"Car rental", icon:"🚗", color:"bg-sky-100", page:"Location de voitures" },
  { id:"courses", name:"Online courses", icon:"🎓", color:"bg-purple-100", page:"Cours en ligne - Apprends un métier" },
  { id:"pharma", name:"Pharmacy", icon:"💊", color:"bg-emerald-100", page:"Pharmacie de garde la plus proche" },
  { id:"tele", name:"Teleconsultation", icon:"👨‍⚕️", color:"bg-teal-100", page:"Parle à un médecin" },
  { id:"jeux", name:"Mini-jeux", icon:"🎲", color:"bg-pink-100", page:"Ludo, Dame, Quiz - Gagne des points" },
  { id:"emploi", name:"Offres d'emploi", icon:"💼", color:"bg-stone-100", page:"Trouve un job au Cameroun" },
  { id:"tech", name:"Techniciens", icon:"🛠️", color:"bg-orange-50", page:"Plombier, Electricien, Maçon proche de toi" },
];

export default function App(){
  const [page, setPage] = useState(null);
  const [wallet, setWallet] = useState(()=>Number(localStorage.getItem("gelds")||1250));

  const openService = (s) => {
    if(s.isWallet){
       // le wallet gagne seulement ici, pas partout
    } else {
       setWallet(w=>{ const nw=w+7; localStorage.setItem("gelds",nw); return nw; });
    }
    setPage(s);
  };

  return(
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-[400px] bg-white min-h-screen shadow-2xl relative">
        {/* HEADER GELDS */}
        <div className="px-5 pt-8 pb-4 flex justify-between items-center bg-white sticky top-0 z-10">
          <div>
            <h1 className="font-black text-2xl tracking-tight">GELDS</h1>
            <p className="text-[10px] text-gray-400 font-bold tracking-widest">SUPER-APP CAMEROUN 🇨🇲</p>
          </div>
          <div className="flex gap-3 text-xl"><span>🔔</span><span>👤</span></div>
        </div>

        {/* GRILLE */}
        <div className="px-5 mt-2">
          <div className="flex justify-between mb-4">
            <h2 className="font-bold">Services</h2>
            <span className="text-xs text-green-600 font-semibold">Voir tout &gt;</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {SERVICES.map(s=>(
              <button key={s.id} onClick={()=>openService(s)} className="flex flex-col items-center active:scale-90 transition">
                <div className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center text-3xl`}>{s.icon}</div>
                <span className="text-[11px] mt-2 font-semibold text-center leading-tight">{s.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* PAGE QUAND ON CLIQUE */}
        {page && (
          <div className="absolute inset-0 bg-white z-20 flex flex-col animate-in">
            <div className="p-5 flex items-center gap-3 border-b">
              <button onClick={()=>setPage(null)} className="text-xl">←</button>
              <h2 className="font-bold text-lg">{page.name}</h2>
            </div>
            <div className="p-6 flex-1 flex flex-col items-center justify-center text-center">
              <div className={`w-24 h-24 rounded-3xl ${page.color} flex items-center justify-center text-5xl mb-4`}>{page.icon}</div>
              <h3 className="font-black text-xl mb-2">{page.name}</h3>
              <p className="text-gray-500 text-sm">{page.page}</p>
              {page.isWallet && (
                <div className="mt-6 bg-yellow-400 px-6 py-3 rounded-full font-black">{wallet} F CFA</div>
              )}
              {!page.isWallet && (
                <p className="mt-6 text-xs text-green-600 font-bold">+7F ajoutés à ton Wallet en explorant!</p>
              )}
            </div>
          </div>
        )}

        {/* BOTTOM NAV */}
        <div className="absolute bottom-0 w-full bg-white border-t flex justify-around py-3 text-[11px] font-semibold">
          <span className="text-black font-black">🏠 Accueil</span>
          <span className="text-gray-400">👥 Contacts</span>
          <span className="text-gray-400">🧭 Découvrir</span>
          <span className="text-gray-400">👤 Moi</span>
        </div>
      </div>
    </div>
  )
       }
