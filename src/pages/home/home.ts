import { Component } from '@angular/core';

import { IonicPage, AlertController } from 'ionic-angular';

@IonicPage({
    name: 'page-home'
})

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {
    constructor(
        private alertCtrl: AlertController
    ) {
        this.showAlert();
    }

    showAlert() {
        this.alertCtrl.create({
            title: 'Welcome!',
            subTitle: 'Welcome to the Anime Chibi World !',
            buttons: ['OK']
        }).present();
    }
}