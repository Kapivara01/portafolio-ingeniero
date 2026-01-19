import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  constructor(private firestore: Firestore) {}

  async registrarDocumento(nombre: string, url: string, categoria: string) {
    const dbRef = collection(this.firestore, `biblioteca_${categoria}`);
    return addDoc(dbRef, {
      nombre: nombre,
      url: url,
      fechaRegistro: new Date(),
      tipo: categoria
    });
  }
}