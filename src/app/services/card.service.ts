
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  apiUrl: string = 'https://localhost:44336/api/'
  //https://localhost:44336/api/TodoItems
  constructor(
    private http: HttpClient
  ) { }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl + 'TodoItems')
  }

}
