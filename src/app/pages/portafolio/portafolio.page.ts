import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { wifiOutline, buildOutline, checkmarkDoneCircleOutline, timeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.page.html',
  styleUrls: ['./portafolio.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class PortafolioPage {
  // Datos exactos para que tu HTML no falle
  especialidades = [
    { 
      nombre: 'Redes GPON / FTTH', 
      icono: 'wifi-outline',
      fases: [
        { 
          titulo: 'Despliegue de Red', 
          sprints: [
            { nombre: 'Sprint 1', tarea: 'Levantamiento de planta externa', estado: 'Completado' },
            { nombre: 'Sprint 2', tarea: 'Fusión de hilos y pruebas de potencia', estado: 'En Progreso' }
          ] 
        }
      ] 
    }
  ];

  constructor() {
    addIcons({ wifiOutline, buildOutline, checkmarkDoneCircleOutline, timeOutline });
  }
}