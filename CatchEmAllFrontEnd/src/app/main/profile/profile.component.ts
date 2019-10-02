import { Component, OnInit } from '@angular/core';
import { PokemonPostService } from 'src/app/services/pokemon/pokemon-post.service'; 
import { Pokemon } from 'src/app/services/models/Pokemon';
import { TrainerGetService } from 'src/app/services/trainer/trainer-get.service';
import { PokemonGetService } from 'src/app/services/pokemon/pokemon-get.service';
import { Trainer } from 'src/app/services/models/Trainer';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  tr:any;
  pk: Pokemon = new Pokemon();
  pkns: Pokemon[]=[];

  constructor(
    private pkPostService: PokemonPostService,
    private trGetService: TrainerGetService,
    private pkGetService: PokemonGetService) {  }

  ngOnInit() {
  }

  catchPokemon(){

    this.pk.pokemonId=0;
    this.pk.pokemonName="moltres";
    this.pk.pokemonNickName="Fire Bird";
    this.pk.type="Fire"; 
    this.pk.userId=2;
    this.pk.move="boom shakalaka";
    

    console.log(this.pk)
    this.pkPostService.savePokemon(this.pk).subscribe();
  }

  getTrainer_1(){
    this.tr=this.trGetService.getTrainerById(1).subscribe(
      (Trainer)=>{
        this.tr = Trainer;
      }
    );
  }

  getPokemonsTrainer_1(){
    this.pkGetService.getPokemonsByUserId(2).subscribe(
      (allPokemons)=>{
        this.pkns = allPokemons;
        console.log(this.pkns);
      }
    )
    
  }

}
