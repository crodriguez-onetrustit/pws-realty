'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('/mc/listings')
      .then(r => r.json())
      .then(data => setListings(data.filter(l => l.available).slice(0, 6)))
      .catch(() => {})
  }, [])

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <Link href="/" className="logo">PWS <span>Realty</span></Link>
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/listings">Properties</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <Link href="/listings" className="btn-header">View Listings</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-luxury">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-badge">Discover Luxury Living Today • Discover Luxury Living Today •</div>
          <h1>Experience a Smarter Search</h1>
          <p className="hero-subtitle">Where Your Preferences Meet Expertise</p>
          <div className="hero-cta">
            <Link href="/listings" className="btn-luxury">Explore Properties</Link>
            <Link href="/contact" className="btn-luxury-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">984</span>
            <span className="stat-label">Properties Leased</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">99%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Expert Agents</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">$98M</span>
            <span className="stat-label">Transaction Volume</span>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-luxury">
        <div className="container">
          <div className="section-header">
            <h2>Our Premium Properties</h2>
            <p>Discover Smart Investments in New Jersey</p>
          </div>
          
          <div className="property-grid">
            {listings.map(listing => (
              <div key={listing.id} className="property-card-luxury">
                <div className="property-image-luxury">
                  {listing.image ? (
                    <img src={listing.image} alt={listing.title} />
                  ) : (
                    <div className="property-placeholder">🏠</div>
                  )}
                  <div className="property-badge-luxury">For Rent</div>
                </div>
                <div className="property-content-luxury">
                  <h3>{listing.title}</h3>
                  <p className="property-address">{listing.address}</p>
                  <div className="property-features">
                    <span>🛏 {listing.beds} Bedrooms</span>
                    <span>🚿 {listing.baths} Bathrooms</span>
                    <span>📐 {listing.sqft} Sq Ft</span>
                  </div>
                  <div className="property-footer">
                    <span className="property-price-luxury">${Number(listing.price).toLocaleString()}/mo</span>
                    <Link href={`/contact?property=${listing.id}`} className="btn-property">Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="section-cta">
            <Link href="/listings" className="btn-luxury">View All Properties</Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>We're Precision, Passion, Purpose</h2>
              <p>In a market saturated with noise, we choose the clarity. Where others see transactions, we see transformations.</p>
              <p>Our commitment extends beyond closing deals — we're architects of lifestyles and dreams.</p>
              <Link href="/about" className="btn-luxury-outline">Learn More</Link>
            </div>
            <div className="about-image">
              <div className="about-image-placeholder">
                <span>Stephanie Munoz</span>
                <p>Principal Broker</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-luxury services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Premium Approach</h2>
            <p>A Comprehensive Methodology for Discerning Clients</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <span className="service-number">01</span>
              <h3>Exclusive Portfolio</h3>
              <p>Access to off-market properties and exclusive listings not available elsewhere.</p>
            </div>
            <div className="service-card">
              <span className="service-number">02</span>
              <h3>Trusted Expertise</h3>
              <p>Decades of experience in luxury markets across New Jersey.</p>
            </div>
            <div className="service-card">
              <span className="service-number">03</span>
              <h3>Personalized Service</h3>
              <p>Tailored strategies for every client's unique vision and needs.</p>
            </div>
            <div className="service-card">
              <span className="service-number">04</span>
              <h3>Market Intelligence</h3>
              <p>Data-driven insights and strategic guidance for smart investments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Are You Ready to Find Your Dream Home?</h2>
          <p>Let's discuss your real estate goals today.</p>
          <Link href="/contact" className="btn-luxury">Get In Touch</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-luxury">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>PWS Realty</h4>
              <p>New Jersey's premier property management and real estate company.</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <Link href="/listings">Properties</Link>
              <Link href="/about">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <p>786-925-2344</p>
              <p>SMunoz@pwsrealty.com</p>
              <p>New Jersey, USA</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Properties With Stephanie Realty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
