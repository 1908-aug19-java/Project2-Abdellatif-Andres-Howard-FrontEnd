import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonPostService } from 'src/app/services/pokemon/pokemon-post.service'; 
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Pokemon } from 'src/app/services/models/Pokemon';
import { TrainerGetService } from 'src/app/services/trainer/trainer-get.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface DialogData {
  id: number;
  name: string;
  type: string;
  move: string;
  url: string;
}



@Component({
  selector: 'app-pop-up-pokemon',
  templateUrl: './pop-up-pokemon.component.html',
  styleUrls: ['./pop-up-pokemon.component.css']
})
export class PopUpPokemonComponent implements OnInit {
  imgResponse:any;
  url:string = "";
  tr:any;
  pk: Pokemon = new Pokemon();
  pkns: Pokemon[]=[];
  tkn:string="";
  trId:number;
  response: any;
  

  nickName="";
  
  constructor(
    private trGetService: TrainerGetService, 
    private http: HttpClient,
    public dialogRef: MatDialogRef<PopUpPokemonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private pkPostService: PokemonPostService,) { }

  ngOnInit() {
    this.getTrainer()
    
  }

  
  onNoClick(): void {
    this.dialogRef.close();
  }
  

  generateRandom(){
    var n=0;
    n=Math.floor(Math.random() * 700) + 1 ;
    return n;
  
  }

  search(): void{

    let obs =this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.generateRandom());

    obs.subscribe((response) =>{
      this.response = response;
      console.log(response);           
    })
    
    this.data.id=this.response.game_indices[0].game_index;
    this.data.name = this.response.forms[0].name;
    this.data.type = this.response.types[0].type.name;
    this.data.move = this.response.moves[1].move.name;

  }
  getTrainer(){
    this.tkn=sessionStorage.getItem('token');
    
    this.tr=this.trGetService.getTrainerByUserName(this.tkn).subscribe(
      (Trainer)=>{
        this.tr = Trainer;
        this.trId = this.tr.trainerId;
        
        console.log(this.trId);
      }
    );
    
   
  }
  
    catchPokemon(){

    this.pk.pokemonId=0;
    this.pk.pokemonName=this.data.name;
    this.pk.pokemonNickName=this.nickName;
    this.pk.type=this.data.type;
    this.pk.userId=this.tr.trainerId;
    this.pk.move=this.data.move;
    console.log(this.pk.userId);

    console.log(sessionStorage.getItem('trainer'))
    this.pkPostService.savePokemon(this.pk).subscribe();
    this.dialogRef.close();



  }
  
}
