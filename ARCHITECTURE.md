# Angular Portfolio - Architecture & Developer Guide

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Folder Structure](#folder-structure)
3. [Component Development](#component-development)
4. [Data Flow](#data-flow)
5. [Styling Guidelines](#styling-guidelines)
6. [Best Practices](#best-practices)
7. [Common Tasks](#common-tasks)

---

## Architecture Overview

This application follows **Clean Architecture** principles with **Feature-Based Structure**:

```
┌─────────────────────────────────────────┐
│         App Shell (app.ts)              │
│      RouterOutlet (navigation)          │
└──────────────────┬──────────────────────┘
                   │
        ┌──────────┴──────────┐
        │                     │
    ┌───▼────┐         ┌──────▼────┐
    │  Core  │         │  Features  │
    │ Layer  │         │   Layer    │
    └────┬───┘         └──────┬─────┘
         │                    │
    ┌────▼─────┐         ┌────▼──────────┐
    │  Models  │         │  Portfolio    │
    │  Services│         │  Components   │
    │          │         │  & Data       │
    └──────────┘         └───────────────┘
         ▲                       ▲
         └───────┬───────────────┘
                 │
         ┌───────▼────────┐
         │  Shared Layer  │
         │  (Directives,  │
         │   Utilities)   │
         └────────────────┘
```

### Layer Responsibilities

#### 📦 **Core Layer** (`src/app/core/`)
- **Purpose**: Application-wide services and data models
- **Contents**: 
  - `models/`: TypeScript interfaces and types
  - Service classes (if needed for API calls)
  - Guards and interceptors

**When to use**: Global business logic, models, constants

#### 🎨 **Features Layer** (`src/app/features/`)
- **Purpose**: Feature-specific components and logic
- **Structure**:
  ```
  features/
  └── portfolio/
      ├── components/        # Standalone components
      ├── data/             # Static data
      └── services/         # Feature-specific services
  ```

**When to use**: Feature-specific UI, business logic, data

#### 🔧 **Shared Layer** (`src/app/shared/`)
- **Purpose**: Reusable directives, pipes, utilities
- **Contents**:
  - `directives/`: Custom directives (FadeIn, LazyLoad, etc.)
  - `pipes/`: Custom pipes (FormatDate, etc.)
  - `components/`: Shared UI components

**When to use**: Code that multiple features reuse

---

## Folder Structure

```
AwesomeApp/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── models/
│   │   │   │   └── portfolio.models.ts      ✅ Type definitions
│   │   │   ├── services/                    (Optional) API calls
│   │   │   └── guards/                      (Optional) Route guards
│   │   │
│   │   ├── shared/
│   │   │   ├── directives/
│   │   │   │   └── fade-in.directive.ts     ✅ Scroll animation
│   │   │   ├── pipes/                       (Optional)
│   │   │   └── components/                  (Optional) Shared UI
│   │   │
│   │   ├── features/
│   │   │   └── portfolio/
│   │   │       ├── components/
│   │   │       │   ├── portfolio-layout/            ✅ Main layout
│   │   │       │   ├── portfolio-header/            ✅ Navigation
│   │   │       │   ├── hero-section/                ✅ Banner
│   │   │       │   ├── about-section/               ✅ About
│   │   │       │   ├── skills-section/              ✅ Skills
│   │   │       │   ├── experience-section/          ✅ Timeline
│   │   │       │   ├── projects-section/            ✅ Portfolio
│   │   │       │   ├── contact-section/             ✅ Form
│   │   │       │   └── portfolio-footer/            ✅ Footer
│   │   │       ├── data/
│   │   │       │   └── portfolio.data.ts    ✅ Content
│   │   │       └── services/                (Optional) Feature services
│   │   │
│   │   ├── app.ts                           ✅ Root component
│   │   ├── app.routes.ts                    ✅ Routing
│   │   ├── app.config.ts                    ✅ Configuration
│   │   ├── app.html                         ✅ Template
│   │   ├── app.css                          (Empty - use global styles)
│   │   └── app.spec.ts                      ✅ Tests
│   │
│   ├── main.ts                              ✅ Bootstrap
│   ├── styles.css                           ✅ Global styles
│   ├── index.html                           ✅ HTML entry
│   └── favicon.ico
│
├── public/                                  # Static assets
│   └── assets/                              (Optional) Images
│
├── angular.json                             ✅ Build config
├── tsconfig.json                            ✅ TypeScript config
├── tsconfig.app.json
├── tsconfig.spec.json
├── package.json                             ✅ Dependencies
├── PORTFOLIO_README.md                      📚 Feature guide
├── ARCHITECTURE.md                          📚 This file
├── DEPLOYMENT.md                            📚 Deploy guide
└── README.md                                📚 Original readme
```

---

## Component Development

### Creating a New Component

#### Step 1: Generate component structure
```bash
# Create folder
mkdir src/app/features/portfolio/components/my-component

# Create files (manually)
touch src/app/features/portfolio/components/my-component/my-component.component.ts
touch src/app/features/portfolio/components/my-component/my-component.component.html
touch src/app/features/portfolio/components/my-component/my-component.component.css
touch src/app/features/portfolio/components/my-component/my-component.component.spec.ts
```

#### Step 2: Create component class

```typescript
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,                          // ✅ Standalone
  imports: [CommonModule],                   // Import dependencies
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponent implements OnInit {
  @Input({ required: true }) title = '';     // Typed input
  
  protected isLoading = false;               // Protected = template access

  ngOnInit(): void {
    // Initialization logic
  }

  protected handleClick(): void {
    // Event handler
  }
}
```

**Key Points**:
- ✅ Always `standalone: true`
- ✅ Import only what you need
- ✅ Use `protected` for template access (not `public`)
- ✅ Use `@Input({ required: true })` for required inputs
- ✅ Strong typing throughout

#### Step 3: Create template

```html
<section class="my-section">
  <h2>{{ title }}</h2>
  @if (isLoading) {
    <p>Loading...</p>
  } @else {
    <button (click)="handleClick()">Click me</button>
  }
</section>
```

**Best Practices**:
- Use `@if` / `@else` / `@for` (Angular 17+)
- Use `(event)` for event binding
- Use `[property]` for property binding
- Use `{{ expression }}` for interpolation
- Use `[attr.aria-*]` for accessibility

#### Step 4: Create styles

```css
.my-section {
  padding: 2rem;
  background: var(--bg-white);
  border-radius: 8px;
}

.my-section h2 {
  margin-bottom: 1rem;
  color: var(--secondary);
}
```

**Scoped Styling**:
- Component styles are scoped by default
- Use CSS variables from global styles
- Follow BEM naming for clarity
- Mobile-first responsive design

#### Step 5: Add unit tests

```typescript
import { TestBed } from '@angular/core/testing';
import { MyComponent } from './my-component.component';

describe('MyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MyComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MyComponent);
    const component = fixture.componentInstance;
    component.title = 'Test Title';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Test Title');
  });
});
```

#### Step 6: Use component

```html
<!-- In parent component -->
<app-my-component [title]="'Hello World'"></app-my-component>
```

---

## Data Flow

### 📊 Unidirectional Data Flow

```
┌──────────────────────────────┐
│  Portfolio Data (TypeScript)  │
│  src/.../portfolio.data.ts    │
└────────────────┬─────────────┘
                 │
    ┌────────────▼────────────┐
    │  Portfolio Layout       │
    │  (Container Component)  │
    └────────────┬────────────┘
                 │
        ┌────────┴────────┬──────────┬─────────┐
        │                 │          │         │
    ┌───▼──┐         ┌────▼──┐   ┌──▼───┐ ┌───▼──┐
    │ Hero │         │ About │   │Skills│ │ ... │
    │Input │         │Input  │   │Input │ │     │
    └──────┘         └───────┘   └──────┘ └─────┘
```

### Data Binding Pattern

```typescript
// 1. Define data in portfolio.data.ts
export const PORTFOLIO_DATA = {
  name: 'John Doe',
  hero: { ... }
};

// 2. Pass to components via @Input
<app-hero-section [hero]="data.hero"></app-hero-section>

// 3. Component displays data
export class HeroComponent {
  @Input({ required: true }) hero!: HeroContent;
}

// In template:
<h1>{{ hero.heading }}</h1>
```

### Updating Data

To update portfolio content:

```typescript
// ❌ Don't modify PORTFOLIO_DATA directly
PORTFOLIO_DATA.name = 'Jane Doe'; // Bad!

// ✅ Create new object
export const PORTFOLIO_DATA = {
  ...oldData,
  name: 'Jane Doe'  // Override
};
```

---

## Styling Guidelines

### 1. Global Styles (`src/styles.css`)

Used for:
- Design tokens (CSS variables)
- Reset and base styles
- Common utilities
- Responsive breakpoints

```css
:root {
  --primary: #2563eb;           /* Action colors */
  --secondary: #0f172a;         /* Text colors */
  --bg-light: #f8fafc;          /* Backgrounds */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
```

### 2. Component Styles

Used for:
- Component-specific styling
- Layout and positioning
- Animations and transitions
- Scoped to component only

```typescript
@Component({
  selector: 'app-button',
  styleUrl: './button.component.css'  // Scoped styles
})
```

```css
/* button.component.css - Only affects this component */
.btn {
  padding: 0.5rem 1rem;
  background: var(--primary);  /* Reference global tokens */
}
```

### 3. CSS Variable Usage

Always use CSS variables for consistency:

```css
/* ✅ Good */
color: var(--primary);
background: var(--bg-light);

/* ❌ Avoid */
color: #2563eb;
background: #f8fafc;
```

### 4. Responsive Design

Mobile-first approach:

```css
/* Mobile first - default styles */
.card {
  width: 100%;
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .card {
    width: 50%;
    padding: 2rem;
  }
}

/* Desktop and up */
@media (min-width: 1200px) {
  .card {
    width: 33.33%;
  }
}
```

### 5. Naming Convention (BEM)

Block-Element-Modifier pattern:

```css
/* Block: main component */
.card { ... }

/* Element: part of block */
.card__header { ... }
.card__body { ... }

/* Modifier: variation */
.card--featured { ... }
.card--highlighted { ... }

/* Usage */
<div class="card card--featured">
  <div class="card__header">...</div>
  <div class="card__body">...</div>
</div>
```

---

## Best Practices

### 1. TypeScript

```typescript
// ✅ Always type everything
interface User {
  name: string;
  age: number;
}

const user: User = { name: 'John', age: 30 };

// ✅ Use strict mode
"strict": true  // in tsconfig.json

// ❌ Avoid 'any'
const value: any = getData();  // Bad!

// ✅ Use 'unknown' instead
const value: unknown = getData();
if (typeof value === 'string') {
  console.log(value.toUpperCase());
}
```

### 2. Components

```typescript
// ✅ Standalone components
@Component({
  standalone: true,
  imports: [CommonModule]
})

// ✅ Strongly typed inputs
@Input({ required: true }) name!: string;
@Input() count: number = 0;

// ✅ Separate concerns
// - Component for UI logic only
// - Use services for business logic
// - Keep templates simple

// ❌ Avoid
// - Complex logic in templates
// - Two-way binding for everything
// - Modifying parent data from child
```

### 3. Performance

```typescript
// ✅ OnPush strategy for better performance
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})

// ✅ Lazy load images
<img [src]="imagePath" loading="lazy" />

// ✅ Use trackBy with *ngFor
@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
}

// ❌ Avoid
// - Change detection runs constantly
// - Heavy computations in templates
// - Untracked loops
// - Unnecessary subscriptions
```

### 4. Testing

```typescript
// ✅ Test user behavior
it('should show form error on invalid input', () => {
  component.form.get('email')?.setValue('invalid');
  fixture.detectChanges();
  expect(component.errorMessage).toContain('Invalid email');
});

// ✅ Test component interaction
it('should emit event on button click', () => {
  spyOn(component.save, 'emit');
  fixture.debugElement.query(By.css('button')).nativeElement.click();
  expect(component.save.emit).toHaveBeenCalled();
});

// ❌ Avoid
// - Testing implementation details
// - Mocking when not needed
// - Testing library code
// - Skipping important tests
```

### 5. Accessibility

```html
<!-- ✅ Semantic HTML -->
<header>Navigation</header>
<main>Content</main>
<footer>Footer</footer>

<!-- ✅ ARIA labels -->
<button aria-label="Close menu" (click)="closeMenu()">×</button>

<!-- ✅ Focus management -->
<a href="#main" class="skip-link">Skip to content</a>

<!-- ✅ Alt text -->
<img src="avatar.jpg" alt="User profile picture">

<!-- ❌ Avoid -->
<div role="button">Click me</div>         <!-- Use <button> -->
<img src="photo.jpg">                     <!-- Missing alt -->
<div class="header">Content</div>         <!-- Use <header> -->
```

---

## Common Tasks

### Adding a New Section

1. **Create component**:
   ```bash
   mkdir src/app/features/portfolio/components/new-section
   ```

2. **Create files**: `.ts`, `.html`, `.css`, `.spec.ts`

3. **Add to layout**:
   ```html
   <!-- portfolio-layout.component.html -->
   <app-new-section [data]="data.newSection"></app-new-section>
   ```

4. **Update data model**:
   ```typescript
   // portfolio.models.ts
   export interface PortfolioData {
     // ... existing
     newSection: YourType;
   }

   // portfolio.data.ts
   export const PORTFOLIO_DATA = {
     // ... existing
     newSection: { ... }
   };
   ```

### Updating Portfolio Content

1. Open `src/app/features/portfolio/data/portfolio.data.ts`
2. Update the `PORTFOLIO_DATA` constant
3. TypeScript will validate types
4. Changes auto-reload in dev mode

Example:
```typescript
export const PORTFOLIO_DATA: PortfolioData = {
  name: 'Your Name',
  role: 'Your Role',
  // ... update other fields
};
```

### Adding Form Validation

```typescript
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) return;
    // Submit data
  }
}
```

### Connecting to an API

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  constructor(private http: HttpClient) {}

  getPortfolio() {
    return this.http.get('/api/portfolio');
  }
}

// In component:
export class PortfolioComponent implements OnInit {
  constructor(private service: PortfolioService) {}

  ngOnInit() {
    this.service.getPortfolio().subscribe(data => {
      this.portfolioData = data;
    });
  }
}
```

### Adding Animations

```typescript
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-card',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class CardComponent {}
```

```html
<div @fadeIn>Content</div>
```

---

## Testing Commands

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test -- hero-section.component.spec.ts

# Generate coverage report
npm test -- --coverage
```

## Build Commands

```bash
# Development build
npm start

# Production build
npm run build

# View bundle analysis
npm run build -- --stats-json
```

---

**Last Updated**: March 7, 2026
**Angular Version**: 21.2.0
**TypeScript Version**: 5.9.2

