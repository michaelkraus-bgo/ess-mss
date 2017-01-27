import { Component } from '@angular/core';

import { RedditService } from '../../providers/reddit.service';

@Component({
  selector: 'page-hub',
  templateUrl: 'hub.html',
  providers: [RedditService]
})

export class HubPage {
  data: Object = null;

  constructor(private redditService: RedditService) { }

  ionViewDidLoad() {
    this.getReditData();
  }

  getReditData(){
    this.redditService.getRemoteData()
    .then(data => {
      this.data = data;
    })
    .catch(error => {
      console.log(error);
    });
  }

}
