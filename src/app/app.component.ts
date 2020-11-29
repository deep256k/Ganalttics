import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare var require: any;
const amplitude = require('amplitude-js');
amplitude.getInstance().init('c86f42f49c20901cbeb118cc947dd888');

declare let ga: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularGoogleAnalytics';
  constructor(public router: Router) {
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }

    });
  }
  ngOnInit(): void {
    amplitude.getInstance().logEvent('event from old project');
  }

}
