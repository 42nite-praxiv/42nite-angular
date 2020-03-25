import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ViewVenueService } from "./view-venue.service";

@Component({
  selector: "app-view-venue",
  templateUrl: "./view-venue.component.html",
  styleUrls: ["./view-venue.component.css"]
})
export class ViewVenueComponent implements OnInit {
  viewVenueDetails: any;
  viewVenueDetailsSubscription: Subscription;

  constructor(private viewVenueService: ViewVenueService) {}

  ngOnInit() {
    this.subcribeViewVenueDetails();
    this.viewVenueService.refreshViewVenueDetails();
  }

  public subcribeViewVenueDetails() {
    this.viewVenueDetailsSubscription = this.viewVenueService.$viewVenueObservable.subscribe(
      data => {
        if (data) {
          this.viewVenueDetails = data;
        }
      }
    );
  }

  getVenueName() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.venue_name;
    }
  }

  getVenueDescription() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.venue_description;
    }
  }

  getVenueEmail() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.email;
    }
  }

  getVenueAddress() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.venue_address;
    }
  }

  getVenueCity() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.city;
    }
  }

  getVenueCountry() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.country;
    }
  }

  getVenueZipCode() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.zip_code;
    }
  }

  getVenueContactNumber() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.contact_number;
    }
  }

  getMondayOpeningTime() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.day.monday.opening_time;
    }
  }

  getTuesdayOpeningTime() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.day.tuesday.opening_time;
    }
  }

  getWednesdayOpeningTime() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.day.wednesday.opening_time;
    }
  }

  getThursdayOpeningTime() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.day.thursday.opening_time;
    }
  }

  getFridayOpeningTime() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.day.friday.opening_time;
    }
  }

  getSaturdayOpeningTime() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.day.saturday.opening_time;
    }
  }

  getSundayOpeningTime() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.day.sunday.opening_time;
    }
  }

  getMondayClosingTime() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.day.monday.closing_time;
    }
  }

  getTuesdayClosingTime() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.day.tuesday.closing_time;
    }
  }

  getWednesdayClosingTime() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.day.wednesday.closing_time;
    }
  }

  getThursdayClosingTime() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.day.thursday.closing_time;
    }
  }

  getFridayClosingTime() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.day.friday.closing_time;
    }
  }

  getSaturdayClosingTime() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.day.saturday.closing_time;
    }
  }

  getSundayClosingTime() {
    if(this.viewVenueDetails) {
      return this.viewVenueDetails.day.sunday.closing_time;
    }
  }

}
