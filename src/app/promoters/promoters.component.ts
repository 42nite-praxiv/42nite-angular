import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PromotersService } from './promoters.service';

@Component({
  selector: 'app-promoters',
  templateUrl: './promoters.component.html',
  styleUrls: ['./promoters.component.css']
})
export class PromotersComponent implements OnInit {

  //promoter request list
  promotersRequestList: any;
  promotersRequestListSubscription : Subscription;

    //promoter  list
    promotersList: any;
    promotersListSubscription : Subscription;

    //promoter  list
    affiliatedPromotersList: any;
    affiliatedPromotersListSubscription : Subscription;

  constructor(private promotersService : PromotersService) { }

  ngOnInit() {
    this.subscribePromotersRequestList();
    this.promotersService.refreshPromotersRequestList();

    this.subscribePromotersList();
    this.promotersService.refreshPromotersList();

    this.subscribeAffiliatedPromotersList();
    this.promotersService.refreshAffiliatedPromotersList();
  }

  public subscribePromotersRequestList() {
    this.promotersRequestListSubscription = this.promotersService.$promotersRequestObservable.subscribe(
      data => {
        if (data) {
          this.promotersRequestList = data;
        }
      }
    );
  }

  public subscribePromotersList() {
    this.promotersListSubscription = this.promotersService.$promotersListObservable.subscribe(
      data => {
        if (data) {
          this.promotersList = data;
        }
      }
    );
  }

  public subscribeAffiliatedPromotersList() {
    this.affiliatedPromotersListSubscription = this.promotersService.$affiliatedPromotersListObservable.subscribe(
      data => {
        console.log(data)
        if (data) {
          this.affiliatedPromotersList = data;
        }
      }
    );
  }

}
