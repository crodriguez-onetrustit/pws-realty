import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Properties With Stephanie Realty',
  description: 'Privacy policy and data protection information.',
}

export default function Privacy() {
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
        <h1 className="section-title">Privacy <span>Policy</span></h1>
        
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <div className="card" style={{marginBottom: '1.5rem'}}>
            <p style={{color: 'var(--gray)', marginBottom: '1rem'}}>
              <strong>Effective Date:</strong> February 21, 2026
            </p>
            <p style={{color: 'var(--gray)', lineHeight: '1.8'}}>
              Properties With Stephanie Realty ("we," "us," or "our") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website, use our services, or apply for a rental property.
            </p>
          </div>

          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h2 style={{color: 'var(--gold)', marginBottom: '1rem'}}>Information We Collect</h2>
            
            <h3 style={{color: 'var(--white)', marginBottom: '0.75rem', fontSize: '1.1rem'}}>Personal Information</h3>
            <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '1.8', marginBottom: '1rem'}}>
              <li>Contact Information (name, email, phone, address)</li>
              <li>Government-issued ID (for application verification)</li>
              <li>Social Security Number (for background/credit checks)</li>
              <li>Financial Information (income, bank statements, employment)</li>
              <li>Rental History</li>
            </ul>

            <h3 style={{color: 'var(--white)', marginBottom: '0.75rem', fontSize: '1.1rem'}}>Technical Information</h3>
            <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '1.8'}}>
              <li>IP address, browser type, operating system</li>
              <li>Access times, pages viewed</li>
            </ul>
          </div>

          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h2 style={{color: 'var(--gold)', marginBottom: '1rem'}}>How We Use Your Information</h2>
            <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '2'}}>
              <li>To process your rental application</li>
              <li>To verify identity, credit, and background</li>
              <li>To communicate with you about applications and leases</li>
              <li>To respond to inquiries and maintenance requests</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h2 style={{color: 'var(--gold)', marginBottom: '1rem'}}>How We Share Your Information</h2>
            <p style={{color: 'var(--gray)', lineHeight: '1.8', marginBottom: '1rem'}}>
              We may share your information with:
            </p>
            <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '1.8'}}>
              <li>Credit reporting agencies</li>
              <li>Background check companies</li>
              <li>Previous landlords (for verification)</li>
              <li>Maintenance contractors</li>
            </ul>
            <p style={{color: '#4caf50', marginTop: '1rem', fontWeight: 'bold'}}>
              ✅ We do NOT sell your personal information.
            </p>
          </div>

          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h2 style={{color: 'var(--gold)', marginBottom: '1rem'}}>Data Security</h2>
            <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '1.8'}}>
              <li>SSL encryption for all data transmission</li>
              <li>Secure servers with firewall protection</li>
              <li>Regular security updates</li>
              <li>Limited employee access to personal information</li>
              <li>Confidentiality agreements</li>
            </ul>
          </div>

          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h2 style={{color: 'var(--gold)', marginBottom: '1rem'}}>Data Retention</h2>
            <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '1.8'}}>
              <li><strong>Active applications:</strong> Duration of application + 1 year</li>
              <li><strong>Approved tenant files:</strong> Duration of lease + 3 years</li>
              <li><strong>Rejected applications:</strong> 1 year</li>
              <li><strong>Financial records:</strong> 7 years</li>
            </ul>
          </div>

          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h2 style={{color: 'var(--gold)', marginBottom: '1rem'}}>Your Rights</h2>
            <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '1.8'}}>
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion (subject to legal requirements)</li>
              <li><strong>Opt-Out:</strong> Opt out of marketing communications</li>
            </ul>
            <p style={{color: 'var(--gold)', marginTop: '1rem'}}>
              To exercise your rights, contact us at: Stephanie@pwsrealty.com
            </p>
          </div>

          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h2 style={{color: 'var(--gold)', marginBottom: '1rem'}}>Cookies</h2>
            <p style={{color: 'var(--gray)', lineHeight: '1.8'}}>
              We use essential cookies for website functionality and analytics cookies to understand how visitors use our site. 
              You can control cookies through your browser settings.
            </p>
          </div>

          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h2 style={{color: 'var(--gold)', marginBottom: '1rem'}}>New Jersey Residents</h2>
            <p style={{color: 'var(--gray)', lineHeight: '1.8'}}>
              Under the New Jersey Consumer Data Privacy Act (NJCDPA), you have additional rights including the right to know 
              what personal information we collect and the right to delete your personal information.
            </p>
          </div>

          <div className="card">
            <h2 style={{color: 'var(--gold)', marginBottom: '1rem'}}>Contact Us</h2>
            <p style={{color: 'var(--gray)', lineHeight: '1.8'}}>
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <p style={{color: 'var(--white)', marginTop: '1rem'}}>
              <strong>Properties With Stephanie Realty</strong><br/>
              Email: Stephanie@pwsrealty.com<br/>
              Phone: 786-925-2344
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Properties With Stephanie Realty. All rights reserved.</p>
      </footer>
    </>
  )
}
