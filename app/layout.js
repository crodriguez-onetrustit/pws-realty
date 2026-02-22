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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pwsrealty.com',
    siteName: 'Properties With Stephanie Realty',
    title: 'Properties With Stephanie Realty | New Jersey\'s Trusted Rental Partner',
    description: 'Premium property management in New Jersey. Find your perfect rental or let us manage your property.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Properties With Stephanie Realty - New Jersey Real Estate'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Properties With Stephanie Realty',
    description: 'Premium property management in New Jersey',
    creator: '@pwsrealty',
    images: ['/og-image.jpg']
  },
  verification: {
    google: 'google-site-verification-code',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
              "image": "/og-image.jpg",
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
