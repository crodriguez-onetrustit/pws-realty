import Link from 'next/link'

// Sample property data
const properties = [
  {
    id: 1,
    title: 'Luxury Downtown Penthouse',
    address: '123 Park Avenue, Jersey City, NJ',
    price: 4500,
    type: 'rent',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2200,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'
  },
  {
    id: 2,
    title: 'Modern Waterfront Loft',
    address: '456 River Road, Hoboken, NJ',
    price: 3800,
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1600,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
  },
  {
    id: 3,
    title: 'Elegant Suburban Estate',
    address: '789 Oak Avenue, Edison, NJ',
    price: 5200,
    type: 'rent',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
  },
  {
    id: 4,
    title: 'Historic Brownstone',
    address: '321 Summit Ave, Jersey City, NJ',
    price: 4200,
    type: 'rent',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
  },
  {
    id: 5,
    title: 'Garden Colonial Home',
    address: '555 Maple Lane, New Brunswick, NJ',
    price: 3500,
    type: 'rent',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'
  },
  {
    id: 6,
    title: 'Luxury High-Rise Condo',
    address: '888 Harbor View, Jersey City, NJ',
    price: 5800,
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800'
  }
]

const stats = [
  { number: '2500+', label: 'Properties Leased' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Expert Agents' },
  { number: '$150M', label: 'Transaction Volume' }
]

const services = [
  {
    icon: '🏠',
    title: 'Buy a Home',
    description: 'Over 1 million+ homes for sale available. We\'ll match you with your dream home.'
  },
  {
    icon: '🔑',
    title: 'Rent a Home',
    description: 'Find the perfect rental property from our extensive collection of quality homes.'
  },
  {
    icon: '💰',
    title: 'Sell a Home',
    description: 'Get the best value for your property with our expert marketing and sales team.'
  }
]

export default function Home() {
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
              <Link href="/" className="active">Home</Link>
              <Link href="/properties">Properties</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <div className="header-actions">
              <Link href="/properties" className="btn btn-primary">View Listings</Link>
              <div className="mobile-toggle">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              ✨ New Jersey's Premier Real Estate Agency
            </div>
            <h1>Find Your Perfect <span>Dream Home</span></h1>
            <p>Discover exceptional properties with personalized service. Let us help you find exactly what you're looking for.</p>
            
            {/* Search Box */}
            <div className="search-box">
              <div className="search-tabs">
                <div className="search-tab active">For Rent</div>
                <div className="search-tab">For Sale</div>
                <div className="search-tab">Sell</div>
              </div>
              <form className="search-form">
                <input type="text" className="search-input" placeholder="City, neighborhood, or address" />
                <select className="search-select">
                  <option>Property Type</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Condo</option>
                  <option>Townhouse</option>
                </select>
                <select className="search-select">
                  <option>Bedrooms</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                </select>
                <select className="search-select">
                  <option>Price Range</option>
                  <option>$1,000 - $2,000</option>
                  <option>$2,000 - $3,000</option>
                  <option>$3,000 - $5,000</option>
                  <option>$5,000+</option>
                </select>
                <button type="submit" className="search-btn">
                  🔍 Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Properties</h2>
            <p>Discover our handpicked selection of premium properties in New Jersey</p>
          </div>
          <div className="property-grid">
            {properties.map((property) => (
              <div className="property-card" key={property.id}>
                <div className="property-image">
                  <img src={property.image} alt={property.title} />
                  <span className={`property-badge ${property.type}`}>
                    For {property.type === 'rent' ? 'Rent' : 'Sale'}
                  </span>
                </div>
                <div className="property-content">
                  <div className="property-price">
                    ${property.price.toLocaleString()}<span>/month</span>
                  </div>
                  <h3 className="property-title">{property.title}</h3>
                  <p className="property-address">📍 {property.address}</p>
                  <div className="property-features">
                    <span className="property-feature">🛏 {property.bedrooms} Beds</span>
                    <span className="property-feature">🚿 {property.bathrooms} Baths</span>
                    <span className="property-feature">📐 {property.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/properties" className="btn btn-primary">View All Properties</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" style={{ background: 'var(--gray-lighter)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive real estate solutions tailored to your needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href="/contact" className="btn btn-outline">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Welcome to PWS Realty</h2>
              <p>For over 15 years, PWS Realty has been helping clients find their perfect homes across New Jersey. Our commitment to exceptional service and deep local expertise sets us apart.</p>
              <p>We believe that finding a home should be an exciting journey, not a stressful experience. Our team of dedicated professionals is here to guide you every step of the way.</p>
              <Link href="/about" className="btn btn-primary">Learn More About Us</Link>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800" alt="Modern living room" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <h2>Ready to Find Your Dream Home?</h2>
          <p>Let our expert team help you discover the perfect property for you and your family.</p>
          <Link href="/contact" className="btn btn-secondary">Get In Touch Today</Link>
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
              <p>New Jersey's premier real estate agency. We're committed to helping you find your perfect home.</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <Link href="/properties">Properties</Link>
              <Link href="/about">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <Link href="/contact">Buy a Home</Link>
              <Link href="/contact">Rent a Home</Link>
              <Link href="/contact">Sell a Home</Link>
              <Link href="/contact">Property Management</Link>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <p>📞 (786) 925-2344</p>
              <p>📧 SMunoz@pwsrealty.com</p>
              <p>📍 New Jersey, USA</p>
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
