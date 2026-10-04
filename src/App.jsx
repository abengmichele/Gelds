import { useState } from 'react';

export default function App() {

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

  const videos = [
    "https://www.facebook.com/reel/1851246792913670/",
    "https://www.facebook.com/reel/1569449071110431/",
    "https://www.facebook.com/reel/1404166711249147/",
    "https://www.facebook.com/reel/1818182712682361/",
    "https://www.facebook.com/reel/2600188100430700/",
    "https://www.facebook.com/reel/2014627569309082/",
  ];

  return (
    <div className="max-w-[420px] mx-auto bg-white min-h-screen">
      {/* JUSTE GELDS */}
      <div className="p-4 font-black text-xl">
        <span className="text-[#00c853]">GELDS</span>
      </div>

      <div className="grid grid-cols-3 gap-3 p-3">
        {cats.map(x=>(
          <button
            key={x.n}
            onClick={()=> window.open(x.pay, '_blank')}
            className={`${x.c} rounded-2xl py-6 font-bold text-[13px]`}
          >
            {x.n}
          </button>
        ))}
      </div>

      {/* TES VIDÉOS */}
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
