import { Component, OnInit, OnDestroy, NgModule  } from '@angular/core';
import { PokemonPostService } from 'src/app/services/pokemon/pokemon-post.service'; 
import { Pokemon } from 'src/app/services/models/Pokemon';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { PopUpPokemonComponent } from './pop-up-pokemon/pop-up-pokemon.component';
import { TrigerTroggleService } from 'src/app/services/triger-troggle.service';



@Component({
  selector: 'app-catch-em-all',
  templateUrl: './catch-em-all.component.html',
  styleUrls: ['./catch-em-all.component.css']
})
export class CatchEmAllComponent implements OnInit {
  pk: Pokemon = new Pokemon();
  value=1;
  time=0;
  constructor(
    private trigerToggle: TrigerTroggleService,
    private http: HttpClient,
    private pkPostService: PokemonPostService,
    public dialog: MatDialog) { 
    }


  ngOnInit() {

    if(this.counter>=10000+this.value){
      
      this.generateRandom();
    }
  }

  
    
    
    
  
  generateRandom(){
    var n=0;
    n=Math.floor(Math.random() * 700) + 1 ;
    return n;
  
  }


  counter: number;
  timerRef;
  running: boolean = false;
  startText = "Start";
  side=true;
  startTimer() {
    this.side=!this.side;
    this.trigerToggle.newEvent(this.side);
    this.running = !this.running;
    
    if (this.running) {
      this.startText = "Stop";
      let startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
        if(this.counter>=this.value*100+1000){

          this.generateRandom();
          this.search();
          this.counter = undefined;
          startTime = Date.now() - (this.counter || 0);
          this.openDialog();
        }
      });
    } else {
      this.startText = "Resume";
      clearInterval(this.timerRef);
    }
   

  }


  catchPokemon(){

    this.pk.pokemonId=0;
    this.pk.pokemonName="moltres";
    this.pk.pokemonNickName="Fire Bird";
    this.pk.type="Fire";
    this.pk.userId=1;
    this.pk.move="boom shakalaka";
    

    console.log(this.pk)
    this.pkPostService.savePokemon(this.pk).subscribe();
  }
  

  response: any;
  id="";
  name="";
  type="";
  move="";
  url="";
  
  search(){

    let obs =this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.generateRandom());

    obs.subscribe((response) =>{
      this.response = response;
      console.log(response);           
    })
    
    this.id=this.response.game_indices[0].game_index;
    this.name = this.response.forms[0].name;
    this.type = this.response.types[0].type.name;
    this.move = this.response.moves[1].move.name;
    this.url = this.response.sprites.front_default;
      
    

    
  }

  
  
  openDialog(): void {
    this.startTimer();
    const dialogRef = this.dialog.open(PopUpPokemonComponent, {
      width: '400px',
      data: {
        id: this.id,
        name: this.name,
        type: this.type,
        move: this.move,
        url: this.url
        }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.startTimer();
      console.log('The dialog was closed');
     
    });
  }
}



