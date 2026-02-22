import Link from 'next/link'

const properties = [
  {
    id: 1,
    title: 'Luxury Downtown Penthouse',
    address: '123 Park Avenue, Jersey City, NJ',
    city: 'Jersey City',
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
    city: 'Hoboken',
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
    city: 'Edison',
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
    city: 'Jersey City',
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
    city: 'New Brunswick',
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
    city: 'Jersey City',
    price: 5800,
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800'
  },
  {
    id: 7,
    title: 'Cozy Studio Apartment',
    address: '100 Main Street, Newark, NJ',
    city: 'Newark',
    price: 1800,
    type: 'rent',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
  },
  {
    id: 8,
    title: 'Spacious Family Townhouse',
    address: '250 Elm Drive, Elizabeth, NJ',
    city: 'Elizabeth',
    price: 2800,
    type: 'rent',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1900,
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800'
  },
  {
    id: 9,
    title: 'Modern Loft with City Views',
    address: '500 Washington Blvd, Jersey City, NJ',
    city: 'Jersey City',
    price: 4200,
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1350,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
  }
]

export default function Properties() {
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
              <Link href="/properties" className="active">Properties</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <div className="header-actions">
              <Link href="/admin" style={{color: 'var(--gray)', fontSize: '0.9rem'}}>Admin</Link>
              <Link href="/properties" className="btn btn-primary">View Listings</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Properties</h1>
          <p>Browse our exclusive collection of premium properties across New Jersey</p>
        </div>
      </section>

      {/* Properties Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '40px' }}>
            {/* Filters Sidebar */}
            <div className="admin-card" style={{ height: 'fit-content', position: 'sticky', top: '100px' }}>
              <h3 style={{ marginBottom: '20px' }}>Filters</h3>
              
              <div className="form-group">
                <label>Location</label>
                <select className="search-select" style={{ width: '100%' }}>
                  <option>All Locations</option>
                  <option>Jersey City</option>
                  <option>Hoboken</option>
                  <option>Newark</option>
                  <option>Edison</option>
                  <option>New Brunswick</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Property Type</label>
                <select className="search-select" style={{ width: '100%' }}>
                  <option>All Types</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Condo</option>
                  <option>Townhouse</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Bedrooms</label>
                <select className="search-select" style={{ width: '100%' }}>
                  <option>Any</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Price Range</label>
                <select className="search-select" style={{ width: '100%' }}>
                  <option>Any Price</option>
                  <option>$1,000 - $2,000</option>
                  <option>$2,000 - $3,000</option>
                  <option>$3,000 - $5,000</option>
                  <option>$5,000+</option>
                </select>
              </div>
              
              <button className="btn btn-primary" style={{ width: '100%' }}>Apply Filters</button>
            </div>
            
            {/* Property Grid */}
            <div>
              <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ color: 'var(--gray)' }}>Showing {properties.length} properties</p>
                <select className="search-select">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <h2>Can't Find What You're Looking For?</h2>
          <p>Our team is ready to help you find your perfect home. Contact us today!</p>
          <Link href="/contact" className="btn btn-secondary">Get In Touch</Link>
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
