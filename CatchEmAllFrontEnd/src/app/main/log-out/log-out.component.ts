import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/services/models/Trainer';
import { TrainerGetService } from 'src/app/services/trainer/trainer-get.service';
import { TrigerTroggleService } from 'src/app/services/triger-troggle.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {
  tr: any;
  imgResponse:any;
  url:string = "";
  
  tkn:string="";
  trId:string;
  constructor(private trGetService: TrainerGetService,
              private trigerToggle: TrigerTroggleService) { }

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
      }
    );
  
  
    
    //console.log(sessionStorage.getItem('trainerId'));
  }
  side=false;
  cleanToken(){
    sessionStorage.clear();
    this.trigerToggle.newEvent(this.side);
      
  }
}
