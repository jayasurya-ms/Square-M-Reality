import React, { useState } from 'react'
import '../style/Navbar.css'

const Navbar = ({clr}) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => setIsNavOpen(!isNavOpen)
  const closeNav = () => setIsNavOpen(false)

  const a_clr = clr? clr : 'white'

  return (
    <nav className='navbar-wrapper readex w-100 h-100'>
      {/* Hamburger icon now wrapped for better alignment */}
      <div className='mobile-menu-icon me-4' onClick={toggleNav}>
        <div className={`line ${isNavOpen ? 'active' : ''}`}></div>
        <div className={`line ${isNavOpen ? 'active' : ''}`}></div>
        <div className={`line ${isNavOpen ? 'active' : ''}`}></div>
      </div>

      <ul className={`nav-links-list readex w-100 ${isNavOpen ? 'mobile-open' : ''} z-20! `}>
        <li onClick={closeNav}><a style={{color:a_clr}} href="/">Home</a></li>
        <li onClick={closeNav}><a style={{color:a_clr}} href="/real-estate">Real Estate</a></li>
        <li onClick={closeNav}><a style={{color:a_clr}} href="/construction">Construction</a></li>
        <li onClick={closeNav}><a style={{color:a_clr}} href="/interior-designing">Interior Designing</a></li>
        <li onClick={closeNav}><a style={{color:a_clr}} href="/projects">Projects</a></li>
        <li onClick={closeNav}><a style={{color:a_clr}} href="/contact">Contact</a></li>
      </ul>
      
      {isNavOpen && <div className="nav-overlay" onClick={closeNav}></div>}
    </nav>
  )
}

export default Navbar