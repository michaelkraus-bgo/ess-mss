import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})

export class SettingsPage {
  language: string;

  constructor(public navCtrl: NavController, private app: App, private translate: TranslateService) {
    this.language = this.translate.currentLang;
  }

  logout() {
    this.app.getRootNav().setRoot(LoginPage);
  }

  setLanguage() {
    this.translate.use(this.language);
  }
}
