import { useState } from 'react'
import { listings } from '../data/listings'
import UnitDetailModal from '../components/UnitDetailModal'
import './ExploreListings.css'

function ExploreListings() {
  const [selectedListing, setSelectedListing] = useState(null)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="listings-page">
      <div className="listings-container">
        <div className="listings-header">
          <h1 className="listings-title">Available Apartments</h1>
          <p className="listings-subtitle">
            Browse our selection of rental units in Cleveland, Lakewood, and Cleveland Heights
          </p>
        </div>

        <div className="listings-grid">
          {listings.map((listing) => (
            <div key={listing.id} className="listing-card">
              {/* Image Carousel */}
              <div className="listing-image-container">
                <img 
                  src={listing.images[0]} 
                  alt={`${listing.propertyAddress}, ${listing.city} ${listing.zipCode} ${listing.unitNumber}`}
                  className="listing-image"
                />
              </div>

              <div className="listing-content">
                <h3 className="listing-address">
                  {listing.propertyAddress}, {listing.city} {listing.zipCode}
                </h3>
                <p className="listing-unit">{listing.unitNumber !== "N/A" ? listing.unitNumber : ""}</p>

                <div className="listing-specs">
                  <div className="spec">
                    <span className="spec-icon">🛏️</span>
                    <span>
                      {listing.hasDen ? `${listing.bedrooms} + Den` : listing.bedrooms} {listing.bedrooms === 1 && !listing.hasDen ? 'Bed' : 'Beds'}
                    </span>
                  </div>
                  <div className="spec">
                    <span className="spec-icon">🚿</span>
                    <span>{listing.bathrooms} {listing.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
                  </div>
                  <div className="spec">
                    <span className="spec-icon">📐</span>
                    <span>{listing.squareFeet.toLocaleString()} sq ft</span>
                  </div>
                </div>

                <div className="listing-price">
                  <span className="price-amount">${listing.rent.toLocaleString()}</span>
                  <span className="price-period">/month</span>
                </div>

                <div className="listing-availability">
                  Available: {formatDate(listing.availabilityDate)}
                </div>

                <div className="listing-actions">
                  <button 
                    className="btn btn-primary listing-btn"
                    onClick={() => setSelectedListing(listing)}
                  >
                    View Details
                  </button>
                  <a 
                    href={listing.zillowLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline listing-btn"
                  >
                    View on Zillow
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedListing && (
        <UnitDetailModal 
          listing={selectedListing} 
          onClose={() => setSelectedListing(null)} 
        />
      )}
    </div>
  )
}

export default ExploreListings
