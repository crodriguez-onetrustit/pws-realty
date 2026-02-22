import Link from 'next/link'

export const metadata = {
  title: 'About Us | Properties With Stephanie Realty',
  description: 'Learn about Stephanie Munoz and our commitment to New Jersey real estate.',
}

export default function About() {
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
        <h1 className="section-title">Meet <span>Stephanie</span></h1>
        
        <div className="card" style={{maxWidth: '800px', margin: '0 auto'}}>
          <h2 style={{color: 'var(--gold)', marginBottom: '1rem', fontSize: '1.5rem'}}>Your Trusted NJ Real Estate Partner</h2>
          
          <p style={{marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8'}}>
            Buying or renting a home is one of the biggest decisions you'll ever make. At Properties With Stephanie Realty, we don't just help you find a place — we help you find your future.
          </p>
          
          <p style={{marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8'}}>
            I'm Stephanie Munoz, and I've spent over 15 years helping families, investors, and landlords navigate the New Jersey real estate market. What I've learned is this: <strong>real estate isn't about properties. It's about people.</strong>
          </p>
          
          <p style={{marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8'}}>
            Whether you're searching for your dream rental, looking to maximize your investment property's potential, or ready to buy your first home — I'm here to guide you every step of the way.
          </p>
          
          <h3 style={{color: 'var(--gold)', marginBottom: '1rem', marginTop: '2rem'}}>Why New Jersey?</h3>
          <p style={{marginBottom: '1.5rem', color: 'var(--gray)', fontSize: '1.1rem', lineHeight: '1.8'}}>
            I've lived in this state my entire life. I know the neighborhoods, the schools, the hidden gems that never make it to the big listing sites. I know which areas are up-and-coming and which ones are solid, established communities. This isn't just my job — <strong>it's my home.</strong>
          </p>
          
          <h3 style={{color: 'var(--gold)', marginBottom: '1rem', marginTop: '2rem'}}>What Sets Us Apart</h3>
          <div style={{marginBottom: '1.5rem'}}>
            <p style={{marginBottom: '0.75rem'}}><span style={{color: 'var(--gold)'}}>✓</span> <strong>Personal Service</strong> — You'll work directly with me, not a chatbot or call center</p>
            <p style={{marginBottom: '0.75rem'}}><span style={{color: 'var(--gold)'}}>✓</span> <strong>Local Expertise</strong> — 15+ years of NJ market knowledge</p>
            <p style={{marginBottom: '0.75rem'}}><span style={{color: 'var(--gold)'}}>✓</span> <strong>Honest Guidance</strong> — I'll tell you what you need to hear, not just what you want to hear</p>
            <p style={{marginBottom: '0.75rem'}}><span style={{color: 'var(--gold)'}}>✓</span> <strong>Full-Service Support</strong> — From search to signing and beyond</p>
          </div>
          
          <h3 style={{color: 'var(--gold)', marginBottom: '1rem', marginTop: '2rem'}}>My Promise to You</h3>
          <p style={{marginBottom: '1.5rem', color: 'var(--gray)', fontSize: '1.1rem', lineHeight: '1.8'}}>
            When you work with Properties With Stephanie Realty, you're not a transaction. You're a neighbor I'm helping find the right place.
          </p>
          
          <p style={{fontSize: '1.2rem', color: 'var(--gold)', textAlign: 'center', marginTop: '2rem', marginBottom: '2rem'}}>
            <strong>Let's start your journey together.</strong>
          </p>
          
          <div style={{textAlign: 'center', marginTop: '1rem'}}>
            <Link href="/contact" className="btn" style={{display: 'inline-block'}}>Contact Stephanie</Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Properties With Stephanie Realty. All rights reserved.</p>
      </footer>
    </>
  )
}
