import { Component, Input } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: 'accordion.component.html'
})

export class AccordionComponent {
  @Input() dataArray: Array<{title: string, items: Array<{title: string, detailsVisible: boolean, details: Array<{key: string, value: string}>}> }> = null;

  constructor() { }

  toggleDetails(item){
    item.detailsVisible = !item.detailsVisible;
  }

  download(){
    console.log("download");
  }

}
