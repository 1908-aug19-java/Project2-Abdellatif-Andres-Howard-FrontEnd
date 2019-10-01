import { Component, OnInit } from '@angular/core';
import { PokeserviceService } from 'src/app/services/pokeservice.service';
import { HttpClient } from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {
 posts: string[] = [];

 pokeName: String = "";
 response: any;
 constructor( private http: HttpClient) { 

 }
 
  /*events: string[] = [];
  opened: boolean;

  constructor(private svc: PokeserviceService, private http: HttpClient) { 
   this.svc.printToConsole("poke service went through");

  }
*/ 
  ngOnInit() {
   

  }
  pokename="";
  slide="toogle";
  search(){
    let obs =this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.pokeName.toLocaleLowerCase())
    obs.subscribe((response) =>{
      this.response = response;
      console.log(response);
    })

    
  }
  
}
