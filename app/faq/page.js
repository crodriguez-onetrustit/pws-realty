import Link from 'next/link'

export const metadata = {
  title: 'FAQ | Properties With Stephanie Realty',
  description: 'Frequently asked questions about renting and property management in New Jersey.',
}

export default function FAQ() {
  const faqs = [
    {
      category: 'For Renters - Applications & Approval',
      q: 'What do I need to apply?',
      a: 'Typically, we need: Government-issued photo ID, Proof of income (3x monthly rent), Bank statements, Rental history references, and Social Security number for credit check.'
    },
    {
      category: 'For Renters - Applications & Approval',
      q: 'How long does approval take?',
      a: 'Most applications are processed within 24-48 hours once we have all documents.'
    },
    {
      category: 'For Renters - Applications & Approval',
      q: 'What if I have bad credit?',
      a: 'We review applications holistically. If you have extenuating circumstances, let\'s talk. We look at rental history, income stability, and other factors.'
    },
    {
      category: 'The Rental Process',
      q: 'How do I start my rental search?',
      a: 'Easy — reach out! You can call, email, or fill out our contact form. We\'ll set up a time to discuss your needs and show you properties that match.'
    },
    {
      category: 'The Rental Process',
      q: 'Can I see properties in person?',
      a: 'Absolutely. Schedule a showing through our website or call us directly. Virtual tours available for out-of-town renters.'
    },
    {
      category: 'The Rental Process',
      q: 'What are your lease terms?',
      a: 'Most leases are 12 months. Short-term options may be available — ask us.'
    },
    {
      category: 'Moving In',
      q: 'What\'s included in the rent?',
      a: 'It varies by property. Some include water, trash, or parking. We\'ll clearly explain what\'s included before you apply.'
    },
    {
      category: 'Moving In',
      q: 'How do maintenance requests work?',
      a: 'Submit requests through our tenant portal or call our 24/7 maintenance line. We respond to emergencies within 2 hours; regular requests within 48 hours.'
    },
    {
      category: 'Moving In',
      q: 'Can I have pets?',
      a: 'Many of our properties are pet-friendly! Pet policies vary — ask about the specific property you\'re interested in.'
    },
    {
      category: 'Moving Out',
      q: 'What happens at move-out?',
      a: 'We\'ll do a walkthrough, compare it to your move-in inspection, and return your security deposit (minus any legitimate damages or unpaid rent) within 30 days per NJ law.'
    },
    {
      category: 'For Landlords',
      q: 'How do I list my property?',
      a: 'Contact us for a free market analysis. We\'ll walk you through our process, explain our fees, and get your property listed within days.'
    },
    {
      category: 'For Landlords',
      q: 'How quickly can you find tenants?',
      a: 'Most properties lease within 30 days. It depends on pricing, location, and current market conditions.'
    },
    {
      category: 'For Landlords',
      q: 'What does management cost?',
      a: 'Our fees vary by service level. We offer three tiers starting at $99/month. The Standard plan ($149/mo) is most popular — includes rent collection and marketing.'
    }
  ]

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
        <h1 className="section-title">Frequently Asked <span>Questions</span></h1>
        
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          {faqs.map((faq, index) => (
            <div key={index} className="card" style={{marginBottom: '1rem', textAlign: 'left'}}>
              <p style={{color: 'var(--gold)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px'}}>
                {faq.category}
              </p>
              <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>{faq.q}</h3>
              <p style={{color: 'var(--gray)', lineHeight: '1.7', marginBottom: 0}}>{faq.a}</p>
            </div>
          ))}
        </div>
        
        <div className="card" style={{maxWidth: '600px', margin: '3rem auto', textAlign: 'center'}}>
          <h2 style={{color: 'var(--gold)', marginBottom: '1rem'}}>Still Have Questions?</h2>
          <p style={{marginBottom: '1.5rem', color: 'var(--gray)'}}>We're here to help. Reach out and we'll get back to you within 24 hours.</p>
          <Link href="/contact" className="btn">Contact Us</Link>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Properties With Stephanie Realty. All rights reserved.</p>
      </footer>
    </>
  )
}
