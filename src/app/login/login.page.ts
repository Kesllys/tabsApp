import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario.model';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    senha: [
      '',
      Validators.compose([Validators.required, Validators.minLength(6)]),
    ],
  });

  mensagemErro = {
    email: [
      { tipo: 'required', aviso: 'Digite um e-mail!' },
      { tipo: 'email', aviso: 'Tem que ser um e-mail!' },
    ],
    senha: [
      { tipo: 'required', aviso: 'Digite uma senha!' },
      { tipo: 'minlength', aviso: 'No mínimo 6 dígitos!' },
    ],
  };

  constructor(private formBuilder: FormBuilder, private route: Router, private usuarioService: UsuariosService) { }

  get email() {
    return this.formLogin.get('email');
  }

  get senha() {
    return this.formLogin.get('senha');
  }

  ngOnInit() { }

  async entrar() {
    if (this.formLogin.valid) {

     if (await this.usuarioService.login(this.email.value, this.senha.value)) {
        alert('Login com Sucesso');
      } else {
        alert('Falha no login');
      }

      /* const email = this.formLogin.get('email').value;
      const senha = this.formLogin.get('senha').value;
      const usuario:Usuario = await this.usuarioService.login(email,senha) as null as Usuario;
      if(usuario){
        this.route.navigateByUrl('/tabs/tab1');
      }else{
        alert('Email ou senha Invalidos');
      }*/
    } else {
      alert('Formulario Invalido');
    }
  }
}