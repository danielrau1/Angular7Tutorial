 import { Component } from '@angular/core';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular7Tutorial';
  public name3 = '[2.1] Parent to Child component interaction'; // [2.1a]
  public message = ''; // [2.2e]
}
