import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  mensagensErro = {
    email: [
      { tipo: 'required', aviso: 'Preencha o campo!' },
      { tipo: 'email', aviso: 'Tem que ser um e-mail!' },
    ],
    senha: [
      { tipo: 'required', aviso: 'Digite a senha!' },
      { tipo: 'minLength', aviso: 'Digite mais!' },
    ],
  };

  constructor(private formBuilder: FormBuilder) {}

  get email() {
    return this.formLogin.get('email');
  }

  ngOnInit() {}
}
