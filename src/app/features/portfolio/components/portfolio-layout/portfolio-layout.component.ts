import { Component, OnInit } from '@angular/core';
import { PortfolioHeaderComponent } from '../portfolio-header/portfolio-header.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { SkillsSectionComponent } from '../skills-section/skills-section.component';
import { ExperienceSectionComponent } from '../experience-section/experience-section.component';
import { ProjectsSectionComponent } from '../projects-section/projects-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { PortfolioFooterComponent } from '../portfolio-footer/portfolio-footer.component';
import { PORTFOLIO_DATA } from '../../data/portfolio.data';
import { PortfolioData } from '../../../../core/models/portfolio.models';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [
    PortfolioHeaderComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
    PortfolioFooterComponent
  ],
  templateUrl: './portfolio-layout.component.html',
  styleUrl: './portfolio-layout.component.css'
})
export class PortfolioLayoutComponent implements OnInit {
  protected data: PortfolioData = PORTFOLIO_DATA;

  ngOnInit(): void {
    // Set document title
    document.title = `${this.data.name} | ${this.data.role}`;
  }
}

