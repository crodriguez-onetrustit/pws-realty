'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('/mc/listings')
      .then(r => r.json())
      .then(data => setListings(data.filter(l => l.available).slice(0, 3)))
      .catch(() => {})
  }, [])

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            PWS <span>Realty</span>
          </div>
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/listings">Listings</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div>
          <h1>New Jersey's Trusted<br/><span>Real Estate Partner</span></h1>
          <p>Properties With Stephanie Realty - Your trusted partner for rentals and property management in New Jersey.</p>
          <Link href="/listings" className="btn">View Available Rentals</Link>
        </div>
      </section>

      {/* Featured Listings */}
      {listings.length > 0 && (
        <section className="section">
          <h2 className="section-title">Featured <span>Properties</span></h2>
          <p style={{textAlign: 'center', color: 'var(--gray)', marginBottom: '2rem'}}>
            Hand-picked rentals available now
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto'}}>
            {listings.map(listing => (
              <div key={listing.id} className="card" style={{padding: 0, overflow: 'hidden'}}>
                <div style={{
                  height: '200px',
                  backgroundImage: listing.image ? `url(${listing.image})` : 'linear-gradient(135deg, var(--gold) 0%, #8b7018 100%)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {!listing.image && <span style={{fontSize: '3rem'}}>🏠</span>}
                </div>
                <div style={{padding: '1.5rem'}}>
                  <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>{listing.title}</h3>
                  <p style={{color: 'var(--gray)', marginBottom: '1rem', fontSize: '0.9rem'}}>{listing.address}</p>
                  <div style={{display: 'flex', gap: '1rem', marginBottom: '1rem', color: 'var(--gray)', fontSize: '0.9rem'}}>
                    <span>🛏 {listing.beds} bd</span>
                    <span>🚿 {listing.baths} ba</span>
                    <span>📐 {listing.sqft} sqft</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{color: 'var(--gold)', fontSize: '1.5rem', fontWeight: 'bold'}}>
                      ${Number(listing.price).toLocaleString()}/mo
                    </span>
                    <Link href="/listings" className="btn" style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}>
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <Link href="/listings" className="btn" style={{display: 'inline-block'}}>
              View All Listings
            </Link>
          </div>
        </section>
      )}

      {/* Services Preview */}
      <section className="section">
        <h2 className="section-title">Our <span>Services</span></h2>
        <div className="grid-3">
          <div className="card">
            <h3>For Renters</h3>
            <p>Find your perfect rental property with our comprehensive search and application process.</p>
          </div>
          <div className="card">
            <h3>For Landlords</h3>
            <p>Full-service property management to maximize your investment returns.</p>
          </div>
          <div className="card">
            <h3>Market Analysis</h3>
            <p>Free comprehensive market analysis for property owners and investors.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{textAlign: 'center'}}>
        <h2 className="section-title">Ready to Get <span>Started?</span></h2>
        <p style={{color: 'var(--gray)', marginBottom: '2rem'}}>Contact Stephanie today for personalized service.</p>
        <Link href="/contact" className="btn">Contact Us</Link>
      </section>

      <footer className="footer">
        <p>© 2026 Properties With Stephanie Realty. All rights reserved.</p>
      </footer>
    </>
  )
}
