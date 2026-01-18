import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  IonContent, IonHeader, IonToolbar, IonButtons, 
  IonButton, IonFooter, IonTitle, IonThumbnail, IonText 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-ia-motor',
  templateUrl: './ia-motor.page.html',
  styleUrls: ['./ia-motor.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // <-- Esto evita que la página se vaya a blanco por etiquetas desconocidas
  imports: [
    CommonModule, FormsModule, RouterModule,
    IonContent, IonHeader, IonToolbar, IonButtons, 
    IonButton, IonFooter, IonTitle, IonThumbnail, IonText
  ]
})
export class IaMotorPage implements OnInit {
  constructor() { }
  ngOnInit() { }
}