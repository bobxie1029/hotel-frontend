import { Component, OnInit } from '@angular/core';
import { Hotel } from '../model/hotel';
import { Room } from '../model/room';
import { HotelsService } from '../services/hotels.service';


@Component({
  selector: 'app-room-lists',
  templateUrl: './room-lists.component.html',
  styleUrls: ['./room-lists.component.css']
})
export class RoomListsComponent implements OnInit {


hotel: any;
// //    @Id
// int roomNo;
// @Id
// int hotelId;
// String roomType;
// double roomCost;

  rooms: Room[] | undefined 

  constructor(private hotelsservice: HotelsService) { 
    this.hotel = history.state.hotel;

    this.hotelsservice.getAllRooms(this.hotel.id).subscribe (
      {
        next: (data) => {
          console.log('receive data from service of rooms' + data)
          this.rooms = data;
        },

        error: ()=> {
          console.log('error');
        },

        complete: () =>{
          console.log('complete');
        }
      }
    );
  }


  ngOnInit(): void {
    console.log('launch roomlist after click')
    console.log(history.state)
    console.log(this.rooms)


  }
 

}
