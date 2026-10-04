import { useState, useEffect } from 'react';

export default function App() {
  const [showPub, setShowPub] = useState(false);
  const [count, setCount] = useState(5);
  const [payLink, setPayLink] = useState('');

  const cats = [
    {n:'Hotel', c:'bg-black text-white', pay:'https://shrinkme.click/kamchat-hotel-final'},
    {n:'Resto', c:'bg-black text-white', pay:'https://shrinkme.click/Cpnr'},
    {n:'Pharma', c:'bg-black text-white', pay:'https://srnky.com/FJi7r05baJ8'},
    {n:'MyJob', c:'bg-[#00c853] text-white', pay:'https://clksz.com/mxrfAbm'},
    {n:'Waspito', c:'bg-[#00c853] text-white', pay:'https://shrinkme.click/kamchat-hotel-test'},
    {n:'Emploi', c:'bg-[#00c853] text-white', pay:'https://clksz.com/Fme4'},
    {n:'Car', c:'bg-[#ffeb3b] text-black', pay:'https://exe.io/8LSKy'},
    {n:'Jeux', c:'bg-[#ffeb3b] text-black', pay:'https://clksz.com/5FLBwBQXy5'},
    {n:'Tech', c:'bg-[#ffeb3b] text-black', pay:'https://exe.io/vpj6tr'},
    {n:'Livraison', c:'bg-black text-white', pay:'https://shrinkme.click/kamchat-hotel-final'},
    {n:'Formation', c:'bg-[#00c853] text-white', pay:'https://srnky.com/FJi7r05baJ8'},
    {n:'Logement', c:'bg-[#ffeb3b] text-black', pay:'https://clksz.com/mxrfAbm'},
  ];

  const clickIcon = (link) => {
    setPayLink(link);
    setShowPub(true);
    setCount(5);
  };

  useEffect(()=>{
    if(!showPub) return;
    const t = setInterval(()=>{
      setCount(c=>{
        if(c<=1){
          clearInterval(t);
          window.open(payLink, '_blank');
          setShowPub(false);
          return 0;
        }
        return c-1;
      });
    },1000);
    return ()=>clearInterval(t);
  },[showPub, payLink]);

  // TES 6 VIDÉOS FACEBOOK QUE TU AVAIS CRÉÉES
  const videos = [
    "https://www.facebook.com/reel/1851246792913670/",
    "https://www.facebook.com/reel/1569449071110431/",
    "https://www.facebook.com/reel/1404166711249147/",
    "https://www.facebook.com/reel/1818182712682361/",
    "https://www.facebook.com/reel/2600188100430700/",
    "https://www.facebook.com/reel/2014627569309082/",
  ];

  return (
    <div className="max-w-[420px] mx-auto bg-white min-h-screen pb-20">
      <div className="p-4 font-black flex justify-between">
        <span className="text-[#00c853]">GELDS 🎁 KAMCHAT</span>
        <span className="text-[10px] border px-2 py-1 rounded-full">12 LIENS PAYANTS</span>
      </div>

      <div className="grid grid-cols-3 gap-3 p-3">
        {cats.map(x=>(
          <button key={x.n} onClick={()=>clickIcon(x.pay)} className={`${x.c} rounded-2xl py-5 font-bold text-[13px] shadow`}>
            {x.n}
          </button>
        ))}
      </div>

      {/* PUB 5s QUI TE PAIE */}
      {showPub && (
        <div className="fixed inset-0 bg-black/95 z-[100] max-w-[420px] mx-auto flex flex-col items-center justify-center p-6 text-center">
          <p className="text-white/50 text-[10px] mb-4">{payLink}</p>
          <p className="text-white text-7xl font-black">{count}</p>
          <div className="bg-white rounded-2xl p-4 w-full mt-6">
            <p className="font-black">PUB 5s - Tu gagnes 25F</p>
            <p className="text-xs mt-1">Patiente...</p>
          </div>
        </div>
      )}

      {/* TES VIDÉOS FACEBOOK - SECTION NOIRE */}
      <div className="bg-black rounded-t-[30px] p-4 mt-4">
        <p className="text-white font-bold mb-3">Vidéos Yaoundé 🔥 (tes 6 Reels)</p>
        <div className="grid grid-cols-2 gap-3">
          {videos.map((v,i)=>(
            <iframe
              key={i}
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(v)}&show_text=false`}
              className="w-full h-56 rounded-xl bg-zinc-900"
              scrolling="no"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ))}
        </div>
        <p className="text-white/50 text-[10px] mt-3 text-center">Tes vidéos Facebook - tu pourras les remplacer après par d'autres liens</p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[420px] mx-auto bg-white border-t flex justify-around py-3 text-[11px]">
        <span className="text-[#00c853] font-black">🏠 Accueil</span><span>👥 Contacts</span><span>🧭 Découvrir</span><span>👤 Moi</span>
      </div>
    </div>
  );
  }
