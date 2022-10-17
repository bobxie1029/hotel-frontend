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

    const getData =  (data: Hotel[]) =>{
      this.hotels = data;
    }

    const getErr =  () =>{
     console.log('error');
    }

    const getComplete = () =>{
      console.log ('complete');
    }

    const listener = {
      next: getData,
      error: getErr,
      complete: getComplete
    }
    this.hotelsservice.getAllHotels().subscribe(listener); 

  }
  navigate(hotel:Hotel): void{
    console.log('click hotel ' + hotel.id)
    this.route.navigate(['/rooms'], {state: {hotel: hotel}})
  }




}
