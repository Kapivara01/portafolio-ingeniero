import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Guardar cualquier dato (Perfil, Proyectos, etc)
  async guardarDato(llave: string, valor: any) {
    await this._storage?.set(llave, valor);
  }

  // Leer los datos guardados
  async obtenerDato(llave: string) {
    return await this._storage?.get(llave);
  }

  // Convertir imagen de la PC a formato que la base de datos entienda
  convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }
}
// En data.ts
async guardarDato(llave: string, valor: any) {
  // Esto guarda el texto o la imagen en la memoria del navegador
  await this._storage?.set(llave, valor);
}

async obtenerDato(llave: string) {
  // Esto recupera lo que guardaste
  return await this._storage?.get(llave);
}