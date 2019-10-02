import { Component, OnInit } from '@angular/core';
import { TrigerTroggleService } from 'src/app/services/triger-troggle.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class HomeComponent implements OnInit {

  constructor(private triggerToggle:TrigerTroggleService) { }
  position:string="";
  ngOnInit() {
    this.triggerToggle.events$.forEach((event)=>{
      this.position=event;
      console.log(this.position);
    });
  }
    
  
  




}
