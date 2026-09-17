import { useState } from "react"
export default function App(){
  const [wallet,setWallet]=useState(Number(localStorage.getItem("wallet")||0))
  const [gains,setGains]=useState(()=>{
    try{return JSON.parse(localStorage.getItem("gains")||"{}").total||0}catch(e){return 0}
  })
  const PUB="https://www.profitablecpmrate.com/TON_LIEN_ICI"
  const services=[
    {n:"Chat",i:"💬"},{n:"Moments",i:"📸"},{n:"Wallet",i:"💰"},
    {n:"Hotel",i:"🏨"},{n:"Resto",i:"🍛"},{n:"Car",i:"🚗"},
    {n:"Courses",i:"🛒"},{n:"Pharma",i:"💊"},{n:"Ludo",i:"🎲",g:400},
    {n:"Emploi",i:"💼"},{n:"Boutique",i:"👕"},{n:"Tech",i:"🔧"},
  ]
  const onClic=(name,link)=>{
    const data=JSON.parse(localStorage.getItem("gains")||"{}")
    data[name]=(data[name]||0)+7
    data.total=(data.total||0)+7
    localStorage.setItem("gains",JSON.stringify(data))
    setGains(data.total)
    window.open(PUB,"_blank")
    if(link) setTimeout(()=>window.open(link,"_blank"),700)
  }
  const onVideo=(i)=>{
    const data=JSON.parse(localStorage.getItem("gains")||"{}")
    data["vid"+i]=(data["vid"+i]||0)+10
    data.total=(data.total||0)+10
    localStorage.setItem("gains",JSON.stringify(data))
    const nw=wallet+1
    setWallet(nw)
    localStorage.setItem("wallet",nw)
    setGains(data.total)
    window.open(PUB,"_blank")
  }
  return(
    <div className="min-h-screen bg-gray-100 pb-20">
      <div className="bg-black text-yellow-400 p-4 flex justify-between sticky top-0 z-50"><b>GELDS</b><span className="text-xs">{wallet}F | {gains}F gagnés</span></div>
      <div className="grid grid-cols-4 gap-3 p-4">{services.map(s=><button key={s.n} onClick={()=>onClic(s.n, s.g?"":"https://jumia.cm")} className="bg-white rounded-2xl p-3 shadow"><div className="text-xl">{s.i}</div><div className="text-[9px] font-bold">{s.n}</div></button>)}</div>
      <h3 className="font-bold px-4 mt-2">🎬 Vidéos +1F</h3>
      {[...Array(20)].map((_,i)=><div key={i} className="bg-black text-white m-2 p-3 rounded-xl flex justify-between items-center"><span className="text-xs">VIDEO {i+1} - Clique = +1F</span><button onClick={()=>onVideo(i)} className="bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold">Voir</button></div>)}
    </div>
  )
                                        }
