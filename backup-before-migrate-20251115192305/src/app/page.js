import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <section style={{padding:'48px 20px',maxWidth:1100,margin:'0 auto'}}>
        <h2 style={{fontSize:24,marginBottom:12}}>Featured Properties</h2>
        <p style={{color:'#555',marginBottom:24}}>Curated listings for discerning buyers — premium locations, verified listings, white-glove service.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:20}}>
          <div style={{border:'1px solid #eee',borderRadius:12,overflow:'hidden',boxShadow:'0 6px 18px rgba(10,10,10,0.06)'}}>
            <div style={{height:160,background:'linear-gradient(135deg,#f5f0e6,#efe8df)'}} />
            <div style={{padding:14}}>
              <h3 style={{margin:0,fontSize:18}}>Luxury 3BHK - South Mumbai</h3>
              <p style={{margin:'8px 0',color:'#666'}}>Sea view, concierge, 24/7 security</p>
              <strong>₹ 2.8 Cr</strong>
            </div>
          </div>
          <div style={{border:'1px solid #eee',borderRadius:12,overflow:'hidden',boxShadow:'0 6px 18px rgba(10,10,10,0.06)'}}>
            <div style={{height:160,background:'linear-gradient(135deg,#eef7f9,#e6f0f6)'}} />
            <div style={{padding:14}}>
              <h3 style={{margin:0,fontSize:18}}>Modern 2BHK - Andheri West</h3>
              <p style={{margin:'8px 0',color:'#666'}}>Smart home, gym access</p>
              <strong>₹ 85 Lakh</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
