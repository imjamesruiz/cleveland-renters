import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      // Navigate to home first, then scroll
      window.location.href = `/#${sectionId}`
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">Cleveland Renter</span>
        </Link>
        
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') && location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/listings" 
            className={`nav-link ${isActive('/listings') ? 'active' : ''}`}
          >
            Available Apartments
          </Link>
          <a 
            href="#application-process" 
            className="nav-link"
            onClick={(e) => scrollToSection(e, 'application-process')}
          >
            Application Process
          </a>
          <a 
            href="#faq" 
            className="nav-link"
            onClick={(e) => scrollToSection(e, 'faq')}
          >
            FAQ
          </a>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact Us
          </Link>
        </nav>

        <div className="header-phone">
          <a href="tel:216-393-7779" className="phone-link">
            216-393-7779
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
