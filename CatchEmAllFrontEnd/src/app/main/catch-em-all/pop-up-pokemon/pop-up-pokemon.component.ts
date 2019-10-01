import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonPostService } from 'src/app/services/pokemon/pokemon-post.service'; 
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  id: string;
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
  response: any;
  
  constructor(private http: HttpClient,
    private pkPostService: PokemonPostService,
    public dialogRef: MatDialogRef<PopUpPokemonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {

    
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

}
