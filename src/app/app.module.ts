import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/* PAGES */
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { HubPage } from '../pages/hub/hub';
import { TeamPage } from '../pages/team/team';
import { TeamHolidayPage } from '../pages/team/team-holiday';
import { TeamMembersPage } from '../pages/team/team-members';
import { WorkPage } from '../pages/work/work';
import { WorkContactPage } from '../pages/work/work-contact';
import { WorkProblemsPage } from '../pages/work/work-problems';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileWorkPage } from '../pages/profile/profile-work';
import { ProfileHolidayPage } from '../pages/profile/profile-holiday';
import { ProfileMoneyPage } from '../pages/profile/profile-money';
import { ProfileContactPage } from '../pages/profile/profile-contact';
import { SettingsPage } from '../pages/settings/settings';

/* COMPONENTS */
import { ListItemComponent} from '../components/listitem.component';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    HubPage,
    TeamPage,
    TeamMembersPage,
    TeamHolidayPage,
    WorkPage,
    WorkContactPage,
    WorkProblemsPage,
    ProfilePage,
    ProfileWorkPage,
    ProfileHolidayPage,
    ProfileMoneyPage,
    ProfileContactPage,
    SettingsPage,
    ListItemComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    HubPage,
    TeamPage,
    TeamMembersPage,
    TeamHolidayPage,
    WorkPage,
    WorkContactPage,
    WorkProblemsPage,
    ProfilePage,
    ProfileWorkPage,
    ProfileHolidayPage,
    ProfileMoneyPage,
    ProfileContactPage,
    SettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
