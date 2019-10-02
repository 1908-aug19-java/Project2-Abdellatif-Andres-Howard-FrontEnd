import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainer } from './models/Trainer';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  

  constructor(private http: HttpClient) {
  }

 
    

}
