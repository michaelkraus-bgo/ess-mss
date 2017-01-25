import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: 'listitem.component.html'
})
export class ListItemComponent {
  @Input() icon: string;
  @Input() title: string;
  @Input() subicon: string;
  @Input() subtitle: string;

  constructor() {
  }

}
