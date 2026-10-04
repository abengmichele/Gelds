import { useState, useEffect } from 'react';

export default function App() {
  const [sec, setSec] = useState(5);
  useEffect(()=>{ const t=setInterval(()=>setSec(s=>s>0?s-1:0),1000); return ()=>clearInterval(t)},[]);

  const cats = [
    {n:'Hotel',c:'bg-black text-white',i:'🏨'}, {n:'Resto',c:'bg-black text-white',i:'🍔'}, {n:'Pharma',c:'bg-black text-white',i:'💊'},
    {n:'MyJob',c:'bg-green-600 text-white',i:'💼'}, {n:'Waspito',c:'bg-green-600 text-white',i:'🩺'}, {n:'Emploi',c:'bg-green-600 text-white',i:'💼'},
    {n:'Car',c:'bg-yellow-400 text-black',i:'🚗'}, {n:'Jeux',c:'bg-yellow-400 text-black',i:'🎮'}, {n:'Tech',c:'bg-yellow-400 text-black',i:'🔧'},
    {n:'Livraison',c:'bg-black text-white',i:'🛵'}, {n:'Formation',c:'bg-green-600 text-white',i:'📚'}, {n:'Logement',c:'bg-yellow-400 text-black',i:'🏠'},
  ];

  return (
    <div className="min-h-screen bg-white max-w-[420px] mx-auto pb-16">
      <div className="flex justify-between p-4 font-black"><span className="text-green-600">GELDS 🎁 KAMCHAT</span><span className="text-xs font-normal">PAYANT {sec}s</span></div>
      <div className="grid grid-cols-3 gap-3 p-3">
        {cats.map(x=><button key={x.n} className={`${x.c} rounded-2xl py-4 font-bold text-sm`}>{x.i} {x.n}</button>)}
      </div>
      <div className="bg-black rounded-t-[30px] p-3 mt-3 grid grid-cols-2 gap-3">
        {[1,2,3,4].map(id=><div key={id} className="bg-zinc-800 rounded-xl h-48 relative overflow-hidden flex items-center justify-center"><span className="absolute top-2 left-2 text-[10px] text-white bg-black/50 px-2 py-1 rounded-full">Le-Mood VS</span><div className="w-10 h-10 bg-black/60 rounded-full flex items-center justify-center text-white">▶</div><span className="absolute bottom-1 left-2 text-white text-xs">{id%2?'Marché Central':'Cuisine'}</span></div>)}
      </div>
      <div className="fixed bottom-0 left-0 right-0 max-w-[420px] mx-auto bg-white border-t flex justify-around py-3 text-xs"><b className="text-green-600">🏠 Accueil</b><span>👥 Contacts</span><span>🧭 Découvrir</span><span>👤 Moi</span></div>
    </div>
  );
                                                                                                                                                                                                                                                                }
