import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { ProfileWorkPage } from '../profile/profile-work';
import { ProfileHolidayPage } from '../profile/profile-holiday';
import { ProfileMoneyPage } from '../profile/profile-money';
import { ProfileContactPage } from '../profile/profile-contact';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {
  pages: Array<{title: string, icon:string, subtitle:string, subicon:string, page:Object }> = [
    {
      title: "Arbeitszeit",
      icon: "time",
      subtitle: "Lorem ipsum.",
      subicon: "information-circle-outline",
      page: ProfileWorkPage
    },
    {
      title: "Urlaub & Abwesenheit",
      icon: "plane",
      subtitle: "Lorem ipsum.",
      subicon: "information-circle-outline",
      page: ProfileHolidayPage
    },
    {
      title: "Entgeldnachweis",
      icon: "cash",
      subtitle: "Lorem ipsum.",
      subicon: "information-circle-outline",
      page: ProfileMoneyPage
    },
    {
      title: "Ansprechpartner",
      icon: "person",
      subtitle: "Lorem ipsum.",
      subicon: "information-circle-outline",
      page: ProfileContactPage
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}


  goToPage(page){
    this.navCtrl.push(page);
  }

  goToSettings(page){
    this.navCtrl.push(SettingsPage);
  }

}
