import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'portafolio', 
    pathMatch: 'full' 
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage),
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.page').then(m => m.PerfilPage),
  },
  {
    path: 'portafolio',
    loadComponent: () => import('./pages/portafolio/portafolio.page').then(m => m.PortafolioPage),
  },
  {
    path: 'ia-motor', // <--- DEBE coincidir con el routerLink del HTML
    loadComponent: () => import('./pages/ia-motor/ia-motor.page').then(m => m.IaMotorPage),
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin-dashboard/dashboard-home/dashboard-home.component').then(m => m.DashboardHomeComponent),
  },
  { 
    path: '**', 
    redirectTo: 'inicio' // Si el click te manda aquí, es porque la ruta de arriba falló
  }
];