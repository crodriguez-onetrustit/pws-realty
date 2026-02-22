'use client'

import { useState } from 'react'
import Link from 'next/link'

// Metadata must be in a separate file for client components
// or use the pages router approach

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    
    try {
      const res = await fetch('/mc/contact-messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (data.success) {
        setStatus({ type: 'success', text: data.message })
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus({ type: 'error', text: data.error || 'Something went wrong' })
      }
    } catch (err) {
      setStatus({ type: 'error', text: 'Could not connect to server' })
    }
    setLoading(false)
  }

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
        <h1 className="section-title">Contact <span>Us</span></h1>
        
        <div style={{maxWidth: '600px', margin: '0 auto'}}>
          <div className="card">
            <h2 style={{color: 'var(--gold)', marginBottom: '1.5rem'}}>Get In Touch</h2>
            
            <p style={{marginBottom: '1rem'}}>
              <strong>Phone:</strong> <a href="tel:+17869252344" style={{color: 'var(--gold)'}}>786-925-2344</a>
            </p>
            <p style={{marginBottom: '1rem'}}>
              <strong>Email:</strong> <a href="mailto:SMunoz@pwsrealty.com" style={{color: 'var(--gold)'}}>SMunoz@pwsrealty.com</a>
            </p>
            <p style={{marginBottom: '1.5rem'}}>
              <strong>Office:</strong> New Jersey, USA
            </p>
            
            <hr style={{border: 'none', borderTop: '1px solid var(--gray)', margin: '1.5rem 0'}} />
            
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem'}}>Send a Message</h3>
            
            {status && (
              <div style={{
                padding: '1rem',
                marginBottom: '1rem',
                borderRadius: '8px',
                background: status.type === 'success' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)',
                color: status.type === 'success' ? '#4caf50' : '#f44336',
                textAlign: 'center'
              }}>
                {status.text}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div style={{marginBottom: '1rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  style={{
                    width: '100%', padding: '0.75rem', 
                    background: 'var(--dark)', border: '1px solid var(--gray)', 
                    borderRadius: '8px', color: 'var(--white)'
                  }} 
                />
              </div>
              
              <div style={{marginBottom: '1rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Email *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  style={{
                    width: '100%', padding: '0.75rem', 
                    background: 'var(--dark)', border: '1px solid var(--gray)', 
                    borderRadius: '8px', color: 'var(--white)'
                  }} 
                />
              </div>

              <div style={{marginBottom: '1rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  style={{
                    width: '100%', padding: '0.75rem', 
                    background: 'var(--dark)', border: '1px solid var(--gray)', 
                    borderRadius: '8px', color: 'var(--white)'
                  }} 
                />
              </div>
              
              <div style={{marginBottom: '1rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Subject *</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                  style={{
                    width: '100%', padding: '0.75rem', 
                    background: 'var(--dark)', border: '1px solid var(--gray)', 
                    borderRadius: '8px', color: 'var(--white)'
                  }}
                >
                  <option value="">Select a topic...</option>
                  <option value="rental inquiry">I'm looking to rent</option>
                  <option value="list property">I have a property to rent</option>
                  <option value="property management">Property Management</option>
                  <option value="general">General Question</option>
                </select>
              </div>
              
              <div style={{marginBottom: '1rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Message *</label>
                <textarea 
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  style={{
                    width: '100%', padding: '0.75rem', 
                    background: 'var(--dark)', border: '1px solid var(--gray)', 
                    borderRadius: '8px', color: 'var(--white)'
                  }}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn" 
                disabled={loading}
                style={{width: '100%', opacity: loading ? 0.7 : 1}}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Properties With Stephanie Realty. All rights reserved.</p>
      </footer>
    </>
  )
}
