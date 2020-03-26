import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarqueeHeaderComponent } from './marqueeHeader/marqueeHeader.component';
import { SideBarMenuComponent } from './side-bar-menu/side-bar-menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { PastEventsComponent } from './past-events/past-events.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { EventsComponent } from './events/events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewEventComponent } from './view-event/view-event.component';
import { ViewVenuesComponent } from './view-venues/view-venues.component';
import { PromotersComponent } from './promoters/promoters.component';
import { ViewVenueComponent } from './view-venue/view-venue.component';

@NgModule({
  declarations: [
    AppComponent,
    MarqueeHeaderComponent,
    SideBarMenuComponent,
    UserProfileComponent,
    AccountSummaryComponent,
    PastEventsComponent,
    UpcomingEventsComponent,
    BreadcrumbComponent,
    EventsComponent,
    ViewEventComponent,
    ViewVenuesComponent,
    PromotersComponent,
    ViewVenueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
