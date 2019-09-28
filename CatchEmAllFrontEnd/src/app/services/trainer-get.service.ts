import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainer } from './models/Trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerGetService {


  url: string = 'localhost:8081/';//Url back end
  constructor(private http: HttpClient) { }

  getTrainerById(id: number): Promise<Trainer>{
    console.log('Get Trainer By Id:  '+id);
    return this.http.get<Trainer>(this.url+"/"+id).toPromise();
  }

  //getTrainerByUserNameOrEmail(): Promise<Trainer>{
  //  console.log('Get Trainer By Username or Email');
//
  //  return this.http.get<Trainer>()
//
  //}

}
