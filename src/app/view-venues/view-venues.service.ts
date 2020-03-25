import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ViewVenuesService {
  private venuesListURL =
    "https://cors-anywhere.herokuapp.com/https://www.whats42nite.com/json/view_venues.json";

  private venuesListSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  public $venuesListObservable = this.venuesListSubject.asObservable();
  private venuesList: any;

  //constructor
  constructor(private http: HttpClient) {}

  //method to refresh venues list
  refreshVenuesList() {
    return this.http.get<any>(this.venuesListURL).subscribe(data => {
      this.venuesList = data.data;
      this.venuesListSubject.next(this.venuesList);
    });
  }
}
