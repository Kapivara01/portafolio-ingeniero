import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { settingsOutline, statsChartOutline, listOutline, lockClosedOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class DashboardHomeComponent {
  // Ajustamos los nombres de las propiedades para que coincidan con tu HTML
  seccionesAdmin = [
    { id: 'perfil', titulo: 'Gestionar Perfil', icono: 'person-outline', desc: 'Actualiza tus datos', estado: 'v2.0' },
    { id: 'sprints', titulo: 'Gestionar Sprints', icono: 'list-outline', desc: 'Control de fases', estado: 'Activo' },
    { id: 'config', titulo: 'Configuración', icono: 'settings-outline', desc: 'Ajustes del sistema', estado: 'v2.0' }
  ];

  constructor() {
    addIcons({ settingsOutline, statsChartOutline, listOutline, lockClosedOutline, personOutline });
  }

  abrirGestion(id: string) {
    console.log('Gestión seleccionada:', id);
  }
}