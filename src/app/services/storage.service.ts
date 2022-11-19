import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  //cria uma variável que pode ser nula
  private _storage: Storage | null = null;

  //cria a estância do storage para usarmos o storage do ionic
  constructor(private storage: Storage) {
    //chama a função init 
    this.init();
  }

  async init() {
    //incializa o banco de dados a partir do método create
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // set guarda | get pega; precisa de chave e valor
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }
  public get(key: string){
    return this._storage?.get(key);
  }

  async remove(key: string){
    await this._storage.remove(key);
  }
}
