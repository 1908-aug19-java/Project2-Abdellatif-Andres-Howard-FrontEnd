import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trainer } from 'src/app/services/models/Trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerPostService {
  
  url: string = environment.trainerUrl;//Url back end
  loginUrl: string = environment.login;
  constructor(private http: HttpClient) { 

  }

  saveTrainer(tr: Trainer): Observable<Object>{
    const payload = JSON.stringify(tr);
    console.log(payload);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.url,payload,httpOptions);
  }
  login(tr: Trainer): Observable<Object>{
    const payload = JSON.stringify(tr);
    console.log(payload);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.loginUrl,payload,httpOptions);
  }

}
