import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventList } from './event-list/event-list.component';
import { AboutComponent } from './about/about.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventCardComponent } from './event-card/event-card.component';

@NgModule({
  declarations: [
    AppComponent,
    EventList,
    AboutComponent,
    EventDetailComponent,
    EventCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
