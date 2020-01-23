import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // tabs: string[] = ['home', 'movie', 'account', 'about', 'login'];

  activeTab = 'home';
  title = 'nc-project-front';
}
