import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, 
  IonFooter, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonButton, IonIcon, IonBadge
} from '@ionic/angular/standalone'; 
import { RouterModule } from '@angular/router'; 
import { addIcons } from 'ionicons';
import { downloadOutline, mailOutline } from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, 
    IonFooter, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonButton, IonIcon, IonBadge, RouterModule
  ],
})
export class PerfilPage {
  constructor() {
    // Registramos los iconos para que Ionic los pueda mostrar
    addIcons({ downloadOutline, mailOutline });
  }

  enviarCorreo() {
    const email = 'tu-correo-aqui@ejemplo.com'; // Pon tu correo real aquí
    const subject = 'Interés en Perfil Profesional - Portafolio';
    const body = 'Hola Ing. Jorge Linares, he visitado su portafolio y me gustaría solicitar su CV completo o agendar una entrevista.';
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }
}
