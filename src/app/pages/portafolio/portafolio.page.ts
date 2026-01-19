import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // IMPORTANTE

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.page.html',
  styleUrls: ['./portafolio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule] // AÑADIR RouterModule AQUÍ
})
export class PortafolioPage implements OnInit {
  // Datos de ejemplo para tus Sprints de Ingeniería
  especialidades = [
    {
      nombre: 'Redes GPON / FTTH',
      icono: 'wifi',
      fases: [
        {
          titulo: 'Despliegue de Red',
          sprints: [
            { nombre: 'Sprint 1', tarea: 'Levantamiento de planta externa', estado: 'Completado' },
            { nombre: 'Sprint 2', tarea: 'Fusión de hilos y pruebas de potencia', estado: 'En proceso' }
          ]
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() { }
}