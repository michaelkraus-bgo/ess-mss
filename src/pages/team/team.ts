import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamMembersPage } from '../team/team-members';
import { TeamHolidayPage } from '../team/team-holiday';
import { ListItemComponent} from '../../components/listitem.component';

@Component({
  selector: 'page-team',
  templateUrl: 'team.html'
})

export class TeamPage {
  title: string = "Mein Team";
  pages: Array<{title: string, icon:string, subtitle:string, subicon:string, page:Object }> = [
    {
      title: "Teammitglieder",
      icon: "contacts",
      subtitle: "10 Mitarbeiter",
      subicon: "person",
      page: TeamMembersPage
    },
    {
      title: "Jahresurlaub",
      icon: "calendar",
      subtitle: "2016",
      subicon: "calendar-outline",
      page: TeamHolidayPage
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToPage(page){
    this.navCtrl.push(page);
  }
}
