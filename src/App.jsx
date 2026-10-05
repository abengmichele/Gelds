import { useState, useEffect } from 'react';

export default function App() {
  const [showPub, setShowPub] = useState(false);
  const [count, setCount] = useState(10);
  const [current, setCurrent] = useState(null);

  const cats = [
    {n:'Hotel', icon:'https://cdn-icons-png.flaticon.com/512/3009/3009489.png', pay:'https://shrinkme.click/kamchat-hotel-final', site:'https://www.booking.com/city/cm/yaounde.html'},
    {n:'Resto', icon:'https://cdn-icons-png.flaticon.com/512/857/857681.png', pay:'https://shrinkme.click/Cpnr', site:'https://glovoapp.com/cm/fr/yaounde/'},
    {n:'Pharma', icon:'https://cdn-icons-png.flaticon.com/512/4320/4320337.png', pay:'https://srnky.com/FJi7r05baJ8', site:'https://waspito.com'},
    {n:'MyJob', icon:'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', pay:'https://clksz.com/mxrfAbm', site:'https://www.myjobmag.cm'},
    {n:'Waspito', icon:'https://cdn-icons-png.flaticon.com/512/2966/2966327.png', pay:'https://shrinkme.click/kamchat-hotel-test', site:'https://waspito.com'},
    {n:'Emploi', icon:'https://cdn-icons-png.flaticon.com/512/1087/1087815.png', pay:'https://clksz.com/Fme4', site:'https://www.emploi.cm'},
    {n:'Car', icon:'https://cdn-icons-png.flaticon.com/512/3774/3774083.png', pay:'https://exe.io/8LSKy', site:'https://www.rentalcars.com/en/city/cm/yaounde/'},
    {n:'Jeux', icon:'https://cdn-icons-png.flaticon.com/512/808/808439.png', pay:'https://clksz.com/5FLBwBQXy5', site:'https://www.crazygames.com'},
    {n:'Tech', icon:'https://cdn-icons-png.flaticon.com/512/1087/1087815.png', pay:'https://exe.io/vpj6tr', site:'https://www.goafricaonline.com/cm/annuaire/techniciens'},
    {n:'Livraison', icon:'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', pay:'https://shrinkme.click/kamchat-hotel-final', site:'https://glovoapp.com/cm/fr/yaounde/'},
    {n:'Formation', icon:'https://cdn-icons-png.flaticon.com/512/2436/2436874.png', pay:'https://srnky.com/FJi7r05baJ8', site:'https://www.coursera.org'},
    {n:'Logement', icon:'https://cdn-icons-png.flaticon.com/512/619/619153.png', pay:'https://clksz.com/mxrfAbm', site:'https://www.airbnb.com/s/Yaounde/homes'},
  ];

  const videos = [
    "https://www.facebook.com/reel/1851246792913670/",
    "https://www.facebook.com/reel/1569449071110431/",
    "https://www.facebook.com/reel/1404166711249147/",
    "https://www.facebook.com/reel/1818182712682361/",
    "https://www.facebook.com/reel/2600188100430700/",
    "https://www.facebook.com/reel/2014627569309082/",
  ];

  const clickIcon = (item) => {
    setCurrent(item);
    window.open(item.pay, '_blank');
    setShowPub(true);
    setCount(10);
  };

  useEffect(()=>{
    if(!showPub) return;
    const t = setInterval(()=> setCount(c=> c<=1? 0 : c-1), 1000);
    return ()=>clearInterval(t);
  },[showPub]);

  return (
    <div className="max-w-[430px] mx-auto bg-[#f5f5f5] min-h-screen font-sans">
      <div className="bg-white p-4 flex justify-between items-center border-b">
        <div><span className="font-black text-[#00c853] text-xl">GELDS</span> <span className="text-[10px] text-gray-500 ml-2">Gagne 0.05$ / clic</span></div>
        <div>🔔</div>
      </div>

      <div className="p-3">
        <p className="font-bold text-[13px] mb-2">12 Services qui paient</p>
        <div className="grid grid-cols-3 gap-3">
          {cats.map(x=>(
            <button key={x.n} onClick={()=>clickIcon(x)} className="bg-white rounded-2xl py-4 flex flex-col items-center shadow-sm">
              <img src={x.icon} className="w-10 h-10 object-contain" />
              <span className="font-bold text-[11px] mt-2">{x.n}</span>
            </button>
          ))}
        </div>
      </div>

      {showPub && current && (
        <div className="fixed inset-0 bg-black/95 z-[100] max-w-[430px] mx-auto flex flex-col items-center justify-center p-6 text-center">
          <p className="text-white/60 text-xs mb-2">Pub ouverte dans un autre onglet - ça te paie 0.05$</p>
          <p className="text-white text-7xl font-black">{count > 0? count : '✓'}</p>
          <div className="bg-white rounded-2xl p-5 w-full mt-6">
            <p className="font-black text-sm">Si le site ne s'ouvre pas auto :</p>
            <p className="text-[11px] text-gray-500 mt-1">Dans l'autre onglet, clique sur "Continue" comme sur ta photo, puis reviens ici.</p>
            {count === 0? (
              <button onClick={()=> window.open(current.site, '_blank')} className="bg-[#00c853] text-white w-full py-4 rounded-xl font-black mt-4">
                👉 ALLER VERS {current.n.toUpperCase()}
              </button>
            ) : (
              <p className="bg-gray-100 w-full py-4 rounded-xl font-bold mt-4 text-gray-400">Bouton dans {count}s...</p>
            )}
            <button onClick={()=> setShowPub(false)} className="text-xs text-gray-400 mt-3 underline">Fermer</button>
          </div>
        </div>
      )}

      <div className="bg-black rounded-t-[30px] p-4 mt-4 pb-20">
        <p className="text-white font-bold mb-3">Vidéos Yaoundé 🔥</p>
        <div className="grid grid-cols-2 gap-3">
          {videos.map((v,i)=>(
            <iframe key={i} src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(v)}&show_text=false`} className="w-full h-56 rounded-xl bg-zinc-900" frameBorder="0" allowFullScreen></iframe>
          ))}
        </div>
      </div>
    </div>
  );
  }
