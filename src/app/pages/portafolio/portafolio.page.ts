import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, 
  IonFooter, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonCardContent, IonBadge, IonIcon, IonList, IonItem, IonLabel
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { wifiOutline, codeSlashOutline, checkmarkCircle, timerOutline } from 'ionicons/icons';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.page.html',
  styleUrls: ['./portafolio.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButtons, IonFooter, IonCard, IonCardHeader, IonCardTitle, 
    IonCardSubtitle, IonCardContent, IonBadge, IonIcon, IonList, 
    IonItem, IonLabel, RouterModule
  ],
})
export class PortafolioPage {
  // Estructura organizada por Especialidad > Fases > Sprints
  public especialidades = [
    {
      nombre: 'Proyectos de Telecomunicaciones',
      icono: 'wifi-outline',
      fases: [
        {
          titulo: 'Despliegue de Red FTTH/GPON',
          sprints: [
            { nombre: 'Sprint 1', tarea: 'Levantamiento de planta externa', estado: 'Completado' },
            { nombre: 'Sprint 2', tarea: 'Fusión de hilos y pruebas de potencia', estado: 'En Progreso' }
          ]
        },
        {
          titulo: 'Optimización de Radioenlaces',
          sprints: [
            { nombre: 'Sprint 1', tarea: 'Alineación de antenas microondas', estado: 'Completado' }
          ]
        },
        {
          titulo: 'Auditoría de Redes Corporativas',
          sprints: [
            { nombre: 'Sprint 1', tarea: 'Análisis de tráfico y cuellos de botella', estado: 'Pendiente' }
          ]
        }
      ]
    },
    {
      nombre: 'Proyectos Informáticos / IA',
      icono: 'code-slash-outline',
      fases: [
        {
          titulo: 'Asistente Virtual UNETI',
          sprints: [
            { nombre: 'Sprint 1', tarea: 'Entrenamiento de modelo NLP', estado: 'Completado' },
            { nombre: 'Sprint 2', tarea: 'Integración vía Iframe en Portafolio', estado: 'Completado' }
          ]
        },
        {
          titulo: 'Sistema de Gestión de Inventario',
          sprints: [
            { nombre: 'Sprint 1', tarea: 'Diseño de Base de Datos SQL', estado: 'Completado' }
          ]
        },
        {
          titulo: 'App Móvil de Control de Sprints',
          sprints: [
            { nombre: 'Sprint 1', tarea: 'Maquetado en Ionic y Angular', estado: 'En Progreso' }
          ]
        }
      ]
    }
  ];

  constructor() {
    addIcons({ wifiOutline, codeSlashOutline, checkmarkCircle, timerOutline });
  }
}
