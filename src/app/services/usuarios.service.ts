import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  listaUsuarios: Usuario[] = [];

  constructor(private storageService: StorageService) { }

  async salvar(){}
  async buscarUm(){}
  async buscarTodos(){}
  async deletar(){}

  async salvarID(id: number){
    await this.storageService.set('idUsuario', id);
  }

  async buscarID(){
    const id = await this.storageService.get('idUsuario');

    if (!id) {
      return 0;
    }

    return id;
  }
}
