
import { Component, OnInit } from '@angular/core';
import { TrigerTroggleService } from 'src/app/services/triger-troggle.service';
import { TrainerPostService } from 'src/app/services/trainer/trainer-post.service';
import { Trainer } from 'src/app/services/models/Trainer';
 
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  tr: Trainer = new Trainer();
  constructor(
    
    private trigerToggle: TrigerTroggleService,
    private trPostService: TrainerPostService) { }

  ngOnInit() {
  }

  side=false;
  clickLogin(){
    this.side=true;
    this.trigerToggle.newEvent(this.side);
    
  }
  



}

export function getInfo(){

}