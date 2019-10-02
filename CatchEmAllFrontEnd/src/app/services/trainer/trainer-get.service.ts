import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trainer } from '../models/Trainer';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TrainerGetService {


  url: string = environment.trainerUrl;
  constructor(private http: HttpClient) { }

  getTrainerById(id: number): Observable<Trainer>{
    console.log('Get Trainer By Id:  '+id+
    this.url+"/"+id);
    return this.http.get<Trainer>(this.url+"/"+id);
  }

  //getAuthorizationUsernamePassword( userrnamePassword : string ): Promise<Trainer>{
  //  const httpOptions = {
  //    headers: new HttpHeaders({
  //      'ContentType':'application/json'
  //    })
  //  }
  //  return this.http.get<Trainer>(this.url,payload,httpOptions); 
  //}
  
  //getTrainerByUserNameOrEmail(): Promise<Trainer>{
  //  console.log('Get Trainer By Username or Email');
//
  //  return this.http.get<Trainer>()
//
  //}

}
