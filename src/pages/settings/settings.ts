import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})

export class SettingsPage {

  constructor(public navCtrl: NavController, private app: App) {}

  logout() {
    this.app.getRootNav().setRoot(LoginPage);
  }
}
