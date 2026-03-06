import { TestBed } from '@angular/core/testing';
import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeroSectionComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render hero section', () => {
    const fixture = TestBed.createComponent(HeroSectionComponent);
    const component = fixture.componentInstance;
    component.hero = {
      heading: 'Test Heading',
      highlightedHeading: 'Highlighted',
      description: 'Test Description',
      primaryCta: { id: 'primary', label: 'Primary' },
      secondaryCta: { id: 'secondary', label: 'Secondary' },
      imageUrl: 'test.jpg',
      imageAlt: 'Test Alt',
      codeLines: []
    };
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section.hero')).toBeTruthy();
  });
});


