/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  //Criando variavel do tipo Storage que pode ser nula.
  private _storage: Storage | null = null;

  //Cria Instância do Storage.
  constructor(private storage: Storage) {
    //Chama a Função Init na hora que o serviço é iniciado.
    this.init();
  }
  async init() {
    //Inicia o banco de Dados e Verifica se já existe ou não e o cria.
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //Salva valor no storage se ele existir.
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public get(key: string) {
    return this._storage?.get(key);
  }

  public async remove(key: string) {
    await this._storage?.remove(key);
  }
}