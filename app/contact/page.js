import Link from 'next/link'

export default function Contact() {
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
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input type="text" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input type="text" placeholder="Doe" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <select required>
                    <option value="">Select a subject</option>
                    <option>I'm interested in a property</option>
                    <option>I want to rent my property</option>
                    <option>I want to sell my property</option>
                    <option>General inquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea rows="5" placeholder="Tell us about your needs..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
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

      {/* Map Section */}
      <section style={{ height: '400px', background: 'var(--gray-lighter)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '4rem', marginBottom: '10px' }}>🗺️</p>
          <p style={{ color: 'var(--gray)', fontSize: '1.2rem' }}>Interactive Map Coming Soon</p>
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
