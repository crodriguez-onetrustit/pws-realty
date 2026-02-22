'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Listings() {
  const [listings, setListings] = useState([])
  const [filter, setFilter] = useState('all')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [beds, setBeds] = useState('all')

  useEffect(() => {
    fetch('/mc/listings')
      .then(r => r.json())
      .then(setListings)
      .catch(() => {})
  }, [])

  const filtered = listings.filter(p => {
    if (filter !== 'all' && p.type.toLowerCase() !== filter) return false
    if (beds !== 'all' && p.beds < parseInt(beds)) return false
    if (minPrice && p.price < parseInt(minPrice)) return false
    if (maxPrice && p.price > parseInt(maxPrice)) return false
    return true
  })

  return (
    <>
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
            <Link href="/apply">Apply</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="section">
        <h1 className="section-title">Available <span>Properties</span></h1>
        
        {/* Filters */}
        <div className="card" style={{maxWidth: '900px', margin: '0 auto 2rem'}}>
          <h3 style={{marginBottom: '1rem'}}>Search Filters</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem'}}>
            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Property Type</label>
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                style={{
                  width: '100%', padding: '0.75rem',
                  background: 'var(--dark)', border: '1px solid var(--gray)',
                  borderRadius: '8px', color: 'var(--white)'
                }}
              >
                <option value="all">All Types</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </div>
            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Min Price</label>
              <input 
                type="number"
                placeholder="$0"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                style={{
                  width: '100%', padding: '0.75rem',
                  background: 'var(--dark)', border: '1px solid var(--gray)',
                  borderRadius: '8px', color: 'var(--white)'
                }}
              />
            </div>
            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Max Price</label>
              <input 
                type="number"
                placeholder="$5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                style={{
                  width: '100%', padding: '0.75rem',
                  background: 'var(--dark)', border: '1px solid var(--gray)',
                  borderRadius: '8px', color: 'var(--white)'
                }}
              />
            </div>
            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Bedrooms</label>
              <select 
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
                style={{
                  width: '100%', padding: '0.75rem',
                  background: 'var(--dark)', border: '1px solid var(--gray)',
                  borderRadius: '8px', color: 'var(--white)'
                }}
              >
                <option value="all">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <p style={{textAlign: 'center', color: 'var(--gray)', marginBottom: '1.5rem'}}>
          {filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found
        </p>
        
        {filtered.length === 0 ? (
          <p style={{textAlign: 'center', color: 'var(--gray)', marginTop: '2rem'}}>
            No properties match your criteria. Try adjusting your filters.
          </p>
        ) : (
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto'}}>
            {filtered.map(property => (
              <div key={property.id} className="card" style={{padding: 0, overflow: 'hidden'}}>
                <div style={{
                  height: '200px',
                  backgroundImage: property.image ? `url(${property.image})` : 'linear-gradient(135deg, var(--gold) 0%, #8b7018 100%)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {!property.image && <span style={{fontSize: '3rem'}}>🏠</span>}
                </div>
                <div style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem'}}>
                    <h3 style={{fontSize: '1.2rem', margin: 0}}>{property.title}</h3>
                    {!property.available && (
                      <span style={{
                        background: 'var(--gray)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem'
                      }}>Rented</span>
                    )}
                  </div>
                  <p style={{color: 'var(--gray)', marginBottom: '1rem', fontSize: '0.9rem'}}>{property.address}</p>
                  <div style={{display: 'flex', gap: '1rem', marginBottom: '1rem', color: 'var(--gray)', fontSize: '0.9rem'}}>
                    <span>🛏 {property.beds} bd</span>
                    <span>🚿 {property.baths} ba</span>
                    <span>📐 {property.sqft} sqft</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{color: 'var(--gold)', fontSize: '1.5rem', fontWeight: 'bold'}}>
                      ${Number(property.price).toLocaleString()}/mo
                    </span>
                    <Link 
                      href={`/contact?property=${property.id}`}
                      className="btn"
                      style={{
                        background: property.available ? 'var(--gold)' : 'var(--gray)',
                        padding: '0.5rem 1rem',
                        fontSize: '0.9rem'
                      }}
                    >
                      {property.available ? 'Inquire' : 'Unavailable'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className="footer">
        <p>© 2026 Properties With Stephanie Realty. All rights reserved.</p>
      </footer>
    </>
  )
}
