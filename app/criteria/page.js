import Link from 'next/link'

export const metadata = {
  title: 'Application Criteria | Properties With Stephanie Realty',
  description: 'Rental application requirements and criteria for prospective tenants.',
}

export default function Criteria() {
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
        <h1 className="section-title">Application <span>Criteria</span></h1>
        
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h2 style={{color: 'var(--gold)', marginBottom: '1rem'}}>Our Tenant Requirements</h2>
            <p style={{color: 'var(--gray)', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              We strive to find quality tenants who will take great care of our properties. 
              Below are our standard application criteria. Each application is reviewed on a case-by-case basis.
            </p>
          </div>

          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem'}}>📋 General Requirements</h3>
            <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '2'}}>
              <li>Must be 18 years or older</li>
              <li>Valid government-issued photo ID</li>
              <li>Social Security Number or valid work authorization</li>
              <li>Proof of income</li>
              <li>No smoking in units (if applicable)</li>
              <li>No pets may be brought onto the property without prior written approval</li>
            </ul>
          </div>

          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem'}}>💰 Income Requirements</h3>
            <div style={{background: 'rgba(201, 162, 39, 0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{color: 'var(--gold)', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>
                2.5x Monthly Rent Rule
              </p>
              <p style={{color: 'var(--gray)'}}>
                Your gross monthly income must be at least <strong>2.5 times</strong> the monthly rent.
              </p>
            </div>
            <p style={{color: 'var(--gray)', lineHeight: '1.8'}}>
              <strong>Example:</strong> For a $2,000/month rental, you must earn at least $5,000/month gross income.
            </p>
            <p style={{color: 'var(--gray)', lineHeight: '1.8', marginTop: '1rem'}}>
              Acceptable income verification includes: Pay stubs (last 30 days), Bank statements (2 months), 
              Employment letter, Tax returns (last 2 years), or Offer letter (for new employment)
            </p>
          </div>

          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem'}}>📊 Credit Requirements</h3>
            <div style={{background: 'rgba(201, 162, 39, 0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{color: 'var(--gold)', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>
                600+ Credit Score
              </p>
              <p style={{color: 'var(--gray)'}}>
                Minimum credit score of <strong>600</strong> from all three credit bureaus.
              </p>
            </div>
            <p style={{color: 'var(--gray)', lineHeight: '1.8'}}>
              We review credit history for payment patterns, outstanding balances, and any public records. 
              Exceptional circumstances may be considered on a case-by-case basis.
            </p>
          </div>

          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem'}}>🚫 Background Checks</h3>
            <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '2'}}>
              <li><strong>Criminal Background:</strong> We conduct criminal background checks. Certain convictions 
              may result in automatic denial based on the nature and recency of the offense.</li>
              <li><strong>Eviction History:</strong> Any prior evictions within the past 7 years will result in denial.</li>
              <li><strong>Sex Offender Registry:</strong> All applicants must pass the national sex offender registry check.</li>
            </ul>
          </div>

          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem'}}>🏠 Rental History</h3>
            <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '2'}}>
              <li>Minimum 2 years of verifiable rental history preferred</li>
              <li>Landlord references will be contacted</li>
              <li>No unpaid debts to previous landlords</li>
              <li>No lease violations or breaches</li>
            </ul>
          </div>

          <div className="card" style={{marginBottom: '1.5rem', background: 'rgba(76, 175, 80, 0.1)'}}>
            <h3 style={{color: '#4caf50', marginBottom: '1rem'}}>✅ What We're Looking For</h3>
            <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '2'}}>
              <li>Stable employment and income</li>
              <li>Good payment history</li>
              <li>Responsible and respectful tenants</li>
              <li>Long-term rental history</li>
              <li>Clean background and credit</li>
            </ul>
          </div>

          <div className="card" style={{marginBottom: '1.5rem', background: 'rgba(244, 67, 54, 0.1)'}}>
            <h3 style={{color: '#f44336', marginBottom: '1rem'}}>❌ Automatic Denial</h3>
            <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '2'}}>
              <li>Evictions in the past 7 years</li>
              <li>Credit score below 600</li>
              <li>Income less than 2.5x monthly rent</li>
              <li>Felony convictions related to violence, drugs, or property damage</li>
              <li>Registered sex offenders</li>
              <li>Fraud or identity theft convictions</li>
            </ul>
          </div>

          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem'}}>📝 Application Process</h3>
            <ol style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '2'}}>
              <li>Complete the <Link href="/apply" style={{color: 'var(--gold)'}}>online application</Link></li>
              <li>Pay the $50 application fee (non-refundable)</li>
              <li>Provide required documentation</li>
              <li>Allow 24-48 hours for processing</li>
              <li>Receive approval/denial notification</li>
            </ol>
          </div>

          <div className="card" style={{textAlign: 'center'}}>
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem'}}>Questions?</h3>
            <p style={{color: 'var(--gray)', marginBottom: '1.5rem'}}>
              Contact Stephanie if you have any questions about our application criteria.
            </p>
            <Link href="/contact" className="btn">Contact Us</Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Properties With Stephanie Realty. All rights reserved.</p>
      </footer>
    </>
  )
}
