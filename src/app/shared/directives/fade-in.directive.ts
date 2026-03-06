import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
  inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appFadeIn]',
  standalone: true,
  host: { class: 'fade-in' }
})
export class FadeInDirective implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || !('IntersectionObserver' in window)) {
      // Fallback for non-browser or no IntersectionObserver support
      this.renderer.addClass(this.elementRef.nativeElement, 'visible');
      this.cdr.markForCheck();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Add visible class directly to element
            this.renderer.addClass(this.elementRef.nativeElement, 'visible');
            this.cdr.markForCheck();
            this.observer?.disconnect();
            break;
          }
        }
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

