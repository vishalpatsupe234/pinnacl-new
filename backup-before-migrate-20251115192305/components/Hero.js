export default function Hero(){
  return (
    <section className='hero'>
      <div className='hero-left container'>
        <h1 style={{fontSize:36,margin:0}}>Buy & Sell Premium Properties — <span style={{color:'var(--accent)'}}>White-Glove Service</span></h1>
        <p style={{color:'var(--muted)',marginTop:12}}>We help discerning buyers find the perfect home and sellers get the top value. Local expertise, trusted network.</p>
        <div className='hero-cta'>
          <a className='btn' href='#'>View Listings</a>
          <a className='btn' href='#'>Schedule Visit</a>
        </div>
      </div>
      <div style={{width:420,height:220,marginRight:20,borderRadius:12,background:'linear-gradient(135deg,#f6efe0,#efe2d0)'}} />
    </section>
  )
}
