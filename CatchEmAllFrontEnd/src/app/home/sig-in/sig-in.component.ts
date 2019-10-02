import { Component, OnInit } from '@angular/core';
import { TrainerPostService } from 'src/app/services/trainer/trainer-post.service';
import { Trainer } from 'src/app/services/models/Trainer';
import { FlipToLoginService } from 'src/app/services/flip-to-login.service';


@Component({
  selector: 'app-sig-in',
  templateUrl: './sig-in.component.html',
  styleUrls: ['./sig-in.component.css']
})
export class SigInComponent implements OnInit {
  tr: Trainer = new Trainer();
  
  constructor(private trPostService: TrainerPostService,
              private flipToLogin: FlipToLoginService) { }

  ngOnInit() {
  }

  confirm="";

  position="0";
 

  signIn(){
    this.flipToLogin.newEvent(this.position);
    if(this.confirm===this.tr.password){

      this.tr.starterPokemon="";
      this.tr.trainerId=0;
      this.tr.pokelist=null;
      console.log(this.tr);
      this.trPostService.saveTrainer(this.tr).subscribe();
      
      this.tr=new Trainer();
      this.confirm="";
     
    }
    
  }


}
