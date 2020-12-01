import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics.service';

const amplitude = require('amplitude-js');
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  myvalue = 'abc';

  constructor(private analyticsService:AnalyticsService) { }

  ngOnInit(): void {
  }
  SendLikeEvent() {
    //We call the event emmiter function from our service and pass in the details
    this.analyticsService.eventEmitter("userPage", "likessss", "userLabel", 1);
    console.log('clicked');
    // amplitude.getInstance().logEvent('play song',
    // { title: 'Here comes the Sun',
    //   artist: 'The Beatles', genre: `${'this.genre'}`});
    this.analyticsService.amplitudeEvent('from servicen', `value of the event is ${this.myvalue}`);
  }
  }
