import Link from 'next/link'

export default function About() {
  return (
    <main>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link href="/" className="logo">
              PWS <span>Realty</span>
            </Link>
            <nav className="nav">
              <Link href="/">Home</Link>
              <Link href="/properties">Properties</Link>
              <Link href="/about" className="active">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <div className="header-actions">
              <Link href="/properties" className="btn btn-primary">View Listings</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about PWS Realty and our commitment to excellence</p>
        </div>
      </section>

      {/* About Content */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Story</h2>
              <p>Founded by Stephanie Munoz, PWS Realty has been serving the New Jersey real estate market for over 15 years. Our mission is simple: to provide exceptional real estate services while making the home buying and renting process as smooth as possible.</p>
              <p>What started as a small boutique agency has grown into one of New Jersey's most trusted real estate companies. We attribute our success to our unwavering commitment to client satisfaction and our deep understanding of the local market.</p>
              <p>At PWS Realty, we believe that every client deserves personalized attention and expert guidance. Whether you're buying your first home, selling a property, or looking to invest, our team is here to help you achieve your real estate goals.</p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800" alt="Our office" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2500+</span>
              <span className="stat-label">Properties Leased</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">$150M</span>
              <span className="stat-label">Transaction Volume</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The dedicated professionals behind PWS Realty</p>
          </div>
          <div className="property-grid">
            <div className="property-card" style={{ textAlign: 'center' }}>
              <div className="property-image" style={{ height: '300px' }}>
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" alt="Stephanie Munoz" />
              </div>
              <div className="property-content">
                <h3 className="property-title">Stephanie Munoz</h3>
                <p style={{ color: 'var(--secondary)', fontWeight: '600' }}>Founder & Principal Broker</p>
                <p className="property-address">15+ years in NJ real estate</p>
              </div>
            </div>
            <div className="property-card" style={{ textAlign: 'center' }}>
              <div className="property-image" style={{ height: '300px' }}>
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" alt="Team Member" />
              </div>
              <div className="property-content">
                <h3 className="property-title">David Chen</h3>
                <p style={{ color: 'var(--secondary)', fontWeight: '600' }}>Senior Agent</p>
                <p className="property-address">10+ years experience</p>
              </div>
            </div>
            <div className="property-card" style={{ textAlign: 'center' }}>
              <div className="property-image" style={{ height: '300px' }}>
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" alt="Team Member" />
              </div>
              <div className="property-content">
                <h3 className="property-title">Maria Rodriguez</h3>
                <p style={{ color: 'var(--secondary)', fontWeight: '600' }}>Property Manager</p>
                <p className="property-address">Specialist in rentals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <h2>Ready to Work With Us?</h2>
          <p>Let's discuss your real estate needs and find your perfect home.</p>
          <Link href="/contact" className="btn btn-secondary">Contact Us Today</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="logo" style={{ color: 'white', marginBottom: '20px' }}>
                PWS <span>Realty</span>
              </h3>
              <p>New Jersey's premier real estate agency.</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <Link href="/properties">Properties</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <p>📞 (786) 925-2344</p>
              <p>📧 SMunoz@pwsrealty.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 PWS Realty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
