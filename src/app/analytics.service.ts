import { Injectable } from '@angular/core';

declare let ga: Function; // Declare ga as a function

const amplitude = require('amplitude-js');
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
eventCategory,
eventLabel,
eventAction,
eventValue
});
 }

 public amplitudeEvent(eventName: string, eventValue?: string): void{
  amplitude.getInstance().logEvent(eventName,
  { event: eventValue});
  console.log('from service');
 }
}
