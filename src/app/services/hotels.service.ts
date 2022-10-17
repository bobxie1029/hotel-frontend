import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hotel } from '../model/hotel';
import { Room } from '../model/room';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  hotels: Hotel[] =[
    {    
      id: 1, 
      name: 'Hotel 1',
      address: 'Address 1',
      phone: '1234567765',
      room: 1,
      description: 'Description 1'
    },

    {
      id: 2, 
      name: 'Hotel 2',
      address: 'Address 2',
      phone: '1234568987',
      room: 2,
      description: 'Description 2'
    },

    {  
      id: 3, 
      name: 'Hotel 3',
      address: 'Address 3',
      phone: '1234568976',
      room: 3,
      description: 'Description 3'
    },   

    { 
      id: 4, 
      name: 'Hotel 4',
      address: 'Address 4',
      phone: '1234565678',
      room: 4,
      description: 'Description 4'
    }  
  ]

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


  constructor() { }
  
  getAllHotels(): Observable<Hotel[]>  {
    return of( this.hotels);
  }
  
  getAllRooms(id: string): Observable<Room[]> {
    return of(this.rooms)
  }
}



