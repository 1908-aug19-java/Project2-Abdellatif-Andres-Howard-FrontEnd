import { Component, OnInit } from '@angular/core';
import { PokemonPostService } from 'src/app/services/pokemon/pokemon-post.service'; 
import { Pokemon } from 'src/app/services/models/Pokemon';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  pk: Pokemon = new Pokemon();
  constructor(private pkPostService: PokemonPostService) {  }

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

}
