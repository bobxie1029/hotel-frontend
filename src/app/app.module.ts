import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListsComponent } from './hotel-lists/hotel-lists.component';
import { RoomListsComponent } from './room-lists/room-lists.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelListsComponent,
    RoomListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
