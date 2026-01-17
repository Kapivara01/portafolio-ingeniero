import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
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
    path: 'admin',
    loadComponent: () => import('./pages/admin-dashboard/dashboard-home/dashboard-home.component').then(m => m.DashboardHomeComponent),
  },
  { path: '**', redirectTo: 'inicio' }
]; // <-- Asegúrate de que esta llave y corchete existan