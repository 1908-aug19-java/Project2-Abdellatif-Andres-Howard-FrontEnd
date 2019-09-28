import { Component, OnInit } from '@angular/core';
import { PokeserviceService } from './services/pokeservice.service';
import { HttpClient } from '@angular/common/http';


 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CatchEmAllFrontEnd';

  
  

  events: string[] = [];
  opened: boolean;
 
  constructor(private svc: PokeserviceService, private http: HttpClient) {
    this.svc.printToConsole("Got the service");
  
  }

  ngOnInit(){
    let obs = this.http.get('https://pokeapi.co/api/v2/pokemon/moltres/')
    obs.subscribe((response) => console.log(response));
``
  }
}

