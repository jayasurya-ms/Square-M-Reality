import React, { useState } from 'react'
import '../style/Navbar.css'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => setIsNavOpen(!isNavOpen)
  const closeNav = () => setIsNavOpen(false)

  return (
    <nav className='navbar-wrapper readex w-100 h-100'>
      {/* Hamburger icon now wrapped for better alignment */}
      <div className='mobile-menu-icon me-4' onClick={toggleNav}>
        <div className={`line ${isNavOpen ? 'active' : ''}`}></div>
        <div className={`line ${isNavOpen ? 'active' : ''}`}></div>
        <div className={`line ${isNavOpen ? 'active' : ''}`}></div>
      </div>

      <ul className={`nav-links-list readex w-100 ${isNavOpen ? 'mobile-open' : ''} z-20! `}>
        <li onClick={closeNav}><a href="/">Home</a></li>
        <li onClick={closeNav}><a href="real-estate">Real Estate</a></li>
        <li onClick={closeNav}><a href="/construction">Construction</a></li>
        <li onClick={closeNav}><a href="interior-designing">Interior Designing</a></li>
        <li onClick={closeNav}><a href="projects">Projects</a></li>
        <li onClick={closeNav}><a href="contact">Contact</a></li>
      </ul>
      
      {isNavOpen && <div className="nav-overlay" onClick={closeNav}></div>}
    </nav>
  )
}

export default Navbar