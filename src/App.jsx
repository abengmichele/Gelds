import { useState, useEffect } from 'react';

export default function App() {
  const [showPub, setShowPub] = useState(false);
  const [count, setCount] = useState(10);
  const [current, setCurrent] = useState(null);

  // CHAQUE BOUTON = LIEN PAYANT + VRAI SITE
  const cats = [
    {n:'Hotel', c:'bg-black text-white', pay:'https://shrinkme.click/kamchat-hotel-final', site:'https://www.booking.com/city/cm/yaounde.html'},
    {n:'Resto', c:'bg-black text-white', pay:'https://shrinkme.click/Cpnr', site:'https://glovoapp.com/cm/fr/yaounde/'},
    {n:'Pharma', c:'bg-black text-white', pay:'https://srnky.com/FJi7r05baJ8', site:'https://waspito.com'},
    {n:'MyJob', c:'bg-[#00c853] text-white', pay:'https://clksz.com/mxrfAbm', site:'https://www.myjobmag.cm'},
    {n:'Waspito', c:'bg-[#00c853] text-white', pay:'https://shrinkme.click/kamchat-hotel-test', site:'https://waspito.com'},
    {n:'Emploi', c:'bg-[#00c853] text-white', pay:'https://clksz.com/Fme4', site:'https://www.emploi.cm'},
    {n:'Car', c:'bg-[#ffeb3b] text-black', pay:'https://exe.io/8LSKy', site:'https://www.rentalcars.com/en/city/cm/yaounde/'},
    {n:'Jeux', c:'bg-[#ffeb3b] text-black', pay:'https://clksz.com/5FLBwBQXy5', site:'https://www.crazygames.com'},
    {n:'Tech', c:'bg-[#ffeb3b] text-black', pay:'https://exe.io/vpj6tr', site:'https://www.aliexpress.com'},
    {n:'Livraison', c:'bg-black text-white', pay:'https://shrinkme.click/kamchat-hotel-final', site:'https://glovoapp.com/cm/fr/yaounde/'},
    {n:'Formation', c:'bg-[#00c853] text-white', pay:'https://srnky.com/FJi7r05baJ8', site:'https://www.coursera.org'},
    {n:'Logement', c:'bg-[#ffeb3b] text-black', pay:'https://clksz.com/mxrfAbm', site:'https://www.airbnb.com/s/Yaounde/homes'},
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
    window.open(item.pay, '_blank'); // 1. Ouvre la pub qui te paie (ta photo)
    setShowPub(true); // 2. Montre le bouton vers le vrai site
    setCount(10);
  };

  useEffect(()=>{
    if(!showPub) return;
    const t = setInterval(()=>{
      setCount(c=> c<=1? 0 : c-1);
    },1000);
    return ()=>clearInterval(t);
  },[showPub]);

  return (
    <div className="max-w-[420px] mx-auto bg-white min-h-screen">
      <div className="p-4 font-black text-xl"><span className="text-[#00c853]">GELDS</span></div>

      <div className="grid grid-cols-3 gap-3 p-3">
        {cats.map(x=>(
          <button key={x.n} onClick={()=>clickIcon(x)} className={`${x.c} rounded-2xl py-6 font-bold text-[13px]`}>
            {x.n}
          </button>
        ))}
      </div>

      {/* LE BOUTON QUE TU VOULAIS */}
      {showPub && current && (
        <div className="fixed inset-0 bg-black/95 z-[100] max-w-[420px] mx-auto flex flex-col items-center justify-center p-6 text-center">
          <p className="text-white/60 text-xs mb-2">Pub ouverte dans un autre onglet</p>
          <p className="text-white text-6xl font-black">{count > 0? count : '✓'}</p>

          <div className="bg-white rounded-2xl p-5 w-full mt-6">
            <p className="font-black text-sm">Si le site ne s'ouvre pas auto :</p>
            <p className="text-[11px] text-gray-500 mt-1">Clique sur "Continue" dans l'autre onglet comme sur ta photo, puis reviens ici.</p>

            {count === 0? (
              <button
                onClick={()=> window.open(current.site, '_blank')}
                className="bg-[#00c853] text-white w-full py-4 rounded-xl font-black mt-4 text-[15px]"
              >
                👉 ALLER VERS {current.n.toUpperCase()} MAINTENANT
              </button>
            ) : (
              <p className="bg-gray-100 w-full py-4 rounded-xl font-bold mt-4 text-gray-400">
                Bouton dans {count}s...
              </p>
            )}

            <button onClick={()=> setShowPub(false)} className="text-xs text-gray-400 mt-3 underline">Fermer</button>
          </div>
        </div>
      )}

      <div className="bg-black rounded-t-[30px] p-4 mt-6">
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
