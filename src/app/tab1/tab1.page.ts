import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  nome = '';
  email = '';
  celular = '';

  constructor(private alertController: AlertController) {}
  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Mensagem Importante',
      message: '<p><b>Nome: </b>' + this.nome + '<p><b>E-mail: </b>'+ this.email + '<p><b>Celular: </b>' + this.celular + '</p>',
      buttons: ['OK'],
    });

    await alert.present();
  }
}

