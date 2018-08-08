import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { PAGE_NAME } from '../../utils/PageName';

@IonicPage({
    name: 'page-login'
})

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginPage {
    constructor(private navCtrl: NavController) {

    }

    goToSignUpPage() {
        this.navCtrl.push(PAGE_NAME.SignUpPage);
    }
}