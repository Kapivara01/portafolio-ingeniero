import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  personOutline, 
  buildOutline, 
  wifiOutline, 
  schoolOutline, 
  briefcaseOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  template: '<ion-app><ion-router-outlet></ion-router-outlet></ion-app>',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    // Registramos los iconos globalmente para que funcionen en todas las páginas
    addIcons({ 
      personOutline, 
      buildOutline, 
      wifiOutline, 
      schoolOutline, 
      briefcaseOutline 
    });
  }
}