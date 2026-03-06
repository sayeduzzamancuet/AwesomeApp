import { Routes } from '@angular/router';
import { PortfolioLayoutComponent } from './features/portfolio/components/portfolio-layout/portfolio-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PortfolioLayoutComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
