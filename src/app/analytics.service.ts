import { Injectable } from '@angular/core';

declare let ga:Function; // Declare ga as a function

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }
  // tslint:disable-next-line: typedef
  public eventEmitter(eventCategory: string,
                      eventAction: string,
                      eventLabel: string = null,
                      eventValue: number = null) {
ga('send', 'event', {
eventCategory: eventCategory,
eventLabel: eventLabel,
eventAction: eventAction,
eventValue: eventValue
});
 }
}
