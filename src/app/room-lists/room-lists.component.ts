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
  roomsservice: any;

  constructor(private hotelsservice: HotelsService) { 
    this.hotel = history.state.hotel;


  }


  ngOnInit(): void {
    this.hotelsservice.getAllRooms(this.hotel.hotelId).subscribe (
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

  //   const getData = (data: Room[]) =>{
  //     this.rooms = data;
  //   }
  //   const getErr = () =>{
  //     console.log('error');
  //   }
  //   const getComplete = () =>{
  //     console.log('complete');
  //   }
  //   const listener = {
  //     next: getData,
  //     error: getErr,
  //     complete: getComplete
  //   }
  //   this.roomsservice.getAllRooms.subscribe(listener);
  // }
    }

}
