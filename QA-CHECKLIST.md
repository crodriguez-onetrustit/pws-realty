# PWS Realty - Luxury Redesign

## Project Overview
- **URL**: https://pwsrealty.com
- **Server**: root@66.228.32.190
- **Stack**: Next.js 14, React, Custom CSS
- **Status**: Redesign in progress

---

## Pre-Deploy Checklist

### Code Quality
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] ESLint passing (`npm run lint`)
- [ ] All tests passing (`npx playwright test`)

### Security
- [ ] No hardcoded secrets
- [ ] Environment variables documented
- [ ] Dependencies audited (`npm audit`)

### Performance
- [ ] Bundle size acceptable
- [ ] No console.log statements
- [ ] Images optimized

### UI/UX
- [ ] Matches Rolixy reference design
- [ ] Responsive on mobile/tablet/desktop
- [ ] Navigation works
- [ ] Property cards display correctly

### Documentation
- [ ] README updated
- [ ] CHANGELOG updated

---

## QA Test Results

### Browser Tests
| Test | Status |
|------|--------|
| Homepage loads | - |
| Hero section visible | - |
| Navigation works | - |
| Property cards display | - |
| Stats section visible | - |
| Footer visible | - |
| No console errors | - |

### Responsive Tests
| Viewport | Status |
|----------|--------|
| Desktop (1920x1080) | - |
| Tablet (768x1024) | - |
| Mobile (375x667) | - |

---

## Deployment Steps

### 1. Local Build
```bash
npm run build
```

### 2. Run Tests
```bash
npx playwright test
```

### 3. Deploy to Server
```bash
# Via GitHub Actions (automatic)
git push origin main

# Or manual
scp -r ./app root@66.228.32.190:/var/www/pwsrealty_new/app/
ssh root@66.228.32.190 "cd /var/www/pwsrealty_new && npm run build"
```

### 4. Verify
```bash
curl http://66.228.32.190:3000
curl https://pwsrealty.com
```

---

## Rollback Steps

If deployment fails:
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or restore from backup
cd /var/www/pwsrealty_new
git checkout <previous-tag>
npm run build
```

---

## Current Issues

| Issue | Status | Notes |
|-------|--------|-------|
| nginx /mc/ proxy | ❌ Broken | API not routing correctly |
| Cloudflare cache | ⚠️ May need purge | |
| Sample properties hardcoded | ✅ Working | Need dynamic from API |

---

## Last Updated
2026-02-22 3:00 PM ET
