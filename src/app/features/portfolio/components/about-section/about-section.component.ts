import { Component, Input } from '@angular/core';
import { FadeInDirective } from '../../../../shared/directives/fade-in.directive';
import { StatItem } from '../../../../core/models/portfolio.models';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
export class AboutSectionComponent {
  @Input({ required: true }) intro: string[] = [];
  @Input({ required: true }) availability = '';
  @Input({ required: true }) stats: StatItem[] = [];
}

