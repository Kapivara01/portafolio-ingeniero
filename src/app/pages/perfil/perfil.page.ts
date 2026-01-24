import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class PerfilPage {
  mostrarLector: boolean = false;

  constructor() { }

  activarLector() { this.mostrarLector = true; }
  desactivarLector() { this.mostrarLector = false; }
  
  enviarEmail() {
    window.location.href = "mailto:jluis7616@gmail.com?subject=Solicitud de CV";
  }
}