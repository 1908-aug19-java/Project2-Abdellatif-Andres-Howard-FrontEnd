import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/services/models/Trainer';
import { TrainerPostService } from 'src/app/services/trainer/trainer-post.service';
import { TrainerGetService } from 'src/app/services/trainer/trainer-get.service';



@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {

  tr: Trainer= new Trainer;
  trId:number;
  tkn:string;
  
  constructor(private trPostService: TrainerPostService,
              private trGetService: TrainerGetService) { }

  ngOnInit() {
    this.getTrainer();
  }
  message="Update";
  confirm="";

  position="0";
  getTrainer(){
    this.tkn=sessionStorage.getItem('token');
    
    this.trGetService.getTrainerByUserName(this.tkn).subscribe(
      (Trainer)=>{
        this.tr = Trainer;
        this.trId = this.tr.trainerId;
        
      }
    );
  }

  updateInfo(){
    
          
      this.tr.trainerId=this.trId;
      
      console.log(this.tr);
      this.trPostService.saveTrainer(this.tr).subscribe();
      
      this.tr=new Trainer();
      this.confirm="";
     
    
    
  }



}
