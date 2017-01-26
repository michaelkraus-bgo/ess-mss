import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkContactPage } from '../work/work-contact';
import { WorkProblemsPage } from '../work/work-problems';

@Component({
  selector: 'page-work',
  templateUrl: 'work.html'
})
export class WorkPage {
  title: string = "Meine Arbeit";
  pages: Array<{title: string, icon:string, subtitle:string, subicon:string, page:Object }> = [
    {
      title: "Ansprechpartner",
      icon: "person",
      subtitle: "Siehe Kontakte",
      subicon: "information-circle-outline",
      page: WorkContactPage
    },
    {
      title: "Störmeldung",
      icon: "alert-outline",
      subtitle: "Aktuell keine Störungen",
      subicon: "information-circle-outline",
      page: WorkProblemsPage
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToPage(page){
    this.navCtrl.push(page);
  }

}
