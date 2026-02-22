'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus({ type: 'success', text: 'Message sent successfully! We\'ll get back to you soon.' })
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        setStatus({ type: 'error', text: 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      setStatus({ type: 'error', text: 'An error occurred. Please try again.' })
    }

    setLoading(false)
  }

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
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact" className="active">Contact</Link>
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
          <h1>Contact Us</h1>
          <p>Get in touch with our team for all your real estate needs</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form">
              <h2 style={{ marginBottom: '30px' }}>Send Us a Message</h2>
              
              {status && (
                <div style={{ 
                  padding: '15px', 
                  marginBottom: '20px', 
                  borderRadius: 'var(--radius-md)',
                  background: status.type === 'success' ? '#d4edda' : '#f8d7da',
                  color: status.type === 'success' ? '#155724' : '#721c24'
                }}>
                  {status.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe" 
                      required 
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567" 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option>I'm interested in a property</option>
                    <option>I want to rent my property</option>
                    <option>I want to sell my property</option>
                    <option>General inquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea 
                    rows="5" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..." 
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: '100%' }}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <h3>Get In Touch</h3>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Office Address</h4>
                  <p>New Jersey, USA</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>(786) 925-2344</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>SMunoz@pwsrealty.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div className="contact-details">
                  <h4>Office Hours</h4>
                  <p>Monday - Friday: 9AM - 6PM<br/>Saturday: 10AM - 4PM<br/>Sunday: By Appointment</p>
                </div>
              </div>

              <div style={{ marginTop: '40px', padding: '25px', background: 'var(--gray-lighter)', borderRadius: 'var(--radius-lg)' }}>
                <h4 style={{ marginBottom: '15px' }}>Emergency?</h4>
                <p style={{ color: 'var(--gray)', marginBottom: '15px' }}>For urgent matters outside business hours, please call our emergency line.</p>
                <p style={{ fontWeight: '700', color: 'var(--primary)' }}>(786) 925-2344</p>
              </div>
            </div>
          </div>
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
