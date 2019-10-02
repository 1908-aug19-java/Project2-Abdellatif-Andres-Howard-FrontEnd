import { Component, OnInit, NgModule } from '@angular/core';
import { TrigerTroggleService } from 'src/app/services/triger-troggle.service';
import { FlipToLoginService } from 'src/app/services/flip-to-login.service';

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

@NgModule({
  
})
export class HomeComponent implements OnInit {

  constructor(private fliptoLogin:FlipToLoginService) { }
  position="1";
  ngOnInit() {
    
    this.fliptoLogin.events$.forEach((event)=>{
      
      //this.position=event;
      this.flip();
      //console.log(this.position);
      
    });
  }
  
  flip(){
    this.position="0";
  }
  
  




}
