import { TestBed } from '@angular/core/testing';
import { PortfolioLayoutComponent } from './portfolio-layout.component';

describe('PortfolioLayoutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioLayoutComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PortfolioLayoutComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should load portfolio data', () => {
    const fixture = TestBed.createComponent(PortfolioLayoutComponent);
    const component = fixture.componentInstance;
    expect(component['data'].name).toBe('Sayed Uz Zaman');
    expect(component['data'].navItems.length).toBeGreaterThan(0);
  });

  it('should set document title on init', () => {
    const fixture = TestBed.createComponent(PortfolioLayoutComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    expect(document.title).toContain('Sayed Uz Zaman');
  });
});

