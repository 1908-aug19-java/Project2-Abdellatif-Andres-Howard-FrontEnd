import { Component, OnInit } from '@angular/core';
import { TrainerPostService } from 'src/app/services/trainer/trainer-post.service';
import { Trainer } from 'src/app/services/models/Trainer';
import { TrigerTroggleService } from 'src/app/services/triger-troggle.service';


@Component({
  selector: 'app-sig-in',
  templateUrl: './sig-in.component.html',
  styleUrls: ['./sig-in.component.css']
})
export class SigInComponent implements OnInit {
  tr: Trainer = new Trainer();
  
  constructor(private trPostService: TrainerPostService,
              private triggerToggle: TrigerTroggleService) { }

  ngOnInit() {
  }

  confirm="";

  position="1";
 

  signIn(){
    if(this.confirm===this.tr.password){

      this.tr.starterPokemon="";
      this.tr.trainerId=0;
      this.tr.pokelist=null;
      console.log(this.tr);
      this.trPostService.saveTrainer(this.tr).subscribe();
      this.triggerToggle.newEvent(this.position);
      this.tr=new Trainer();
      this.confirm="";
     
    }
    
  }


}
