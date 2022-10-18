import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../model/hotel';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-hotel-lists',
  templateUrl: './hotel-lists.component.html',
  styleUrls: ['./hotel-lists.component.css']
})
export class HotelListsComponent implements OnInit {
  hotels: Hotel[] | undefined;

  constructor(private route: Router,
    private hotelsservice: HotelsService) { }

  ngOnInit(): void {
    //to subscribe to an Observable we need to provide an Observer
    //which of three methods
    //next: when data comes, it will be called.
    //error: in case of error, it will be called.
    //complete: when it is completd.

    //I declare three method. refer to room list component. We combined 
    //the declaration together.
    
    const getData =  (data: Hotel[]) =>{
      this.hotels = data;
    }

    const getErr =  () =>{
     console.log('error');
    }

    const getComplete = () =>{
      console.log ('complete');
    }

    //declare Observer specified the three method names.
    const listener = {
      next: getData,
      error: getErr,
      complete: getComplete
    }

    //subscribe with the  observer
    this.hotelsservice.getAllHotels().subscribe(listener); 

  }
  navigate(hotel:Hotel): void{
    console.log('click hotel ' + hotel.hotelId)
    this.route.navigate(['/rooms'], {state: {hotel: hotel}})
  }




}
