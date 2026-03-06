import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, signal } from '@angular/core';
import { NavItem } from '../../../../core/models/portfolio.models';

@Component({
  selector: 'app-portfolio-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-header.component.html',
  styleUrl: './portfolio-header.component.css'
})
export class PortfolioHeaderComponent {
  @Input({ required: true }) name = '';
  @Input({ required: true }) navItems: NavItem[] = [];

  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:resize')
  protected onResize(): void {
    if (window.innerWidth > 768) {
      this.menuOpen.set(false);
    }
  }
}

