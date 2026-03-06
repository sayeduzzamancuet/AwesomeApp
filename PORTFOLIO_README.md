# Angular 21 Production-Ready Portfolio Application

A modern, modular, and fully-responsive portfolio application built with **Angular 21+** using standalone components, reactive forms, and a clean architecture pattern.

## 🎯 Features

✅ **Modern Architecture**
- Standalone components with tree-shakable imports
- Feature-based folder structure (`core`, `shared`, `features`)
- Reactive Forms with validation
- Strong typing with TypeScript interfaces

✅ **Performance Optimized**
- Lazy loading with intersection observers
- Image optimization with native lazy loading
- Production builds with tree-shaking and minification
- Accessibility-first design (WCAG 2.1 compliant)

✅ **Responsive & Mobile-First**
- Mobile-first responsive design
- Hamburger navigation for small screens
- Touch-friendly interactions
- Cross-browser compatibility

✅ **Developer Experience**
- Comprehensive unit tests with Vitest
- TypeScript strict mode enabled
- Well-documented code with JSDoc comments
- ESLint-ready configuration

## 📁 Project Structure

```
src/
├── app/
│   ├── core/
│   │   └── models/
│   │       └── portfolio.models.ts          # Typed data models
│   ├── shared/
│   │   └── directives/
│   │       └── fade-in.directive.ts         # Intersection Observer animation
│   ├── features/
│   │   └── portfolio/
│   │       ├── components/
│   │       │   ├── portfolio-layout/        # Main container
│   │       │   ├── portfolio-header/        # Navigation header
│   │       │   ├── hero-section/            # Hero banner
│   │       │   ├── about-section/           # About & stats
│   │       │   ├── skills-section/          # Technical skills
│   │       │   ├── experience-section/      # Work experience timeline
│   │       │   ├── projects-section/        # Project showcase
│   │       │   ├── contact-section/         # Contact form
│   │       │   └── portfolio-footer/        # Footer with links
│   │       └── data/
│   │           └── portfolio.data.ts        # Static content (TypeScript)
│   ├── app.ts                               # Root component
│   ├── app.routes.ts                        # Route definitions
│   ├── app.config.ts                        # Application configuration
│   └── app.spec.ts                          # App unit tests
├── main.ts                                  # Bootstrap entry point
├── styles.css                               # Global design system
├── index.html                               # HTML template
└── favicon.ico                              # App icon
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 10+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# App runs at http://localhost:4200
```

### Development

```bash
# Build for production
npm run build

# Run unit tests
npm test

# Watch mode for development
npm run watch
```

## 📊 Architecture Overview

### Core Layer
- **Models**: TypeScript interfaces for type safety
  - `PortfolioData`: Main data structure
  - `NavItem`, `HeroContent`, `ProjectItem`, etc.

### Shared Layer
- **Directives**: Reusable utilities
  - `FadeInDirective`: Scroll-triggered animations with Intersection Observer API

### Features Layer (Portfolio)
- **Components**: Standalone, self-contained UI components
  - Each component has its own template (HTML), styles (CSS), and logic (TS)
  - Reactive and strongly typed inputs/outputs
  - Minimal interdependencies

- **Data**: Centralized portfolio data
  - `PORTFOLIO_DATA`: Single source of truth for all portfolio content
  - Easy to migrate to API calls without refactoring components

## 🎨 Design System

### Color Palette (CSS Variables)
```css
--primary: #2563eb              /* Action colors */
--secondary: #0f172a            /* Text & dark backgrounds */
--bg-light: #f8fafc             /* Light backgrounds */
--text-main: #334155            /* Main text */
--text-light: #64748b           /* Secondary text */
```

### Typography
- **Headings**: Inter (700 weight) - modern sans-serif
- **Body**: Inter (400/500/600) - legible and friendly
- **Code**: JetBrains Mono - technical snippets

### Spacing System
- Base unit: 0.5rem (8px)
- Sections: 6rem vertical padding
- Container: 1200px max-width with 2rem horizontal padding

## 🔧 Configuration

### App Configuration (`app.config.ts`)
```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
```

### Routes (`app.routes.ts`)
```typescript
export const routes: Routes = [
  {
    path: '',
    component: PortfolioLayoutComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
```

## 📝 Content Management

All portfolio content is defined in `portfolio.data.ts`:

```typescript
export const PORTFOLIO_DATA: PortfolioData = {
  name: 'Sayed Uz Zaman',
  role: 'Senior Full-Stack .NET & Angular Engineer',
  navItems: [...],
  hero: {...},
  about: {...},
  skills: [...],
  experience: [...],
  projects: [...],
  contact: {...},
  footer: {...}
};
```

**To update content:**
1. Edit values in `src/app/features/portfolio/data/portfolio.data.ts`
2. TypeScript will warn of type mismatches
3. Changes reflect immediately in dev server

## 🧪 Testing

### Unit Tests
```bash
npm test
```

Tests included for:
- App component creation
- Portfolio layout initialization
- Hero section rendering
- Form validation

### Test Structure
Each component has a corresponding `.spec.ts` file with:
- Component creation tests
- Template rendering tests
- Input/Output tests
- Interaction tests

## ♿ Accessibility Features

✅ Semantic HTML structure
- `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Proper heading hierarchy (h1 → h6)
- Navigation landmarks

✅ Keyboard Navigation
- Tab focus management
- Accessible form controls
- Skip links support

✅ Screen Reader Support
- ARIA labels where needed
- Alt text for images
- Semantic button/link roles

✅ Visual Accessibility
- WCAG AA color contrast ratios
- Focus indicators on interactive elements
- Readable font sizes (16px base)

## 📱 Responsive Breakpoints

```css
/* Desktop (1200px+) */
/* Tablet (768px - 1199px) */
@media (max-width: 768px) { ... }

/* Mobile (480px - 767px) */
@media (max-width: 480px) { ... }
```

## 🔐 Security Best Practices

- ✅ Angular security built-in (XSS, CSRF protection)
- ✅ No inline scripts (CSP compliant)
- ✅ Sanitized form inputs
- ✅ TypeScript strict mode enabled
- ✅ Dependencies scanned for CVEs

## 📈 Performance Metrics

### Lighthouse Scores Target
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### Optimization Techniques
- Code splitting with standalone components
- Tree-shaking of unused code
- Image lazy loading (native `loading="lazy"`)
- Minification in production builds
- Critical CSS inlining

## 🔄 CI/CD Integration

### Build Configuration
- Browser support: Modern browsers (2+ versions)
- Output hashing: All files in production
- Source maps: Enabled for debugging
- Polyfills: None (modern Angular 21)

### Production Build
```bash
npm run build
# Output: dist/awesome-app/
```

## 📚 Dependencies

### Core
- `@angular/core`: ^21.2.0
- `@angular/router`: ^21.2.0
- `@angular/forms`: ^21.2.0
- `rxjs`: ~7.8.0

### Dev Tools
- `@angular/cli`: ^21.2.1
- `typescript`: ~5.9.2
- `vitest`: ^4.0.8

## 🤝 Contributing

1. Create a feature branch
2. Follow the existing component structure
3. Add unit tests for new features
4. Run tests before submitting PR
5. Ensure build passes without warnings

## 📄 License

MIT License - See LICENSE file for details

## 🆘 Troubleshooting

### Port 4200 already in use
```bash
ng serve --port 4300
```

### Module not found errors
```bash
npm install
rm -rf node_modules/.angular
```

### CSS not loading
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild: `npm run build`

## 📞 Support

For questions or issues:
1. Check the README and inline comments
2. Review Angular docs: https://angular.dev
3. File an issue with reproduction steps

---

**Built with ❤️ using Angular 21+ and TypeScript**

