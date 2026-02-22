import Link from 'next/link'

export const metadata = {
  title: 'Fair Housing | Properties With Stephanie Realty',
  description: 'Fair Housing information and anti-discrimination policy.',
}

export default function FairHousing() {
  return (
    <>
      <header className="Header">
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
        <h1 className="section-title">Fair <span>Housing</span></h1>
        
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h2 style={{color: 'var(--gold)', marginBottom: '1rem'}}>Our Commitment to Fair Housing</h2>
            <p style={{color: 'var(--gray)', lineHeight: '1.8', marginBottom: '1rem'}}>
              Properties With Stephanie Realty is firmly committed to the principle of equal housing opportunity. 
              We proudly support and comply with all federal, state, and local fair housing laws.
            </p>
            <p style={{color: 'var(--gray)', lineHeight: '1.8'}}>
              We do not discriminate against any person because of race, color, religion, sex, disability, 
              familial status, national origin, age, marital status, sexual orientation, gender identity, 
              or any other protected class under federal, state, or local law.
            </p>
          </div>

          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem'}}>🏛️ Federal Fair Housing Act</h3>
            <p style={{color: 'var(--gray)', lineHeight: '1.8', marginBottom: '1rem'}}>
              The Federal Fair Housing Act prohibits discrimination in the buying, selling, renting, or financing 
              of housing based on:
            </p>
            <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '2'}}>
              <li><strong>Race</strong></li>
              <li><strong>Color</strong></li>
              <li><strong>Religion</strong></li>
              <li><strong>Sex</strong></li>
              <li><strong>Disability</strong></li>
              <li><strong>Familial Status</strong> (having children under 18, pregnant women)</li>
              <li><strong>National Origin</strong></li>
            </ul>
          </div>

          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem'}}>🗽 New Jersey Law Against Discrimination (LAD)</h3>
            <p style={{color: 'var(--gray)', lineHeight: '1.8', marginBottom: '1rem'}}>
              New Jersey's Law Against Discrimination provides even broader protections than federal law, 
              also prohibiting discrimination based on:
            </p>
            <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '2'}}>
              <li>Marital Status</li>
              <li>Affectional or Sexual Orientation</li>
              <li>Gender Identity or Expression</li>
              <li>Military Service</li>
              <li>Lawful Source of Income (including housing vouchers)</li>
              <li>Domestic Partnership or Civil Union Status</li>
            </ul>
          </div>

          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem'}}>❌ We Do Not Discriminate</h3>
            <p style={{color: 'var(--gray)', lineHeight: '1.8', marginBottom: '1rem'}}>
              Properties With Stephanie Realty does NOT:
            </p>
            <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '2'}}>
              <li>Refuse to rent, sell, or negotiate for housing</li>
              <li>Set different terms, conditions, or privileges for any tenant or buyer</li>
              <li>Make false statements that housing is unavailable</li>
              <li>Show properties only in certain neighborhoods</li>
              <li>Discriminate in financing or appraisal</li>
              <li>Harass or intimidate anyone exercising their fair housing rights</li>
              <li>Advertise with any preference or limitation based on protected classes</li>
            </ul>
          </div>

          <div className="card" style={{marginBottom: '1.5rem'}}>
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem'}}>♿ Accessibility</h3>
            <p style={{color: 'var(--gray)', lineHeight: '1.8', marginBottom: '1rem'}}>
              We are committed to providing accessible housing. We:
            </p>
            <ul style={{color: 'var(--gray)', marginLeft: '1.5rem', lineHeight: '2'}}>
              <li>Welcome tenants with disabilities</li>
              <li>Make reasonable accommodations in rules, policies, and services</li>
              <li>Allow reasonable modifications to units when needed</li>
              <li>Ensure common areas are accessible</li>
              <li>Provide information about accessible units upon request</li>
            </ul>
          </div>

          <div className="card" style={{marginBottom: '1.5rem', background: 'rgba(201, 162, 39, 0.1)'}}>
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem'}}>📞 Fair Housing Complaints</h3>
            <p style={{color: 'var(--gray)', lineHeight: '1.8', marginBottom: '1rem'}}>
              If you believe you have experienced housing discrimination, you have the right to file a complaint:
            </p>
            <div style={{marginLeft: '1.5rem'}}>
              <p style={{color: 'var(--white)', fontWeight: 'bold', marginBottom: '0.5rem'}}>U.S. Department of Housing and Urban Development (HUD)</p>
              <p style={{color: 'var(--gray)', marginBottom: '1rem'}}>
                Phone: 1-800-669-9777<br/>
                Website: www.hud.gov/fairhousing
              </p>
              
              <p style={{color: 'var(--white)', fontWeight: 'bold', marginBottom: '0.5rem'}}>New Jersey Division on Civil Rights</p>
              <p style={{color: 'var(--gray)', marginBottom: '1rem'}}>
                Phone: 1-866-405-0290<br/>
                Website: www.nj.gov/lps/dcr
              </p>
            </div>
          </div>

          <div className="card">
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem'}}>Our Promise</h3>
            <p style={{color: 'var(--gray)', lineHeight: '1.8'}}>
              At Properties With Stephanie Realty, fair housing isn't just compliance—it's a core value. 
              Every person deserves a safe, welcoming home. We're proud to serve all members of our community 
              with respect and dignity.
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
