import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Usamos la ruta directa desde la carpeta app para que el compilador no se pierda
import { BibliotecaService } from 'src/app/services/biblioteca';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class DashboardHomeComponent implements OnInit {

  constructor(private bibliotecaService: BibliotecaService) {}

  ngOnInit() {
    console.log('Panel administrativo de ingeniería cargado');
  }

  async probarBaseDatos() {
    console.log('Iniciando envío de datos a Firestore...');
    try {
      // Registro de prueba para validar que la nube recibe el mensaje
      await this.bibliotecaService.registrarDocumento(
        'Prueba Sistema Jorge - Final', 
        'https://link-confirmacion.com', 
        'personal'
      );
      alert('✅ ¡CONEXIÓN EXITOSA! Ya puedes revisar tu consola de Firebase.');
    } catch (e) {
      console.error('Error detectado:', e);
      alert('❌ Falló la conexión. Revisa los permisos en Firebase.');
    }
  }
}