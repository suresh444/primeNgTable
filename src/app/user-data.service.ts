import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get("/assets/db.json")
  }
}
