import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../model/hotel';

@Component({
  selector: 'app-hotel-lists',
  templateUrl: './hotel-lists.component.html',
  styleUrls: ['./hotel-lists.component.css']
})
export class HotelListsComponent implements OnInit {
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

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  navigate(hotel:Hotel): void{
    console.log('click hotel ' + hotel.id)
    this.route.navigate(['/rooms'], {state: {hotel: hotel}})
  }

}
