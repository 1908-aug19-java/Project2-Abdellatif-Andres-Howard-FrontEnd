
import { Component, OnInit } from '@angular/core';
import { TrigerTroggleService } from 'src/app/services/triger-troggle.service';
import { TrainerPostService } from 'src/app/services/trainer/trainer-post.service';
import { Trainer } from 'src/app/services/models/Trainer';
import { tokenKey } from '@angular/core/src/view';
 
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  tr: Trainer = new Trainer;
  trresponse: any;
  userName="";
  password="";
  constructor(
    
    private trigerToggle: TrigerTroggleService,
    private trPostService: TrainerPostService) { }

  ngOnInit() {
  }

  side=false;
  clickLogin(){
    console.log("fa"+this.userName);
    this.login();
    this.side=true;
    
    
    
  }

  
  login(){
    this.tr.trainerId=null;
    this.tr.userName=this.userName;
    this.tr.password=this.password;
    this.trPostService.login(this.tr).subscribe(
      (trainer)=>{
        this.trigerToggle.newEvent(this.side);
        this.trresponse = trainer;
        console.log(this.trresponse.userName);
      }
    )

    sessionStorage.setItem("user",JSON.stringify(this.tr.userName));
    
    
    
  }



}

export function getInfo(){

}