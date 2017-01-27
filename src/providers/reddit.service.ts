import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RedditService {
  private data: Object = null;

  constructor(public http: Http) { }

  getRemoteData(){
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('https://www.reddit.com/r/pics/hot.json?limit=15')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data.data;
        resolve(this.data);
      });
    });
  }

}
