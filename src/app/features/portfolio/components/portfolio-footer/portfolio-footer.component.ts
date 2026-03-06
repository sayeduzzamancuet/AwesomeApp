import { Component, Input } from '@angular/core';
import { SocialLink } from '../../../../core/models/portfolio.models';

@Component({
  selector: 'app-portfolio-footer',
  standalone: true,
  templateUrl: './portfolio-footer.component.html',
  styleUrl: './portfolio-footer.component.css'
})
export class PortfolioFooterComponent {
  @Input({ required: true }) copyright = '';
  @Input({ required: true }) links: SocialLink[] = [];
}

