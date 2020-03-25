import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ViewEventService } from "./view-event.service";

@Component({
  selector: "app-view-event",
  templateUrl: "./view-event.component.html",
  styleUrls: ["./view-event.component.css"]
})
export class ViewEventComponent implements OnInit {
  viewEvent: any;
  viewEventSubscription: Subscription;
  eventPictures: any;

  constructor(private viewEventService: ViewEventService) {}

  ngOnInit() {
    this.subscribeViewEvent();
    this.viewEventService.refreshViewEvent();
  }

  public subscribeViewEvent() {
    this.viewEventSubscription = this.viewEventService.$viewEventObservable.subscribe(
      data => {
        if (data) {
          this.viewEvent = data;
          console.log(data);
        }
      }
    );
  }

  getEventImage() {
    if(this.viewEvent) {
      return this.viewEvent.image;
    }
  }

  getEventName() {
    if(this.viewEvent) {
      return this.viewEvent.event_name;
    }
  }

getEventDescription() {
  if(this.viewEvent) {
    return this.viewEvent.event_description;
  }
}

getVenueName() {
  if(this.viewEvent) {
    return this.viewEvent.venue_name;
  }
}

getEventSeats() {
  if(this.viewEvent) {
    return this.viewEvent.event_seats;
  }
}

getAgeGroup() {
  if(this.viewEvent) {
    return this.viewEvent.age_group;
  }
}

getEventDate() {
  if(this.viewEvent) {
    return this.viewEvent.event_date;
  }
}

getEventTime() {
  if(this.viewEvent) {
    return this.viewEvent.event_time;
  }
}




}



