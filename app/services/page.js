import Link from 'next/link'

export const metadata = {
  title: 'Services | Properties With Stephanie Realty',
  description: 'Rental and property management services in New Jersey.',
}

export default function Services() {
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
        <h1 className="section-title">Our <span>Services</span></h1>
        
        <h2 style={{textAlign: 'center', marginBottom: '2rem', color: 'var(--gold)', marginTop: '2rem'}}>For Renters</h2>
        
        <div className="card" style={{maxWidth: '800px', margin: '0 auto 2rem'}}>
          <h3 style={{marginBottom: '1rem'}}>Rental Search & Leasing</h3>
          <p style={{color: 'var(--gray)', marginBottom: '1rem', lineHeight: '1.7'}}>
            The rental market in New Jersey is competitive. We're here to make it straightforward.
          </p>
          <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '2'}}>
            <li><strong>Personalized Property Matching</strong> — We listen to what you need and find options that actually fit</li>
            <li><strong>Exclusive Listings</strong> — Access to properties before they hit the major sites</li>
            <li><strong>Virtual Tours Available</strong> — Browse from anywhere</li>
            <li><strong>Application Guidance</strong> — We'll walk you through every step</li>
          </ul>
          <p style={{color: 'var(--gold)', marginTop: '1rem', marginBottom: 0}}>No hidden fees. No confusing processes. Just results.</p>
        </div>
        
        <div className="card" style={{maxWidth: '800px', margin: '0 auto 2rem'}}>
          <h3 style={{marginBottom: '1rem'}}>Tenant Screening</h3>
          <p style={{color: 'var(--gray)', marginBottom: '1rem', lineHeight: '1.7'}}>
            Thorough. Fair. Transparent.
          </p>
          <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '2'}}>
            <li>Credit history review</li>
            <li>Income verification</li>
            <li>Rental history confirmation</li>
            <li>Reference checks</li>
          </ul>
          <p style={{color: 'var(--gold)', marginTop: '1rem', marginBottom: 0}}>Our Promise: You'll always know where you stand in the process.</p>
        </div>
        
        <div className="card" style={{maxWidth: '800px', margin: '0 auto 3rem'}}>
          <h3 style={{marginBottom: '1rem'}}>Move-In Coordination</h3>
          <p style={{color: 'var(--gray)', marginBottom: '1rem', lineHeight: '1.7'}}>
            From Approved to Moved-In — Seamless
          </p>
          <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '2'}}>
            <li>Move-in checklist personalized to your property</li>
            <li>Utility setup guidance</li>
            <li>Neighborhood orientation</li>
            <li>24/7 maintenance contact for emergencies</li>
          </ul>
        </div>
        
        <h2 style={{textAlign: 'center', marginBottom: '2rem', color: 'var(--gold)', marginTop: '3rem'}}>For Landlords & Investors</h2>
        
        <div className="card" style={{maxWidth: '800px', margin: '0 auto 2rem'}}>
          <h3 style={{marginBottom: '1rem'}}>Full-Service Property Management</h3>
          <p style={{color: 'var(--gray)', marginBottom: '1rem', lineHeight: '1.7'}}>
            Maximize Your Investment. Minimize Your Headaches.
          </p>
          <p style={{color: 'var(--gray)', marginBottom: '1rem', lineHeight: '1.7'}}>
            Owning rental property should be passive income — not a second job. We handle everything:
          </p>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem'}}>
            <div>
              <h4 style={{color: 'var(--gold)', marginBottom: '0.5rem'}}>Tenant Acquisition</h4>
              <ul style={{color: 'var(--gray)', marginLeft: '1rem', lineHeight: '1.8', fontSize: '0.95rem'}}>
                <li>Professional marketing</li>
                <li>Professional photography</li>
                <li>Open houses & showings</li>
                <li>Thorough applicant screening</li>
              </ul>
            </div>
            <div>
              <h4 style={{color: 'var(--gold)', marginBottom: '0.5rem'}}>Leasing & Admin</h4>
              <ul style={{color: 'var(--gray)', marginLeft: '1rem', lineHeight: '1.8', fontSize: '0.95rem'}}>
                <li>Lease preparation</li>
                <li>Move-in/move-out docs</li>
                <li>Rent collection</li>
                <li>Legal compliance</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="card" style={{maxWidth: '800px', margin: '0 auto 2rem'}}>
          <h3 style={{marginBottom: '1rem'}}>Property Marketing</h3>
          <p style={{color: 'var(--gray)', marginBottom: '1rem', lineHeight: '1.7'}}>
            Get Your Property Seen by Quality Tenants Fast
          </p>
          <p style={{color: 'var(--gray)', lineHeight: '1.7'}}>
            Vacancy costs money. We market your property to fill it fast: Professional listing photos, Virtual tours & video walkthroughs, Exposure on Zillow, Trulia, Apartments.com, and 50+ more, Strategic pricing based on current market data.
          </p>
        </div>
        
        <div className="card" style={{maxWidth: '800px', margin: '0 auto 3rem'}}>
          <h3 style={{marginBottom: '1rem'}}>Free Market Analysis</h3>
          <p style={{color: 'var(--gray)', marginBottom: '1rem', lineHeight: '1.7'}}>
            Know What Your Property Is Really Worth
          </p>
          <p style={{color: 'var(--gold)', marginBottom: 0}}>
            Complimentary market analysis including: Comparable rental rates, Amenity adjustments, Seasonal market trends, Projected rental income over 12 months. No obligation. Just data.
          </p>
        </div>
        
        <div className="card" style={{maxWidth: '600px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{color: 'var(--gold)', marginBottom: '1rem'}}>Let's Discuss Your Needs</h2>
          <p style={{marginBottom: '1.5rem', color: 'var(--gray)'}}>Every situation is unique. Let's talk about what you're looking for.</p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link href="/contact" className="btn">I'm a Renter</Link>
            <Link href="/contact" className="btn" style={{background: 'transparent', border: '1px solid var(--gold)', color: 'var(--gold)'}}>I Have a Property</Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Properties With Stephanie Realty. All rights reserved.</p>
      </footer>
    </>
  )
}
