import { Component } from '@angular/core';

@Component({
  selector: 'fm-header',
  styleUrls: ['./fm-header.component.scss'],
  template: `
    <header>
      <span class="logo gold">f</span>
      <span class="logo black">m</span>
    </header>
  `
})
export class FmHeaderComponent {

  constructor() { }

}
