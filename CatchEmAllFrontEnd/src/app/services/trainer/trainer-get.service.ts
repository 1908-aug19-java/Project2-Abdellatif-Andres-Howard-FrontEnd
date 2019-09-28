import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trainer } from '../models/Trainer';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

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
