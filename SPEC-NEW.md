# PWS Realty - Complete Rebuild Specification

## Project Overview
- **Project**: PWS Realty Website (Complete Rebuild)
- **Design**: Homeverse-inspired with custom twists
- **Stack**: Next.js 14 + Admin Panel + SQLite/JSON backend
- **URL**: https://pwsrealty.com

---

## Design System

### Color Palette (Fresh & Modern)
```
--primary: #1B3A4B (Deep Teal)
--primary-light: #2D5A6B
--secondary: #E8B86D (Warm Gold)
--accent: #F4A261 (Coral Orange)
--dark: #0D1B2A (Navy Black)
--light: #F8F9FA (Off White)
--gray: #6C757D
--success: #28A745
--danger: #DC3545
```

### Typography
- **Headings**: "Outfit" (Google Fonts) - Modern geometric sans
- **Body**: "DM Sans" (Google Fonts) - Clean & readable
- **Accent**: "Playfair Display" (for luxury feel)

### Layout
- Max-width: 1400px
- Responsive breakpoints: 480px, 768px, 1024px, 1280px

---

## Page Structure

### 1. Homepage (/)
- Hero with search bar (buy/rent/sell tabs)
- Stats counter (properties, clients, years)
- Featured Properties grid (6 cards)
- Services section (3 cards)
- About preview with image
- CTA banner
- Footer with contact info

### 2. Properties (/properties)
- Filter sidebar (price, beds, type, location)
- Property grid with pagination
- Property card: image, price, address, beds/baths/sqft

### 3. Property Detail (/properties/[slug])
- Image gallery
- Property details
- Amenities list
- Location map
- Contact agent form
- Similar properties

### 4. About (/about)
- Company story
- Mission/vision
- Team members
- Stats

### 5. Services (/services)
- Service cards
- Process steps

### 6. Blog (/blog)
- Blog grid
- Single post page

### 7. Contact (/contact)
- Contact form
- Map
- Contact info

### 8. Admin Panel (/admin)
- Dashboard
- Properties CRUD
- Messages/Inquiries
- Settings

---

## Admin Panel Features

### Dashboard
- Total properties count
- Total messages
- Recent inquiries
- Quick actions

### Properties Management
- List all properties
- Add new property
- Edit property
- Delete property
- Toggle featured status

### Messages/Inquiries
- View all inquiries
- Mark as read
- Delete

### Settings
- Site title/description
- Contact email
- Social links

---

## Data Models

### Property
```json
{
  "id": "uuid",
  "title": "Luxury Downtown Condo",
  "slug": "luxury-downtown-condo",
  "description": "Full description...",
  "price": 4500,
  "type": "rent", // or "sale"
  "status": "available", // or "sold", "rented"
  "address": "123 Main St, Jersey City, NJ",
  "city": "Jersey City",
  "state": "NJ",
  "zip": "07302",
  "bedrooms": 3,
  "bathrooms": 2,
  "sqft": 2200,
  "yearBuilt": 2020,
  "garage": 1,
  "amenities": ["Pool", "Gym", "Doorman"],
  "images": ["/img1.jpg", "/img2.jpg"],
  "featured": true,
  "createdAt": "2026-02-22"
}
```

### Message
```json
{
  "id": "uuid",
  "name": "John Doe",
  "email": "john@email.com",
  "phone": "555-123-4567",
  "subject": "Inquiry about property",
  "message": "Full message...",
  "propertyId": "uuid (optional)",
  "read": false,
  "createdAt": "2026-02-22"
}
```

---

## Components

### Header
- Logo
- Navigation links
- CTA button
- Mobile menu toggle

### Footer
- Logo & description
- Quick links
- Contact info
- Social icons
- Copyright

### PropertyCard
- Image with badge (For Rent/Sale)
- Price
- Address
- Features (beds, baths, sqft)
- View details button

### SearchBar
- Tab switcher (Buy/Rent/Sell)
- Location input
- Property type dropdown
- Price range
- Search button

### AdminSidebar
- Logo
- Nav items with icons
- Logout

---

## API Endpoints

### Properties
- GET /api/properties - List all
- GET /api/properties/[slug] - Get single
- POST /api/properties - Create
- PUT /api/properties/[id] - Update
- DELETE /api/properties/[id] - Delete

### Messages
- GET /api/messages - List all
- POST /api/messages - Create
- PUT /api/messages/[id]/read - Mark read
- DELETE /api/messages/[id] - Delete

### Settings
- GET /api/settings - Get all
- PUT /api/settings - Update

---

## Acceptance Criteria

1. ✅ Homepage loads with hero, stats, properties, services
2. ✅ Properties page shows filterable grid
3. ✅ Property detail page shows all info
4. ✅ Contact form submits and stores messages
5. ✅ Admin panel accessible at /admin
6. ✅ Full CRUD for properties in admin
7. ✅ Mobile responsive
8. ✅ Fast loading (Next.js static generation)
9. ✅ SEO optimized (meta tags, semantic HTML)
10. ✅ Deployed and live at pwsrealty.com
