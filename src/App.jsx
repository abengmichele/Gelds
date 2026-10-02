import { useState } from 'react'
export default function App(){
  const [tab,setTab]=useState('accueil')
  const cats=[
    {n:'Hotel',i:'🏨',b:'black',t:'white'},{n:'Resto',i:'🍔',b:'black',t:'white'},{n:'Pharma',i:'💊',b:'black',t:'white'},
    {n:'MyJob',i:'💼',b:'#16a34a',t:'white'},{n:'Waspito',i:'🩺',b:'#16a34a',t:'white'},{n:'Emploi',i:'💼',b:'#16a34a',t:'white'},
    {n:'Car',i:'🚗',b:'#facc15',t:'black'},{n:'Jeux',i:'🎮',b:'#facc15',t:'black'},{n:'Tech',i:'🔧',b:'#facc15',t:'black'},
    {n:'Livraison',i:'🛵',b:'black',t:'white'},{n:'Formation',i:'📚',b:'#16a34a',t:'white'},{n:'Logement',i:'🏠',b:'#facc15',t:'black'},
  ]
  return(
    <div style={{maxWidth:420,margin:'0 auto',background:'white',minHeight:'100vh',paddingBottom:70}}>
      <div style={{padding:12,fontWeight:'bold'}}>GELDS 🎁 KAMCHAT</div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:8,padding:10}}>
        {cats.map(c=><button key={c.n} style={{background:c.b,color:c.t,borderRadius:16,padding:12,border:'none',fontWeight:'bold'}}>{c.i} {c.n}</button>)}
      </div>
      <div style={{background:'black',margin:10,borderRadius:16,padding:10}}>
        <div style={{color:'white',fontSize:12,marginBottom:8}}>📺 Vidéos Yaoundé - bientôt</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
          {[1,2,3,4,5,6].map(i=><div key={i} style={{background:'#222',borderRadius:12,height:100,display:'flex',alignItems:'center',justifyContent:'center',color:'#666'}}>🎬 Vidéo {i}</div>)}
        </div>
      </div>
      <div style={{position:'fixed',bottom:0,left:0,right:0,maxWidth:420,margin:'0 auto',background:'white',borderTop:'1px solid #eee',display:'flex',justifyContent:'space-around',padding:10}}>
        <button onClick={()=>setTab('accueil')} style={{border:'none',background:'none',fontWeight:tab==='accueil'?'bold':'normal'}}>🏠 Accueil</button>
        <button onClick={()=>setTab('contacts')} style={{border:'none',background:'none'}}>👥 Contacts</button>
        <button onClick={()=>setTab('decouvrir')} style={{border:'none',background:'none'}}>🧭 Découvrir</button>
        <button onClick={()=>setTab('moi')} style={{border:'none',background:'none'}}>👤 Moi</button>
      </div>
    </div>
  )
      }
