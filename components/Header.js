'use client'
import Link from 'next/link'

export default function Header(){
  return (
    <header className='header container'>
      <div className='brand'>Pinnacl <span style={{color:'var(--accent)'}}>Properties</span></div>
      <nav className='nav'>
        <Link href='#'>Listings</Link>
        <Link href='#'>Sell</Link>
        <Link href='#'>About</Link>
        <button className='btn'>Contact</button>
      </nav>
    </header>
  )
}
