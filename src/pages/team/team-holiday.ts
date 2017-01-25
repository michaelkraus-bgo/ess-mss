import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-team-holiday',
  templateUrl: 'team-holiday.html'
})

export class TeamHolidayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHolidayPage');
  }

}
