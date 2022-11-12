import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formRegistro = this.formBuilder.group({
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
    return this.formRegistro.get('email');
  }

  ngOnInit() {}
}
