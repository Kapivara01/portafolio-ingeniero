import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonContent, IonButtons, 
  IonButton, IonIcon, IonFooter, IonNote, IonAvatar 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    IonHeader, IonToolbar, IonContent, IonButtons, 
    IonButton, IonIcon, IonFooter, IonNote, IonAvatar
  ]
})
export class InicioPage {
  constructor() {}
}