import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private analyticsService:AnalyticsService) { }

  ngOnInit(): void {
  }
  SendLikeEvent() {
    //We call the event emmiter function from our service and pass in the details
    this.analyticsService.eventEmitter("userPage", "like", "userLabel", 1);
  }

}
