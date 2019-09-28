import { Component, OnInit } from '@angular/core';
import { PokeserviceService } from 'src/app/services/pokeservice.service';
import { HttpClient } from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';
import { TrigerTroggleService } from 'src/app/services/triger-troggle.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {
 posts: string[] = [];

 pokeName: String = "";
 response: any;
 constructor(private trigerToggle: TrigerTroggleService, private http: HttpClient) { 

 }
 
  /*events: string[] = [];
  opened: boolean;

  constructor(private svc: PokeserviceService, private http: HttpClient) { 
   this.svc.printToConsole("poke service went through");

  }
*/ 
  ngOnInit() {
   let obs = this.http.get('https://pokeapi.co/api/v2/pokemon/');
   obs.subscribe((response) => console.log(response));

  }

  slide="toogle";
  search(){
    let obs =this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.pokeName)
    obs.subscribe((response) =>{
      this.response = response;
      console.log(response);
    })

    this.trigerToggle.newEvent("made it wiht poke component");
  }
}
