import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

   apiURL = "http://open-api.myhelsinki.fi/v1";

  public getEvents() {
    return this.httpClient.get(this.apiURL + "/events/")
  }




}
