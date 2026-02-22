import './globals.css'

export const metadata = {
  title: {
    default: 'Properties With Stephanie Realty | New Jersey\'s Trusted Rental Partner',
    template: '%s | Properties With Stephanie Realty'
  },
  description: 'Premium property management in New Jersey. Find your perfect rental or let us manage your property. Stephanie Munoz has 15+ years of NJ real estate experience.',
  keywords: ['real estate', 'property management', 'rentals', 'New Jersey', 'NJ apartments', 'landlord', 'Stephanie Munoz'],
  authors: [{ name: 'Stephanie Munoz' }],
  creator: 'Stephanie Munoz',
  publisher: 'Properties With Stephanie Realty',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Properties With Stephanie Realty",
              "description": "Premium property management in New Jersey",
              "url": "https://pwsrealty.com",
              "telephone": "+1-786-925-2344",
              "email": "SMunoz@pwsrealty.com",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "NJ",
                "addressLocality": "New Jersey",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.7138",
                "longitude": "-74.0060"
              },
              "areaServed": {
                "@type": "State",
                "name": "New Jersey"
              },
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-18:00",
              "owner": {
                "@type": "Person",
                "name": "Stephanie Munoz"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
