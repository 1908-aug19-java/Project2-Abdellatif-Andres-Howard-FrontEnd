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
  nickName: string;
  name: string;
  type: string;
  move: string;
  url: string;
}


@Component({
  selector: 'app-pokemon-update',
  templateUrl: './pokemon-update.component.html',
  styleUrls: ['./pokemon-update.component.css']
})
export class PokemonUpdateComponent implements OnInit {
  imgResponse:any;
  url:string = "";
  tr:any;
  pk: Pokemon = new Pokemon();
  pkns: Pokemon[]=[];
  tkn:string="";
  trId:number;
  response: any;
  constructor(
    private trGetService: TrainerGetService, 
    private http: HttpClient,
    public dialogRef: MatDialogRef<PokemonUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private pkPostService: PokemonPostService,
  ) { }

  ngOnInit() {
    this.getTrainer()
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


 


}

