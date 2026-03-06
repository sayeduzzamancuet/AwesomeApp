import { Component, Input } from '@angular/core';
import { HeroContent, HeroCodeLine } from '../../../../core/models/portfolio.models';
import { FadeInDirective } from '../../../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  @Input({ required: true }) hero!: HeroContent;

  protected lineClass(type: HeroCodeLine['type']): string {
    if (type === 'keyword') return 'c-purple';
    if (type === 'type') return 'c-blue';
    if (type === 'string') return 'c-green';
    if (type === 'comment') return 'c-gray';
    return '';
  }
}

