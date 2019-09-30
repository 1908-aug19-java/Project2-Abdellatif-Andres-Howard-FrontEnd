import { Component, OnInit, OnDestroy  } from '@angular/core';
import { PokemonPostService } from 'src/app/services/pokemon/pokemon-post.service'; 
import { Pokemon } from 'src/app/services/models/Pokemon';
import { HttpClient } from '@angular/common/http';


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
    private http: HttpClient,
    private pkPostService: PokemonPostService) { 
    }


  ngOnInit() {

    if(this.counter===3000){
      
      this.generateRandom();
    }
  }
  generateRandom(){
    var n=0;
    n=Math.floor(Math.random() * 805) + 1 ;
    console.log(n);
    return n;
  
  }


  counter: number;
  timerRef;
  running: boolean = false;
  startText = "Start";

  startTimer() {
    this.running = !this.running;
    if (this.running) {
      this.startText = "Stop";
      let startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
        if(this.counter>=this.value*100){

          this.generateRandom();
          this.search();
          this.counter = undefined;
          startTime = Date.now() - (this.counter || 0);
        }
      });
    } else {
      this.startText = "Resume";
      clearInterval(this.timerRef);
    }
    function hi(){}
    ()=>{
      console.log()
    }


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
  

  response: any;
  pokename="";
  slide="toogle";
  search(){
    let obs =this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.generateRandom());
    obs.subscribe((response) =>{
      this.response = response;
      console.log(response);
    })

    
  }
  

}



