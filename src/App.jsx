import { useState } from 'react'

export default function App() {
  const [tab, setTab] = useState('home')
  const videos = ["Vidéo 1","Vidéo 2","Vidéo 3","Vidéo 4","Vidéo 5","Vidéo 6"]

  return (
    <div style={{fontFamily:'sans-serif', paddingBottom:70}}>
      <div style={{padding:'12px', fontWeight:'bold', color:'#16a34a'}}>GELDS - KAMKOI</div>
      
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8, padding:12}}>
        {['Hotel','Resto','Snack','Bar','Boite','Motel','Auberge','Appart','Salle'].map(c=>(
          <div key={c} style={{padding:12, borderRadius:8, textAlign:'center', background:'#facc15', fontWeight:'600'}}>{c}</div>
        ))}
      </div>

      <div style={{padding:12}}>
        <h3>Vidéos Récentes</h3>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
          {videos.map(v=>(
            <div key={v} style={{background:'#111', color:'#fff', borderRadius:8, height:80, display:'flex', alignItems:'center', justifyContent:'center'}}>🎬 {v}</div>
          ))}
        </div>
      </div>

      <nav style={{position:'fixed', bottom:0, left:0, right:0, display:'flex', justifyContent:'space-around', background:'#fff', borderTop:'1px solid #ddd', padding:'10px 0'}}>
        <button onClick={()=>setTab('contacts')}>Contacts</button>
        <button onClick={()=>setTab('discover')}>Découvrir</button>
        <button onClick={()=>setTab('me')}>Moi</button>
      </nav>

      {tab !== 'home' && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', display:'flex', alignItems:'center', justifyContent:'center'}} onClick={()=>setTab('home')}>
          <div style={{background:'#fff', padding:20, borderRadius:12}}>
            <p>Section {tab} bientôt disponible</p>
            <button onClick={()=>setTab('home')}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  )
          }
