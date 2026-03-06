import { Component, Input } from '@angular/core';
import { ProjectItem } from '../../../../core/models/portfolio.models';
import { FadeInDirective } from '../../../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css'
})
export class ProjectsSectionComponent {
  @Input({ required: true }) projects: ProjectItem[] = [];
}

