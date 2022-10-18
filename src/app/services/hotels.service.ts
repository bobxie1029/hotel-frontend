import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Hotel } from '../model/hotel';
import { Room } from '../model/room';

const baseUrl = 'http://localhost:8084/';
@Injectable({
  providedIn: 'root'
})



export class HotelsService {


  constructor(private httpClient: HttpClient) { }
  
  getAllHotels(): Observable<Hotel[]>  {
    return this.httpClient.get<Hotel[]>(baseUrl + 'hotels');
  }

  getAllRooms(id: string): Observable<Room[]> {
    // return of([])
    return this.httpClient.get<Room[]>(baseUrl + 'hotel/'+id);
  }
}



