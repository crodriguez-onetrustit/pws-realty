'use client'

import { useState } from 'react'
import Link from 'next/link'

// Sample data
const properties = [
  { id: 1, title: 'Luxury Downtown Penthouse', address: '123 Park Avenue, Jersey City', price: 4500, type: 'Rent', status: 'Active', featured: true },
  { id: 2, title: 'Modern Waterfront Loft', address: '456 River Road, Hoboken', price: 3800, type: 'Rent', status: 'Active', featured: true },
  { id: 3, title: 'Elegant Suburban Estate', address: '789 Oak Avenue, Edison', price: 5200, type: 'Rent', status: 'Active', featured: false },
  { id: 4, title: 'Historic Brownstone', address: '321 Summit Ave, Jersey City', price: 4200, type: 'Rent', status: 'Active', featured: true },
  { id: 5, title: 'Garden Colonial Home', address: '555 Maple Lane, New Brunswick', price: 3500, type: 'Rent', status: 'Active', featured: false },
]

const messages = [
  { id: 1, name: 'John Smith', email: 'john@email.com', subject: 'Inquiry about penthouse', property: 'Luxury Downtown Penthouse', date: '2026-02-22', read: false },
  { id: 2, name: 'Sarah Johnson', email: 'sarah@email.com', subject: 'Rental application', property: 'Modern Waterfront Loft', date: '2026-02-21', read: true },
  { id: 3, name: 'Mike Williams', email: 'mike@email.com', subject: 'Questions about pricing', property: null, date: '2026-02-20', read: true },
]

const stats = {
  properties: 24,
  messages: 12,
  views: 1250,
  featured: 8
}

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-logo">
          🏠 PWS <span>Admin</span>
        </div>
        <nav className="admin-nav">
          <a href="#" className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>
            📊 Dashboard
          </a>
          <a href="#" className={activeTab === 'properties' ? 'active' : ''} onClick={() => setActiveTab('properties')}>
            🏠 Properties
          </a>
          <a href="#" className={activeTab === 'messages' ? 'active' : ''} onClick={() => setActiveTab('messages')}>
            💬 Messages
            <span style={{ marginLeft: 'auto', background: 'var(--danger)', color: 'white', padding: '2px 8px', borderRadius: '10px', fontSize: '0.75rem' }}>3</span>
          </a>
          <a href="#" className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>
            ⚙️ Settings
          </a>
          <Link href="/" style={{ marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
            ← Back to Website
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="admin-content">
        {/* Header */}
        <div className="admin-header">
          <h1 style={{ fontSize: '1.75rem' }}>
            {activeTab === 'dashboard' && 'Dashboard'}
            {activeTab === 'properties' && 'Properties'}
            {activeTab === 'messages' && 'Messages'}
            {activeTab === 'settings' && 'Settings'}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ color: 'var(--gray)' }}>Welcome, Stephanie</span>
            <div style={{ width: '40px', height: '40px', background: 'var(--secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: 'var(--dark)' }}>S</div>
          </div>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <>
            {/* Stats */}
            <div className="admin-stats">
              <div className="stat-card">
                <h3>{stats.properties}</h3>
                <p>Total Properties</p>
              </div>
              <div className="stat-card">
                <h3>{stats.messages}</h3>
                <p>Total Messages</p>
              </div>
              <div className="stat-card">
                <h3>{stats.views.toLocaleString()}</h3>
                <p>Total Views</p>
              </div>
              <div className="stat-card">
                <h3>{stats.featured}</h3>
                <p>Featured Listings</p>
              </div>
            </div>

            {/* Recent Messages */}
            <div className="admin-card">
              <h3 style={{ marginBottom: '20px' }}>Recent Messages</h3>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Property</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map(msg => (
                    <tr key={msg.id}>
                      <td>{msg.name}</td>
                      <td>{msg.subject}</td>
                      <td>{msg.property || 'General'}</td>
                      <td>{msg.date}</td>
                      <td>
                        <span style={{ 
                          padding: '4px 10px', 
                          borderRadius: '20px', 
                          fontSize: '0.8rem',
                          background: msg.read ? 'var(--success)' : 'var(--warning)',
                          color: 'white'
                        }}>
                          {msg.read ? 'Read' : 'New'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Properties Tab */}
        {activeTab === 'properties' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2>Manage Properties</h2>
              <button className="btn btn-primary">+ Add Property</button>
            </div>
            <div className="admin-card">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Address</th>
                    <th>Price</th>
                    <th>Type</th>
                    <th>Featured</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map(prop => (
                    <tr key={prop.id}>
                      <td>#{prop.id}</td>
                      <td><strong>{prop.title}</strong></td>
                      <td>{prop.address}</td>
                      <td>${prop.price.toLocaleString()}</td>
                      <td>{prop.type}</td>
                      <td>
                        {prop.featured ? '⭐ Yes' : '—'}
                      </td>
                      <td>
                        <button className="btn btn-outline" style={{ padding: '8px 15px', fontSize: '0.85rem' }}>Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="admin-card">
            <h3 style={{ marginBottom: '20px' }}>All Messages</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Property</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map(msg => (
                  <tr key={msg.id}>
                    <td><strong>{msg.name}</strong></td>
                    <td>{msg.email}</td>
                    <td>{msg.subject}</td>
                    <td>{msg.property || 'General'}</td>
                    <td>{msg.date}</td>
                    <td>
                      <button className="btn btn-outline" style={{ padding: '8px 15px', fontSize: '0.85rem', marginRight: '5px' }}>View</button>
                      <button className="btn btn-outline" style={{ padding: '8px 15px', fontSize: '0.85rem', color: 'var(--danger)', borderColor: 'var(--danger)' }}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <>
            <div className="form-card">
              <h3>Site Settings</h3>
              <div className="form-group">
                <label>Site Name</label>
                <input type="text" defaultValue="PWS Realty" />
              </div>
              <div className="form-group">
                <label>Site Description</label>
                <textarea rows="3">New Jersey's premier real estate agency helping clients find their perfect homes.</textarea>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Contact Email</label>
                  <input type="email" defaultValue="SMunoz@pwsrealty.com" />
                </div>
                <div className="form-group">
                  <label>Contact Phone</label>
                  <input type="tel" defaultValue="(786) 925-2344" />
                </div>
              </div>
              <button className="btn btn-primary">Save Settings</button>
            </div>

            <div className="form-card">
              <h3>Change Password</h3>
              <div className="form-group">
                <label>Current Password</label>
                <input type="password" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>New Password</label>
                  <input type="password" />
                </div>
                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input type="password" />
                </div>
              </div>
              <button className="btn btn-primary">Update Password</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
