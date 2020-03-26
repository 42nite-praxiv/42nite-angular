import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AccountSummaryService } from "./account-summary.service";

@Component({
  selector: "app-account-summary",
  templateUrl: "./account-summary.component.html",
  styleUrls: ["./account-summary.component.css"]
})
export class AccountSummaryComponent implements OnInit {
  //follower list
  followersList: any;
  followersListSubscription: Subscription;

  constructor(private accountSummaryService: AccountSummaryService) {}

  ngOnInit() {
    this.subcribeFollowersListData();
    this.accountSummaryService.refreshFollowerList();
  }

  public subcribeFollowersListData() {
    this.followersListSubscription = this.accountSummaryService.$followersObservable.subscribe(
      data => {
        if (data) {
          this.followersList = data;
        }
      }
    );
  }
}
