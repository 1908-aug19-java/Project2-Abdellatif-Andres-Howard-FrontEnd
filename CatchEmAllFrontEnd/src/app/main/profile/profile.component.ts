import { Component, OnInit } from '@angular/core';
import { PokemonPostService } from 'src/app/services/pokemon/pokemon-post.service'; 
import { Pokemon } from 'src/app/services/models/Pokemon';
import { TrainerGetService } from 'src/app/services/trainer/trainer-get.service';
import { PokemonGetService } from 'src/app/services/pokemon/pokemon-get.service';
import { Trainer } from 'src/app/services/models/Trainer';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  imgResponse:any;
  url:string = "";
  tr:any;
  pk: Pokemon = new Pokemon();
  pkns: Pokemon[]=[];
  tkn:string="";
  trId:string;

  constructor(
    private http: HttpClient,
    private pkPostService: PokemonPostService,
    private trGetService: TrainerGetService,
    private pkGetService: PokemonGetService) {  }

  ngOnInit() {
    this.getTrainer();
    
    
  }

  
  

  getTrainer(){
    this.tkn=sessionStorage.getItem('token');
    
    this.tr=this.trGetService.getTrainerByUserName(this.tkn).subscribe(
      (Trainer)=>{
        this.tr = Trainer;
        this.trId = this.tr.trainerId;
        sessionStorage.setItem('trainerId',this.trId);
        console.log(this.trId);
        this.getPokemonsTrainer(this.tr.trainerId);
        
      }
    );
    
    //console.log(sessionStorage.getItem('trainerId'));
  }

  search(){

    let obs =this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.pk.pokemonName);

    obs.subscribe((response) =>{
      this.imgResponse = response;
      console.log(response);           
    })
    
    
    this.url = this.imgResponse.sprites.front_default;
      
    

    
  }


  getPokemonsTrainer(id:number){
    this.pkGetService.getPokemonsByUserId(id).subscribe(
      (allPokemons)=>{
        this.pkns = allPokemons;
        console.log(this.pkns);
      }
    )
    
  }

}
