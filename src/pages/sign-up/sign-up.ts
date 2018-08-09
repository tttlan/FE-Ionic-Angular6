import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PAGE_NAME } from '../../utils/PageName';

@IonicPage({
  name: 'page-sign-up'
})

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {
  constructor(private navCtrl: NavController) {

  }

  goToSignInPage() {
    this.navCtrl.push(PAGE_NAME.SignInPage);
  }
}
