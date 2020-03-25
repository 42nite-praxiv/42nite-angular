import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ViewVenuesService } from "./view-venues.service";

@Component({
  selector: "app-view-venues",
  templateUrl: "./view-venues.component.html",
  styleUrls: ["./view-venues.component.css"]
})
export class ViewVenuesComponent implements OnInit {
  venuesList: any;
  venuesListSubscription: Subscription;

  constructor(private viewVenueService: ViewVenuesService) {}

  ngOnInit() {
    this.subscribeVenuesListData();
    this.viewVenueService.refreshVenuesList();
  }

  public subscribeVenuesListData() {
    this.venuesListSubscription = this.viewVenueService.$venuesListObservable.subscribe(
      data => {
        if (data) {
          this.venuesList = data;
          console.log(data[0].venue_profile_image);
        }
      }
    );
  }
}
