import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // IMPORTANTE
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ia-motor',
  templateUrl: './ia-motor.page.html',
  styleUrls: ['./ia-motor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule] // AÑADIR RouterModule AQUÍ
})
export class IaMotorPage implements OnInit {
  urlMotor: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.urlMotor = this.sanitizer.bypassSecurityTrustResourceUrl('https://jorge-linares-ia-uneti.netlify.app/');
  }

  ngOnInit() { }
}