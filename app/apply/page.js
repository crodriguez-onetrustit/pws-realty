'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Apply() {
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '', lastName: '', email: '', phone: '',
    ssn: '', dob: '',
    currentAddress: '', currentCity: '', currentState: '', currentZip: '',
    // Employment
    employer: '', jobTitle: '', monthlyIncome: '', employmentLength: '',
    // Rental History
    previousAddress: '', previousLandlord: '', previousLandlordPhone: '',
    // References
    reference1Name: '', reference1Phone: '', reference1Relation: '',
    reference2Name: '', reference2Phone: '', reference2Relation: '',
    // Application
    propertyApplyingFor: '', moveInDate: '', pets: '', vehicleInfo: '',
    agreeToTerms: false
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({...formData, [e.target.name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.agreeToTerms) {
      setStatus({ type: 'error', text: 'Please agree to the terms' })
      return
    }
    
    setLoading(true)
    setStatus(null)
    
    try {
      const res = await fetch('/mc/contact-messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          subject: 'RENTAL APPLICATION',
          message: `APPLICATION FOR: ${formData.propertyApplyingFor}

PERSONAL INFO:
- Full Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- SSN: ${formData.ssn}
- Date of Birth: ${formData.dob}
- Current Address: ${formData.currentAddress}, ${formData.currentCity}, ${formData.currentState} ${formData.currentZip}

EMPLOYMENT:
- Employer: ${formData.employer}
- Job Title: ${formData.jobTitle}
- Monthly Income: $${formData.monthlyIncome}
- Length of Employment: ${formData.employmentLength}

RENTAL HISTORY:
- Previous Address: ${formData.previousAddress}
- Previous Landlord: ${formData.previousLandlord}
- Landlord Phone: ${formData.previousLandlordPhone}

REFERENCES:
1. ${formData.reference1Name} (${formData.reference1Relation}) - ${formData.reference1Phone}
2. ${formData.reference2Name} (${formData.reference2Relation}) - ${formData.reference2Phone}

ADDITIONAL:
- Desired Move-in: ${formData.moveInDate}
- Pets: ${formData.pets}
- Vehicle: ${formData.vehicleInfo}`
        })
      })
      const data = await res.json()
      if (data.success) {
        setStatus({ type: 'success', text: 'Application submitted successfully! Stephanie will contact you soon.' })
        setFormData({
          firstName: '', lastName: '', email: '', phone: '',
          ssn: '', dob: '',
          currentAddress: '', currentCity: '', currentState: '', currentZip: '',
          employer: '', jobTitle: '', monthlyIncome: '', employmentLength: '',
          previousAddress: '', previousLandlord: '', previousLandlordPhone: '',
          reference1Name: '', reference1Phone: '', reference1Relation: '',
          reference2Name: '', reference2Phone: '', reference2Relation: '',
          propertyApplyingFor: '', moveInDate: '', pets: '', vehicleInfo: '',
          agreeToTerms: false
        })
      }
    } catch (err) {
      setStatus({ type: 'error', text: 'Failed to submit. Please try again.' })
    }
    setLoading(false)
  }

  const inputStyle = {
    width: '100%', padding: '0.75rem',
    background: 'var(--dark)', border: '1px solid var(--gray)',
    borderRadius: '8px', color: 'var(--white)'
  }

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="logo">PWS <span>Realty</span></div>
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
        <h1 className="section-title">Rental <span>Application</span></h1>
        
        <div className="card" style={{maxWidth: '700px', margin: '0 auto'}}>
          <p style={{marginBottom: '1.5rem', color: 'var(--gray)'}}>
            Complete this application to apply for a rental property. 
            We'll review and contact you within 24-48 hours.
          </p>

          {status && (
            <div style={{
              padding: '1rem', marginBottom: '1rem', borderRadius: '8px',
              background: status.type === 'success' ? 'rgba(76,175,80,0.2)' : 'rgba(244,67,54,0.2)',
              color: status.type === 'success' ? '#4caf50' : '#f44336'
            }}>
              {status.text}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Property Applying For */}
            <div style={{marginBottom: '1.5rem'}}>
              <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gold)', fontWeight: 'bold'}}>
                Property Applying For *
              </label>
              <input 
                type="text" name="propertyApplyingFor" value={formData.propertyApplyingFor} 
                onChange={handleChange} required placeholder="Property address or name"
                style={inputStyle} 
              />
            </div>

            {/* Personal Information */}
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem', borderBottom: '1px solid var(--gray)', paddingBottom: '0.5rem'}}>
              Personal Information
            </h3>
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem'}}>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>First Name *</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required style={inputStyle} />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Last Name *</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required style={inputStyle} />
              </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem'}}>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Phone *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={inputStyle} />
              </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem'}}>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>SSN (Last 4 digits) *</label>
                <input type="text" name="ssn" value={formData.ssn} onChange={handleChange} required maxLength={4} pattern="\d{4}" placeholder="XXXX" style={inputStyle} />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Date of Birth *</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required style={inputStyle} />
              </div>
            </div>

            {/* Current Address */}
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem', borderBottom: '1px solid var(--gray)', paddingBottom: '0.5rem', marginTop: '1.5rem'}}>
              Current Address
            </h3>
            
            <div style={{marginBottom: '1rem'}}>
              <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Street Address *</label>
              <input type="text" name="currentAddress" value={formData.currentAddress} onChange={handleChange} required style={inputStyle} />
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem', marginBottom: '1rem'}}>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>City *</label>
                <input type="text" name="currentCity" value={formData.currentCity} onChange={handleChange} required style={inputStyle} />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>State *</label>
                <input type="text" name="currentState" value={formData.currentState} onChange={handleChange} required style={inputStyle} />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>ZIP *</label>
                <input type="text" name="currentZip" value={formData.currentZip} onChange={handleChange} required style={inputStyle} />
              </div>
            </div>

            {/* Employment */}
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem', borderBottom: '1px solid var(--gray)', paddingBottom: '0.5rem', marginTop: '1.5rem'}}>
              Employment Information
            </h3>
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem'}}>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Current Employer *</label>
                <input type="text" name="employer" value={formData.employer} onChange={handleChange} required style={inputStyle} />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Job Title *</label>
                <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required style={inputStyle} />
              </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem'}}>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Monthly Income * ($)</label>
                <input type="number" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} required min="0" style={inputStyle} />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Length of Employment</label>
                <select name="employmentLength" value={formData.employmentLength} onChange={handleChange} style={inputStyle}>
                  <option value="">Select...</option>
                  <option value="Less than 1 year">Less than 1 year</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="2-5 years">2-5 years</option>
                  <option value="5+ years">5+ years</option>
                </select>
              </div>
            </div>

            {/* Rental History */}
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem', borderBottom: '1px solid var(--gray)', paddingBottom: '0.5rem', marginTop: '1.5rem'}}>
              Rental History
            </h3>
            
            <div style={{marginBottom: '1rem'}}>
              <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Previous Address (if any)</label>
              <input type="text" name="previousAddress" value={formData.previousAddress} onChange={handleChange} style={inputStyle} />
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem'}}>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Previous Landlord Name</label>
                <input type="text" name="previousLandlord" value={formData.previousLandlord} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Previous Landlord Phone</label>
                <input type="tel" name="previousLandlordPhone" value={formData.previousLandlordPhone} onChange={handleChange} style={inputStyle} />
              </div>
            </div>

            {/* References */}
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem', borderBottom: '1px solid var(--gray)', paddingBottom: '0.5rem', marginTop: '1.5rem'}}>
              Personal References
            </h3>
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem'}}>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Reference 1 Name</label>
                <input type="text" name="reference1Name" value={formData.reference1Name} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Phone</label>
                <input type="tel" name="reference1Phone" value={formData.reference1Phone} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Relationship</label>
                <input type="text" name="reference1Relation" value={formData.reference1Relation} onChange={handleChange} placeholder="e.g. Friend, Coworker" style={inputStyle} />
              </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem'}}>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Reference 2 Name</label>
                <input type="text" name="reference2Name" value={formData.reference2Name} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Phone</label>
                <input type="tel" name="reference2Phone" value={formData.reference2Phone} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Relationship</label>
                <input type="text" name="reference2Relation" value={formData.reference2Relation} onChange={handleChange} placeholder="e.g. Friend, Coworker" style={inputStyle} />
              </div>
            </div>

            {/* Additional */}
            <h3 style={{color: 'var(--gold)', marginBottom: '1rem', borderBottom: '1px solid var(--gray)', paddingBottom: '0.5rem', marginTop: '1.5rem'}}>
              Additional Information
            </h3>
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem'}}>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Desired Move-in Date</label>
                <input type="date" name="moveInDate" value={formData.moveInDate} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Pets (if any)</label>
                <input type="text" name="pets" value={formData.pets} onChange={handleChange} placeholder="Type, breed, weight" style={inputStyle} />
              </div>
            </div>

            <div style={{marginBottom: '1rem'}}>
              <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--gray)'}}>Vehicle Information</label>
              <input type="text" name="vehicleInfo" value={formData.vehicleInfo} onChange={handleChange} placeholder="Year, Make, Model, License Plate" style={inputStyle} />
            </div>

            {/* Terms */}
            <div style={{marginTop: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px'}}>
              <label style={{display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer'}}>
                <input 
                  type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} 
                  onChange={handleChange} 
                  style={{marginTop: '0.25rem'}}
                />
                <span style={{color: 'var(--gray)', fontSize: '0.9rem'}}>
                  I certify that all information provided is true and accurate. I authorize PWS Realty to verify all information 
                  including credit, criminal, and rental history. I understand that providing false information may result in 
                  denial of the application or termination of any resulting lease. *
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              className="btn" 
              disabled={loading}
              style={{width: '100%', marginTop: '1.5rem', opacity: loading ? 0.7 : 1}}
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Properties With Stephanie Realty. All rights reserved.</p>
      </footer>
    </>
  )
}
