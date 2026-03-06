import { Component, Input } from '@angular/core';
import { SkillCategory } from '../../../../core/models/portfolio.models';
import { FadeInDirective } from '../../../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css'
})
export class SkillsSectionComponent {
  @Input({ required: true }) categories: SkillCategory[] = [];
}

