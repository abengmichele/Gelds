export default function App() {
  const cats = [
    {n:'Hotel', c:'bg-black text-white'}, {n:'Resto', c:'bg-black text-white'}, {n:'Pharma', c:'bg-black text-white'},
    {n:'MyJob', c:'bg-green-600 text-white'}, {n:'Waspito', c:'bg-green-600 text-white'}, {n:'Emploi', c:'bg-green-600 text-white'},
    {n:'Car', c:'bg-yellow-400 text-black'}, {n:'Jeux', c:'bg-yellow-400 text-black'}, {n:'Tech', c:'bg-yellow-400 text-black'},
    {n:'Livraison', c:'bg-black text-white'}, {n:'Formation', c:'bg-green-600 text-white'}, {n:'Logement', c:'bg-yellow-400 text-black'},
  ]
  return (
    <div className="min-h-screen bg-white p-3">
      <div className="flex justify-between font-bold"><span>GELDS 🎁 KAMCHAT</span><span className="text-sm">PAYANT 5s</span></div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        {cats.map(x=><div key={x.n} className={`${x.c} rounded-2xl py-3 text-center text-sm font-bold`}>{x.n}</div>)}
      </div>
      <p className="text-center mt-6 text-gray-500">Ton app est revenue 👍</p>
    </div>
  )
}
