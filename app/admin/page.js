'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Admin() {
  const [listings, setListings] = useState([])
  const [form, setForm] = useState({
    title: '', address: '', price: '', beds: '', baths: '', sqft: '', type: 'Apartment', image: '', available: true
  })
  const [editing, setEditing] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    fetch('/mc/listings')
      .then(r => r.json())
      .then(setListings)
      .catch(() => setMessage({ type: 'error', text: 'Could not load listings' }))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const method = editing ? 'PUT' : 'POST'
    const body = editing ? { ...form, id: editing } : form
    
    try {
      const res = await fetch('/mc/listings', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const data = await res.json()
      if (data.success) {
        setMessage({ type: 'success', text: editing ? 'Listing updated!' : 'Listing added!' })
        const refreshed = await fetch('/mc/listings').then(r => r.json())
        setListings(refreshed)
        resetForm()
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to save listing' })
    }
  }

  const handleEdit = (listing) => {
    setForm(listing)
    setEditing(listing.id)
    window.scrollTo(0, 0)
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this listing?')) return
    try {
      await fetch(`/mc/listings?id=${id}`, { method: 'DELETE' })
      setListings(listings.filter(l => l.id !== id))
      setMessage({ type: 'success', text: 'Listing deleted!' })
    } catch {
      setMessage({ type: 'error', text: 'Failed to delete' })
    }
  }

  const resetForm = () => {
    setForm({ title: '', address: '', price: '', beds: '', baths: '', sqft: '', type: 'Apartment', image: '', available: true })
    setEditing(null)
  }

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="logo">PWS <span>Realty</span></div>
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/listings">View Site</Link>
          </nav>
        </div>
      </header>

      <section className="section">
        <h1 className="section-title">Listing <span>Manager</span></h1>
        
        {message && (
          <div style={{
            padding: '1rem', marginBottom: '1rem', borderRadius: '8px',
            background: message.type === 'success' ? 'rgba(76,175,80,0.2)' : 'rgba(244,67,54,0.2)',
            color: message.type === 'success' ? '#4caf50' : '#f44336'
          }}>
            {message.text}
          </div>
        )}

        {/* Form */}
        <div className="card" style={{maxWidth: '600px', margin: '0 auto 2rem'}}>
          <h2 style={{color: 'var(--gold)', marginBottom: '1rem'}}>
            {editing ? 'Edit Listing' : 'Add New Listing'}
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
              <div style={{gridColumn: '1 / -1'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Title *</label>
                <input type="text" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required
                  style={{width: '100%', padding: '0.75rem', background: 'var(--dark)', border: '1px solid var(--gray)', borderRadius: '8px', color: 'var(--white)'}} />
              </div>
              
              <div style={{gridColumn: '1 / -1'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Address *</label>
                <input type="text" value={form.address} onChange={e => setForm({...form, address: e.target.value})} required
                  style={{width: '100%', padding: '0.75rem', background: 'var(--dark)', border: '1px solid var(--gray)', borderRadius: '8px', color: 'var(--white)'}} />
              </div>
              
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Monthly Rent *</label>
                <input type="number" value={form.price} onChange={e => setForm({...form, price: e.target.value})} required
                  style={{width: '100%', padding: '0.75rem', background: 'var(--dark)', border: '1px solid var(--gray)', borderRadius: '8px', color: 'var(--white)'}} />
              </div>
              
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Property Type</label>
                <select value={form.type} onChange={e => setForm({...form, type: e.target.value})}
                  style={{width: '100%', padding: '0.75rem', background: 'var(--dark)', border: '1px solid var(--gray)', borderRadius: '8px', color: 'var(--white)'}}>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Condo">Condo</option>
                  <option value="Townhouse">Townhouse</option>
                </select>
              </div>
              
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Bedrooms</label>
                <input type="number" value={form.beds} onChange={e => setForm({...form, beds: e.target.value})}
                  style={{width: '100%', padding: '0.75rem', background: 'var(--dark)', border: '1px solid var(--gray)', borderRadius: '8px', color: 'var(--white)'}} />
              </div>
              
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Bathrooms</label>
                <input type="number" step="0.5" value={form.baths} onChange={e => setForm({...form, baths: e.target.value})}
                  style={{width: '100%', padding: '0.75rem', background: 'var(--dark)', border: '1px solid var(--gray)', borderRadius: '8px', color: 'var(--white)'}} />
              </div>
              
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Sq Ft</label>
                <input type="number" value={form.sqft} onChange={e => setForm({...form, sqft: e.target.value})}
                  style={{width: '100%', padding: '0.75rem', background: 'var(--dark)', border: '1px solid var(--gray)', borderRadius: '8px', color: 'var(--white)'}} />
              </div>
              
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Image URL</label>
                <input type="url" value={form.image} onChange={e => setForm({...form, image: e.target.value})} placeholder="https://..."
                  style={{width: '100%', padding: '0.75rem', background: 'var(--dark)', border: '1px solid var(--gray)', borderRadius: '8px', color: 'var(--white)'}} />
              </div>
              
              <div style={{gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <input type="checkbox" checked={form.available} onChange={e => setForm({...form, available: e.target.checked})} />
                <span style={{color: 'var(--white)'}}>Available for rent</span>
              </div>
            </div>
            
            <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
              <button type="submit" className="btn" style={{flex: 1}}>
                {editing ? 'Update Listing' : 'Add Listing'}
              </button>
              {editing && (
                <button type="button" onClick={resetForm} className="btn" style={{background: 'var(--gray)'}}>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Listings Table */}
        <div className="card" style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{color: 'var(--gold)', marginBottom: '1rem'}}>Current Listings ({listings.length})</h2>
          
          {listings.length === 0 ? (
            <p style={{color: 'var(--gray)', textAlign: 'center'}}>No listings yet. Add your first property above!</p>
          ) : (
            <div style={{overflowX: 'auto'}}>
              <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                  <tr style={{borderBottom: '1px solid var(--gray)'}}>
                    <th style={{textAlign: 'left', padding: '0.75rem', color: 'var(--gold)'}}>Property</th>
                    <th style={{textAlign: 'left', padding: '0.75rem', color: 'var(--gold)'}}>Price</th>
                    <th style={{textAlign: 'left', padding: '0.75rem', color: 'var(--gold)'}}>Details</th>
                    <th style={{textAlign: 'left', padding: '0.75rem', color: 'var(--gold)'}}>Status</th>
                    <th style={{textAlign: 'right', padding: '0.75rem', color: 'var(--gold)'}}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.map(listing => (
                    <tr key={listing.id} style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                      <td style={{padding: '0.75rem'}}>
                        <div style={{fontWeight: 'bold'}}>{listing.title}</div>
                        <div style={{fontSize: '0.85rem', color: 'var(--gray)'}}>{listing.address}</div>
                      </td>
                      <td style={{padding: '0.75rem', color: 'var(--gold)', fontWeight: 'bold'}}>
                        ${Number(listing.price).toLocaleString()}/mo
                      </td>
                      <td style={{padding: '0.75rem', color: 'var(--gray)', fontSize: '0.9rem'}}>
                        {listing.beds}bd • {listing.baths}ba • {listing.sqft}sqft
                      </td>
                      <td style={{padding: '0.75rem'}}>
                        <span style={{
                          padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem',
                          background: listing.available ? 'rgba(76,175,80,0.2)' : 'rgba(255,255,255,0.1)',
                          color: listing.available ? '#4caf50' : 'var(--gray)'
                        }}>
                          {listing.available ? 'Available' : 'Rented'}
                        </span>
                      </td>
                      <td style={{padding: '0.75rem', textAlign: 'right'}}>
                        <button onClick={() => handleEdit(listing)} style={{marginRight: '0.5rem', background: 'var(--gold)', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer'}}>
                          Edit
                        </button>
                        <button onClick={() => handleDelete(listing.id)} style={{background: '#f44336', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', color: 'white'}}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Properties With Stephanie Realty. All rights reserved.</p>
      </footer>
    </>
  )
}
