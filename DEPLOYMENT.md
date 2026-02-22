# PWS Realty - Deployment Runbook

## Quick Deploy (Manual)
```bash
# Build locally
npm run build

# Deploy to server
ssh root@66.228.32.190
cd /var/www/pwsrealty_new
git pull
npm run build
pm2 restart pwsrealty
```

## Docker Deploy
```bash
# Build
docker build -t pwsrealty:latest .

# Run
docker run -d -p 3000:3000 pwsrealty:latest
```

## GitHub Actions (CI/CD)
1. Push to main branch
2. Auto-runs tests
3. Auto-deploys to staging
4. Manual approval for production

## Environments
| Env | URL | Trigger |
|-----|-----|---------|
| Dev | localhost:3000 | PRs |
| Staging | staging.pwsrealty.com | Push to main |
| Production | pwsrealty.com | Manual approval |

## Rollback
```bash
pm2 delete pwsrealty
git checkout <previous-tag>
npm run build
pm2 start
```
