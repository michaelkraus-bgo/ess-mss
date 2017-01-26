import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PaymentService {
  private data: Array<{title: string, items: Array<{title: string, detailsVisible: boolean, details: Array<{key: string, value: string}>}> }> = null;

  constructor(private http: Http) {
  }

  getLocalData(){
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('assets/data/payments.json')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data.d.results;
        resolve(this.data);
      });
    });
  }

}
