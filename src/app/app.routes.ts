import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dogs',
    pathMatch: 'full',
  },
  {
    path: 'dogs',
    children:[
      {
        path: '',
        loadComponent: () => import('./dogs/dogs.page').then( m => m.DogsPage)
      },
      {
        path: 'report',
        loadComponent: () => import('./dogs/dog-report/dog-report.page').then( m => m.DogReportPage)
      },
      {
        path: ':dogId',
        loadComponent: () => import('./dogs/dog-detail/dog-detail.page').then( m => m.DogDetailPage)
      },
    ]
  },


];
