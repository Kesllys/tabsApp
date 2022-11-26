import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario.model';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: Usuario = new Usuario();

  formRegistro = this.formBuilder.group({
    nome: [
      '',
      Validators.compose([Validators.required, Validators.minLength(3)]),
    ],
    email: [
      '',
      Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(6),
      ]),
    ],
    cpf: [
      '',
      Validators.compose([
        Validators.required,
        Validators.maxLength(11),
        Validators.minLength(11),
      ]),
    ],
    senha: [
      '',
      Validators.compose([Validators.required, Validators.minLength(8)]),
    ],
    confirmaSenha: [
      '',
      Validators.compose([Validators.required, Validators.minLength(8)]),
    ],
  });

  mensagemErro = {
    nome: [
      { tipo: 'required', aviso: 'Digite um nome!' },
      { tipo: 'minlength', aviso: 'No mínimo 3 dígitos!' },
    ],
    email: [
      { tipo: 'required', aviso: 'Digite um e-mail!' },
      { tipo: 'email', aviso: 'Tem que ser um e-mail!' },
      { tipo: 'minlength', aviso: 'No mínimo 6 dígitos!' },
    ],
    cpf: [
      { tipo: 'required', aviso: 'Digite um CPF!' },
      { tipo: 'minlength', aviso: 'Um CPF tem 11 Dígitos!' },
      { tipo: 'maxlength', aviso: 'Um CPF tem 11 Dígitos!' },
    ],
    senha: [
      { tipo: 'required', aviso: 'Digite uma senha!' },
      { tipo: 'minlength', aviso: 'No mínimo 8 dígitos!' },
    ],
    confirmaSenha: [
      { tipo: 'required', aviso: 'Confirme a senha!' },
      { tipo: 'minlength', aviso: 'No mínimo 8 dígitos!' },
    ],
  };
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuariosService, private route: Router) { }

  get nome() {
    return this.formRegistro.get('nome');
  }

  get cpf() {
    return this.formRegistro.get('cpf');
  }

  get email() {
    return this.formRegistro.get('email');
  }

  get senha() {
    return this.formRegistro.get('senha');
  }

  get confirmaSenha() {
    return this.formRegistro.get('confirmaSenha');
  }

  ngOnInit() { }

  async salvar() {
    if (this.formRegistro.valid) {
      this.usuario.nome = this.formRegistro.get('nome').value;
      this.usuario.email = this.formRegistro.get('email').value;
      this.usuario.cpf = this.formRegistro.get('cpf').value;
      this.usuario.senha = this.formRegistro.get('senha').value;

      const id = (await this.usuarioService.buscarID()) as number;
      this.usuario.id = id;

      this.usuarioService.salvar(this.usuario);

      alert('Sucesso!!!');
      this.usuarioService.salvarID(id + 1);

      this.route.navigateByUrl('/login');

    } else {
      alert('Formulario Inválido');
    }
  }
}