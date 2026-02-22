# PWS Realty Website

New Jersey property management website built with Next.js 14.

## 🚀 Quick Start

```bash
# Install
npm install

# Dev
npm run dev

# Build
npm run build
```

## 📦 Tech Stack

- Next.js 14 (App Router)
- React 18
- Node.js API
- nginx

## 📱 Pages

| Page | Route |
|------|-------|
| Home | `/` |
| Listings | `/listings` |
| About | `/about` |
| Services | `/services` |
| FAQ | `/faq` |
| Apply | `/apply` |
| Criteria | `/criteria` |
| Fair Housing | `/fair-housing` |
| Privacy | `/privacy` |
| Contact | `/contact` |
| Admin | `/admin` |

## 🏗️ Architecture

```
┌─────────────┐     ┌─────────────┐
│  Cloudflare │────▶│   nginx     │
│   (SSL)     │     │  (proxy)    │
└─────────────┘     └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
         ┌────────┐  ┌────────┐  ┌────────┐
         │ Next.js│  │ Node.js│  │ Static │
         │  :3000 │  │  :8899 │  │  Files │
         └────────┘  └────────┘  └────────┘
```

## 🔧 Environment

```bash
cp .env.example .env.local
```

## 📊 Roadmap

### v1.0 (Current)
- [x] Core pages
- [x] Listings with filters
- [x] Contact form
- [x] Application form
- [x] Admin panel
- [x] SEO setup

### v1.1 (Next)
- [ ] Docker deployment
- [ ] CI/CD pipeline
- [ ] Analytics integration
- [ ] Property image upload

### v1.2 (Planned)
- [ ] Tenant portal
- [ ] Online payments
- [ ] Maintenance requests
- [ ] Multi-language support

## 📄 License

Proprietary - Stephanie Munoz

<!-- Updated: Sun Feb 22 08:27:24 EST 2026 -->
