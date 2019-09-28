import { Component, OnInit } from '@angular/core';
import { PokeserviceService } from 'src/app/services/pokeservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {
  /*events: string[] = [];
  opened: boolean;

  constructor(private svc: PokeserviceService, private http: HttpClient) { 
   this.svc.printToConsole("poke service went through");

  }
*/
  ngOnInit() {/*
   let obs = this.http.get('https://pokeapi.co/api/v2/pokemon/moltres/');
   obs.subscribe((response) => console.log(response));*/

  }

}
