import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(
    private http: HttpClient,
  ) { }

  getChars() {
    return this.http.get('https://rickandmortyapi.com/api/character')
  }
}
