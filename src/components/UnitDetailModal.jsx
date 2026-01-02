import { useState, useEffect } from 'react'
import './UnitDetailModal.css'

function UnitDetailModal({ listing, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [listing])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  if (!listing) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === listing.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? listing.images.length - 1 : prev - 1
    )
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        {/* Image Carousel */}
        <div className="modal-image-section">
          <div className="image-carousel">
            <img 
              src={listing.images[currentImageIndex]} 
              alt={`${listing.propertyAddress}, ${listing.city} ${listing.zipCode} ${listing.unitNumber}`}
              className="carousel-image"
            />
            {listing.images.length > 1 && (
              <>
                <button 
                  className="carousel-btn carousel-btn-prev" 
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button 
                  className="carousel-btn carousel-btn-next" 
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  ›
                </button>
                <div className="carousel-indicators">
                  {listing.images.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Unit Details */}
        <div className="modal-details">
          <h2 className="modal-title">
            {listing.propertyAddress}, {listing.city} {listing.zipCode}
          </h2>
          <p className="modal-unit">{listing.unitNumber !== "N/A" ? listing.unitNumber : ""}</p>

          <div className="specs-grid">
            <div className="spec-item">
              <span className="spec-label">Bedrooms</span>
              <span className="spec-value">{listing.hasDen ? `${listing.bedrooms} + Den` : listing.bedrooms}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Bathrooms</span>
              <span className="spec-value">{listing.bathrooms}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Square Feet</span>
              <span className="spec-value">{listing.squareFeet.toLocaleString()}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Monthly Rent</span>
              <span className="spec-value">${listing.rent.toLocaleString()}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Availability</span>
              <span className="spec-value">{formatDate(listing.availabilityDate)}</span>
            </div>
          </div>

          <div className="modal-actions">
            <a 
              href={listing.zillowLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary modal-btn"
            >
              View on Zillow
            </a>
            <button 
              onClick={onClose}
              className="btn btn-outline modal-btn"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnitDetailModal
