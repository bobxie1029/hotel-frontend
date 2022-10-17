import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListsComponent } from './hotel-lists/hotel-lists.component';
import { RoomListsComponent } from './room-lists/room-lists.component';

const routes: Routes = [
  { path: '', redirectTo: 'hotels', pathMatch: 'full' },
  { path: 'hotels', component: HotelListsComponent },
  {path: 'rooms', component: RoomListsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
