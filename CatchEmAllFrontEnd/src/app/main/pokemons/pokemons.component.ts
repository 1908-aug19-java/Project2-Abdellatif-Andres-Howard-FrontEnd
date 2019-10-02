import { Component, OnInit } from '@angular/core';
import { PokeserviceService } from 'src/app/services/pokeservice.service';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';
import { ɵangular_packages_platform_browser_dynamic_testing_testing_a } from '@angular/platform-browser-dynamic/testing';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {
 posts: string[] = [];

 pokeName: String = "";
 response: any;
 id="";
 front="";
 back="";
 shinyfront="";
 shinyback="";
 pokename="";
 move1="";
 move2="";
 move3="";
 type="";
 specialdefense="";
 specialattack="";
 defense="";
 attack="";
 hp="";


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
  
  slide="toogle";
  search(){
    let obs =this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.pokeName.toLocaleLowerCase())
    obs.subscribe((response) =>{
      this.response = response;
      console.log(response);
    })
    this.id=this.response.game_indices[0].game_index;
    this.front=this.response.sprites.front_default;
    this.back=this.response.sprites.back_default;
    this.shinyfront=this.response.sprites.front_shiny;
    this.shinyback=this.response.sprites.back_shiny;
    this.pokename=this.response.forms[0].name;
    this.move1=this.response.moves[3].move.name;
    this.move2=this.response.moves[2].move.name;
    this.move3=this.response.moves[1].move.name;
    this.type=this.response.types[0].type.name;
    this.specialdefense=this.response.stats[1].base_stat;
    this.specialattack=this.response.stats[2].base_stat;
    this.defense=this.response.stats[3].base_stat;
    this.attack=this.response.stats[4].base_stat;
    this.hp=this.response.stats[5].base_stat;



  }
  
}

