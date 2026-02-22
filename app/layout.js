import './globals.css'
import { Metadata } from 'next'

export const metadata = {
  title: 'PWS Realty | New Jersey\'s Trusted Real Estate Partner',
  description: 'Find your dream home with PWS Realty. Premium property management and real estate services in New Jersey. Stephanie Munoz has 15+ years of experience.',
  keywords: 'real estate, property management, rentals, New Jersey, NJ apartments, landlord, Stephanie Munoz',
  author: 'Stephanie Munoz',
  openGraph: {
    title: 'PWS Realty | New Jersey\'s Trusted Real Estate Partner',
    description: 'Find your dream home with PWS Realty.',
    type: 'website',
    locale: 'en_US',
    site_name: 'PWS Realty',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Outfit:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
