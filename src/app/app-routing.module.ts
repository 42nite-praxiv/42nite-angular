import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountSummaryComponent } from "./account-summary/account-summary.component";
import { UpcomingEventsComponent } from "./upcoming-events/upcoming-events.component";
import { PastEventsComponent } from "./past-events/past-events.component";
import { ViewEventComponent } from "./view-event/view-event.component";
import { ViewVenuesComponent } from './view-venues/view-venues.component';
import { PromotersComponent } from './promoters/promoters.component';
import { ViewVenueComponent } from './view-venue/view-venue.component';

const routes: Routes = [
  { path: "account-summary", component: AccountSummaryComponent },
  { path: "upcoming-events", component: UpcomingEventsComponent },
  { path: "past-events", component: PastEventsComponent },
  { path: "view-event", component: ViewEventComponent },
  { path: "view-venues", component: ViewVenuesComponent },
  {path : "promoters", component : PromotersComponent},
  {path : "view-venue", component : ViewVenueComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
