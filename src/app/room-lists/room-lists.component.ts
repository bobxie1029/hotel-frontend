import { Component, OnInit } from '@angular/core';
import { Hotel } from '../model/hotel';
import { Room } from '../model/room';


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

  rooms: Room[] =[
    { 
      number: 1,
      id: 1,
      type: 'Single',
      cost: 5
    },
    { 
      number: 2,
      id: 1,
      type: 'Single',
      cost:
       5
    },
    { 
      number: 1,
      id: 2,
      type: 'Single',
      cost: 5
    },
    {
      number:2,
      id:2,
      type:'Single',
      cost:5
    }
     
  ]



  constructor() { 
    this.hotel = history.state.hotel;
  }

  ngOnInit(): void {
    console.log('launch roomlist after click')
    console.log(history.state)
    console.log(this.rooms)
  }

}
