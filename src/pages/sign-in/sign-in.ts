import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { PAGE_NAME } from '../../utils/PageName';

@IonicPage({
    name: 'page-sign-in'
})

@Component({
    selector: 'page-sign-in',
    templateUrl: 'sign-in.html'
})

export class SignInPage {
    constructor(private navCtrl: NavController) {

    }

    goToSignUpPage() {
        this.navCtrl.push(PAGE_NAME.SignUpPage);
    }

    goToHomePage() {
        this.navCtrl.push(PAGE_NAME.HomePage);
    }

    signIn(event) {
        this.goToHomePage();
    }
}