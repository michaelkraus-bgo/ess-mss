import { Component } from '@angular/core';

import { HubPage } from '../hub/hub';
import { TeamPage } from '../team/team';
import { WorkPage } from '../work/work';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  tab1Root: any = HubPage;
  tab2Root: any = TeamPage;
  tab3Root: any = WorkPage;
  tab4Root: any = ProfilePage;

  constructor() {

  }
}
