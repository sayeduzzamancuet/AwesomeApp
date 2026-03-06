# Production Deployment Guide

## Pre-Deployment Checklist

### 1. Code Quality
- [ ] All tests pass: `npm test`
- [ ] No TypeScript errors: `npx tsc --noEmit`
- [ ] No console errors/warnings
- [ ] Code review completed
- [ ] Dependencies updated and audited

### 2. Build Verification
```bash
npm run build
# Expected output: dist/awesome-app/ with optimized bundle
```

Check build output:
- [ ] Bundle size < 500KB
- [ ] No dead code warnings
- [ ] Source maps generated
- [ ] All assets copied

### 3. Browser Testing
Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile (iOS Safari, Chrome Android)

### 4. Performance Audit
```bash
npm run build
# Use Lighthouse CI or WebPageTest
```

Target metrics:
- [ ] First Contentful Paint (FCP) < 2s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Time to Interactive (TTI) < 3.8s

### 5. Accessibility Audit
- [ ] Run axe DevTools scan
- [ ] Check keyboard navigation
- [ ] Verify screen reader compatibility
- [ ] Test at 200% zoom level
- [ ] Color contrast verified (WCAG AA)

## Deployment Steps

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir dist/awesome-app
```

### Option 3: GitHub Pages (Automated via GitHub Actions)

This repo now includes a workflow at `.github/workflows/deploy-gh-pages.yml`.

1. Push your changes to `main`
2. In GitHub: **Settings -> Pages**
3. Set **Source** to **GitHub Actions**
4. Wait for the `Deploy Angular App to GitHub Pages` workflow to finish

The workflow will:
- Install dependencies with `npm ci`
- Build with a repo-aware base href (`/${repo-name}/`)
- Add an SPA fallback (`404.html`)
- Publish `dist/AwesomeApp/browser` to GitHub Pages

Your site URL will be:
`https://<your-github-username>.github.io/<your-repository-name>/`

Manual fallback (if needed):
```bash
npm ci
npm run build -- --base-href /<your-repository-name>/
```

Then upload the contents of `dist/AwesomeApp/browser` to your Pages source.

### Option 4: Traditional Server (Nginx)
```bash
# Build
npm run build

# Copy dist folder to server
scp -r dist/awesome-app user@server:/var/www/portfolio

# Nginx config
server {
  listen 80;
  server_name yourdomain.com;
  
  root /var/www/portfolio;
  index index.html;
  
  # Angular routing fallback
  location / {
    try_files $uri $uri/ /index.html;
  }
  
  # Enable gzip compression
  gzip on;
  gzip_types text/plain text/css text/javascript application/javascript;
  
  # Security headers
  add_header X-Frame-Options "SAMEORIGIN" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header X-XSS-Protection "1; mode=block" always;
  add_header Referrer-Policy "no-referrer-when-downgrade" always;
}
```

### Option 5: Docker
```dockerfile
# Dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/awesome-app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and push:
```bash
docker build -t portfolio:latest .
docker run -p 80:80 portfolio:latest
```

## Post-Deployment

### 1. Verify Production Build
- [ ] Home page loads correctly
- [ ] All sections render properly
- [ ] Navigation works
- [ ] Forms submit successfully
- [ ] Images load without errors
- [ ] No 404 errors in console

### 2. Monitor Performance
- [ ] Set up Sentry for error tracking
- [ ] Configure analytics (GA4)
- [ ] Monitor uptime with UptimeRobot
- [ ] Set up alerts for critical errors

### 3. Redirect Old URLs (if migrating)
```nginx
# nginx
rewrite ^/old-portfolio/(.*)$ /$1 permanent;

# .htaccess (Apache)
Redirect 301 /old-portfolio https://yourdomain.com
```

### 4. SEO Configuration
Add to `index.html`:
```html
<meta name="description" content="Sayed Uz Zaman - Senior Full-Stack .NET & Angular Engineer">
<meta name="keywords" content=".NET, Angular, Azure, C#, TypeScript">
<meta name="author" content="Sayed Uz Zaman">
<meta property="og:title" content="Sayed Uz Zaman - Portfolio">
<meta property="og:description" content="Senior Full-Stack Engineer specializing in .NET and Angular">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">
```

### 5. SSL Certificate
Ensure HTTPS is enabled:
- [ ] Certificate installed and valid
- [ ] Redirect HTTP to HTTPS
- [ ] No mixed content warnings
- [ ] Certificate auto-renewal configured

## Rollback Plan

If issues occur:

```bash
# Quick rollback (if using Git)
git revert <commit-hash>
npm run build
# Re-deploy

# Or restore from previous build artifact
aws s3 cp s3://backups/portfolio-20240307.tar.gz . --region us-east-1
tar -xzf portfolio-20240307.tar.gz
# Serve files
```

## Monitoring Commands

```bash
# Check deployed version
curl -I https://yourdomain.com

# Monitor error logs
tail -f /var/log/nginx/error.log

# Check server status
uptime
df -h
free -h

# Test HTTPS
https://www.ssllabs.com/ssltest/analyze.html?d=yourdomain.com
```

## Environment Variables (for API integration)

Create `.env.production`:
```
NG_APP_API_URL=https://api.example.com
NG_APP_ANALYTICS_ID=UA-XXXXXXXXX-X
```

Reference in code:
```typescript
const apiUrl = environment.apiUrl; // Uses value from environment files
```

## Troubleshooting

### White Screen After Deploy
- Check browser console for errors
- Verify `baseHref` in `angular.json` matches deployment path
- Clear browser cache (Ctrl+Shift+Delete)
- Check that all assets loaded (Network tab)

### Routes Not Working
Ensure server redirects all routes to `index.html`:
```nginx
try_files $uri $uri/ /index.html;
```

### Assets Return 404
- Check asset paths in `angular.json`
- Verify `public/` folder copied to deployment
- Check file permissions (should be 644)

### High Load Time
- Enable gzip compression
- Enable HTTP/2
- Minify and optimize images
- Consider CDN for static assets

## Performance Optimization Post-Deploy

```bash
# Analyze bundle size
npm run build -- --stats-json
npm install -g webpack-bundle-analyzer
webpack-bundle-analyzer dist/awesome-app/stats.json
```

## Support & Maintenance

- Schedule weekly uptime checks
- Monthly security audits
- Quarterly performance reviews
- Update dependencies quarterly
- Backup database/data monthly

---

**Last Updated**: March 7, 2026
**Deployment Version**: 1.0.0

