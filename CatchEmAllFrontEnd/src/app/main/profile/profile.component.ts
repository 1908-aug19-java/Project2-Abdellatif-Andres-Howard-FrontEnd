import { Component, OnInit } from '@angular/core';
import { PokemonPostService } from 'src/app/services/pokemon/pokemon-post.service'; 
import { Pokemon } from 'src/app/services/models/Pokemon';
import { TrainerGetService } from 'src/app/services/trainer/trainer-get.service';
import { PokemonGetService } from 'src/app/services/pokemon/pokemon-get.service';
import { Trainer } from 'src/app/services/models/Trainer';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { PokemonUpdateComponent } from './pokemon-update/pokemon-update.component';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  tr:any;
  pk: Pokemon = new Pokemon();
  pkns: Pokemon[]=[];
  tkn:string="";
  trId:string;

  constructor(
    private http: HttpClient,
    private pkPostService: PokemonPostService,
    private trGetService: TrainerGetService,
    private pkGetService: PokemonGetService,
    public dialog: MatDialog) {  }

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
    
    
  }

  Response:any;
  id:number;
  name=" Pokemon Name";
  type="Pokemon Type";
  move="Pokemon Move";
  nickName="Pokemon Nickname";
  url="https://icons-for-free.com/download-icon-go+moltros+play+pokeball+pokemon+icon-1320186972532359681_512.png";
  
  search(pokemon:Pokemon,nickName:string){

    let obs =this.http.get('https://pokeapi.co/api/v2/pokemon/' + pokemon);

    obs.subscribe((response) =>{
      this.Response = response;
      console.log(response);           
    })
    

    this.id=pokemon.pokemonId;
    this.name = this.Response.forms[0].name;
    this.type = this.Response.types[0].type.name;
    this.move = this.Response.moves[1].move.name;
    this.url = this.Response.sprites.front_default;
    this.nickName = nickName;
  }
  openDialog(): void {    
    const dialogRef = this.dialog.open(PokemonUpdateComponent, {
      width: '400px',
      data: {
        id: this.id,
        nickName: this.nickName,
        name: this.name,
        type: this.type,
        move: this.move,
        url: this.url
        }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getTrainer();
      console.log('The dialog was closed');
    });
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
