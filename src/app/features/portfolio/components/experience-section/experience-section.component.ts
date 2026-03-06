import { Component, Input } from '@angular/core';
import { ExperienceItem } from '../../../../core/models/portfolio.models';
import { FadeInDirective } from '../../../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.css'
})
export class ExperienceSectionComponent {
  @Input({ required: true }) items: ExperienceItem[] = [];
}

