'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [properties, setProperties] = useState([])
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [showPropertyForm, setShowPropertyForm] = useState(false)
  const [editingProperty, setEditingProperty] = useState(null)
  const [propertyForm, setPropertyForm] = useState({
    title: '', address: '', city: '', price: '', bedrooms: '', bathrooms: '', sqft: '', type: 'rent', featured: false, description: '', image: ''
  })

  // Fetch data
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const [propsRes, msgsRes] = await Promise.all([
        fetch('/api/properties'),
        fetch('/api/messages')
      ])
      const propsData = await propsRes.json()
      const msgsData = await msgsRes.json()
      setProperties(propsData)
      setMessages(msgsData)
    } catch (error) {
      console.error('Failed to fetch data:', error)
    }
    setLoading(false)
  }

  // Property handlers
  const handlePropertySubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/properties', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(propertyForm)
      })
      if (response.ok) {
        fetchData()
        setShowPropertyForm(false)
        setPropertyForm({ title: '', address: '', city: '', price: '', bedrooms: '', bathrooms: '', sqft: '', type: 'rent', featured: false, description: '', image: '' })
      }
    } catch (error) {
      console.error('Failed to save property:', error)
    }
  }

  const deleteProperty = async (id) => {
    if (!confirm('Are you sure you want to delete this property?')) return
    // For now, just remove from local state
    setProperties(properties.filter(p => p.id !== id))
  }

  // Message handlers
  const markMessageRead = async (id) => {
    setMessages(messages.map(m => m.id === id ? { ...m, read: true } : m))
  }

  const deleteMessage = async (id) => {
    if (!confirm('Delete this message?')) return
    setMessages(messages.filter(m => m.id !== id))
  }

  const unreadCount = messages.filter(m => !m.read).length

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
            🏠 Properties ({properties.length})
          </a>
          <a href="#" className={activeTab === 'messages' ? 'active' : ''} onClick={() => setActiveTab('messages')}>
            💬 Messages
            {unreadCount > 0 && <span style={{ marginLeft: 'auto', background: 'var(--danger)', color: 'white', padding: '2px 8px', borderRadius: '10px', fontSize: '0.75rem' }}>{unreadCount}</span>}
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

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <>
                <div className="admin-stats">
                  <div className="stat-card">
                    <h3>{properties.length}</h3>
                    <p>Total Properties</p>
                  </div>
                  <div className="stat-card">
                    <h3>{messages.length}</h3>
                    <p>Total Messages</p>
                  </div>
                  <div className="stat-card">
                    <h3>{unreadCount}</h3>
                    <p>Unread Messages</p>
                  </div>
                  <div className="stat-card">
                    <h3>{properties.filter(p => p.featured).length}</h3>
                    <p>Featured Listings</p>
                  </div>
                </div>

                <div className="admin-card">
                  <h3 style={{ marginBottom: '20px' }}>Recent Messages</h3>
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {messages.slice(0, 5).map(msg => (
                        <tr key={msg.id}>
                          <td>{msg.name}</td>
                          <td>{msg.subject}</td>
                          <td>{msg.createdAt}</td>
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
                      {messages.length === 0 && (
                        <tr><td colSpan="4" style={{textAlign: 'center'}}>No messages yet</td></tr>
                      )}
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
                  <button className="btn btn-primary" onClick={() => setShowPropertyForm(true)}>+ Add Property</button>
                </div>

                {showPropertyForm && (
                  <div className="form-card" style={{ marginBottom: '20px' }}>
                    <h3>Add New Property</h3>
                    <form onSubmit={handlePropertySubmit}>
                      <div className="form-group">
                        <label>Title</label>
                        <input type="text" value={propertyForm.title} onChange={e => setPropertyForm({...propertyForm, title: e.target.value})} required />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <input type="text" value={propertyForm.address} onChange={e => setPropertyForm({...propertyForm, address: e.target.value})} required />
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>City</label>
                          <input type="text" value={propertyForm.city} onChange={e => setPropertyForm({...propertyForm, city: e.target.value})} required />
                        </div>
                        <div className="form-group">
                          <label>Price ($/month)</label>
                          <input type="number" value={propertyForm.price} onChange={e => setPropertyForm({...propertyForm, price: e.target.value})} required />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Bedrooms</label>
                          <input type="number" value={propertyForm.bedrooms} onChange={e => setPropertyForm({...propertyForm, bedrooms: e.target.value})} required />
                        </div>
                        <div className="form-group">
                          <label>Bathrooms</label>
                          <input type="number" value={propertyForm.bathrooms} onChange={e => setPropertyForm({...propertyForm, bathrooms: e.target.value})} required />
                        </div>
                        <div className="form-group">
                          <label>Sqft</label>
                          <input type="number" value={propertyForm.sqft} onChange={e => setPropertyForm({...propertyForm, sqft: e.target.value})} required />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Type</label>
                          <select value={propertyForm.type} onChange={e => setPropertyForm({...propertyForm, type: e.target.value})}>
                            <option value="rent">For Rent</option>
                            <option value="sale">For Sale</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Featured</label>
                          <select value={propertyForm.featured} onChange={e => setPropertyForm({...propertyForm, featured: e.target.value === 'true'})}>
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Image URL</label>
                        <input type="url" value={propertyForm.image} onChange={e => setPropertyForm({...propertyForm, image: e.target.value})} placeholder="https://..." />
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        <textarea rows="3" value={propertyForm.description} onChange={e => setPropertyForm({...propertyForm, description: e.target.value})}></textarea>
                      </div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button type="submit" className="btn btn-primary">Save Property</button>
                        <button type="button" className="btn btn-outline" onClick={() => setShowPropertyForm(false)}>Cancel</button>
                      </div>
                    </form>
                  </div>
                )}

                <div className="admin-card">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>City</th>
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
                          <td>{prop.city}</td>
                          <td>${parseInt(prop.price).toLocaleString()}</td>
                          <td>{prop.type === 'rent' ? 'Rent' : 'Sale'}</td>
                          <td>{prop.featured ? '⭐' : '—'}</td>
                          <td>
                            <button className="btn btn-outline" style={{ padding: '8px 15px', fontSize: '0.85rem', color: 'var(--danger)', borderColor: 'var(--danger)' }} onClick={() => deleteProperty(prop.id)}>Delete</button>
                          </td>
                        </tr>
                      ))}
                      {properties.length === 0 && (
                        <tr><td colSpan="7" style={{textAlign: 'center'}}>No properties yet</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {/* Messages Tab */}
            {activeTab === 'messages' && (
              <div className="admin-card">
                <h3 style={{ marginBottom: '20px' }}>All Messages ({messages.length})</h3>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Subject</th>
                      <th>Message</th>
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
                        <td style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{msg.message}</td>
                        <td>{msg.createdAt}</td>
                        <td>
                          {!msg.read && <button className="btn btn-outline" style={{ padding: '8px 15px', fontSize: '0.85rem', marginRight: '5px' }} onClick={() => markMessageRead(msg.id)}>Mark Read</button>}
                          <button className="btn btn-outline" style={{ padding: '8px 15px', fontSize: '0.85rem', color: 'var(--danger)', borderColor: 'var(--danger)' }} onClick={() => deleteMessage(msg.id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                    {messages.length === 0 && (
                      <tr><td colSpan="6" style={{textAlign: 'center'}}>No messages yet</td></tr>
                    )}
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
          </>
        )}
      </div>
    </div>
  )
}
