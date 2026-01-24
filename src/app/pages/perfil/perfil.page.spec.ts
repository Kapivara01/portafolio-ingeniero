import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { personOutline, buildOutline, ribbonOutline, callOutline } from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class PerfilPage {
  constructor() {
    addIcons({ personOutline, buildOutline, ribbonOutline, callOutline });
  }
}
