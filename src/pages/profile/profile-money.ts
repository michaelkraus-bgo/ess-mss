import { Component } from '@angular/core';

import { AccordionComponent } from '../../components/accordion.component';
import { PaymentService} from '../../providers/payment.service';

@Component({
  selector: 'page-profile-money',
  templateUrl: 'profile-money.html',
   providers: [PaymentService]
})

export class ProfileMoneyPage {
  title: string = "Entgeldnachweis";
  paymentData: Array<{title: string, items: Array<{title: string, detailsVisible: boolean, details: Array<{key: string, value: string}>}> }> = null;

  constructor(private paymentService: PaymentService) {
    this.getPaymentData();
  }

  getPaymentData(){
    this.paymentService.getLocalData()
      .then(data => {
        this.paymentData = data;
      })
      .catch(error => {
        console.log(error);
      })
  }

}
