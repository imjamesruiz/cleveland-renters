import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { propertyOverview } from '../data/listings'
import './Home.css'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Find Your Dream Home Today</h1>
          <p className="hero-text">
            Discover quality rental properties in Cleveland, Lakewood, and Cleveland Heights. 
            Professional property management with a focus on your comfort and satisfaction.
          </p>
          <div className="hero-cta">
            <Link to="/listings" className="btn btn-primary">
              Explore Available Apartments
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Property Overview Section */}
      <section className="property-overview">
        <div className="container">
          <h2 className="section-title">Our Properties</h2>
          <div className="property-grid">
            {propertyOverview.map((property) => (
              <div key={property.id} className="property-card">
                <div className="property-card-content">
                  <h3 className="property-address">{property.address}</h3>
                  <p className="property-city">{property.city}</p>
                  <p className="property-price">{property.priceRange}</p>
                  <Link 
                    to="/listings" 
                    className="btn btn-outline property-link"
                  >
                    View Units
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informational Section */}
      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            <div id="available-apartments" className="info-block">
              <h3 className="info-title">Available Apartments</h3>
              <p className="info-text">
                Browse our selection of carefully maintained rental units across Cleveland, 
                Lakewood, and Cleveland Heights. Each property is professionally managed 
                and ready for you to call home.
              </p>
              <Link to="/listings" className="info-link">
                View All Listings →
              </Link>
            </div>

            <div id="application-process" className="info-block">
              <h3 className="info-title">Application Process</h3>
              <p className="info-text">
                Our application process is straightforward and transparent. Submit your 
                application online, and our team will review it promptly. We'll guide you 
                through each step to make your move as smooth as possible.
              </p>
              <Link to="/contact" className="info-link">
                Get Started →
              </Link>
            </div>

            <div id="faq" className="info-block">
              <h3 className="info-title">FAQ</h3>
              <p className="info-text">
                Have questions? We're here to help. Contact us for information about 
                application requirements, lease terms, pet policies, and more. Our team 
                is ready to assist you.
              </p>
              <Link to="/contact" className="info-link">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
