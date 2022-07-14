import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'fm-header',
  styleUrls: ['./fm-header.component.scss'],
  template: `
    <header>
      <div class="container">
        <div>
          <span class="logo gold">f</span>
          <span class="logo black">m</span>
        </div>
        <div class="title">
                {{ title }}
        </div>
        </div>
    </header>
  `
})
export class FmHeaderComponent {

  @Input() title:string = 'Page Title';

  constructor() { }

}
