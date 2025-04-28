import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'services',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/services/service-list/service-list.component').then(m => m.ServiceListComponent),
      },
      {
        path: ':id',
        loadComponent: () => import('./features/services/service-detail/service-detail.component').then(m => m.ServiceDetailComponent),
      }
    ]
  },
  {
    path: 'prediction/:id',
    loadComponent: () => import('./features/prediction/prediction.component').then(m => m.PredictionComponent),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  }
];
