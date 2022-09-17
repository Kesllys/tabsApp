import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private toastController: ToastController) {}

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      color: 'danger',
      position: 'middle'
    });

    await toast.present();
  }

}
