import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Cleveland Renter</h3>
            <p className="footer-text">
              Professional property management serving Cleveland, Lakewood, and Cleveland Heights.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-text">
              <a href="tel:216-393-7779" className="footer-link">216-393-7779</a>
            </p>
            <p className="footer-text">
              <a href="mailto:info@clevelandrenter.com" className="footer-link">
                info@clevelandrenter.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Cleveland Renter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
