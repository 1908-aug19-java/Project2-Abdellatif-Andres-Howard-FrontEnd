import { Component, OnInit } from '@angular/core';
import { TrigerTroggleService } from '../services/triger-troggle.service';
import { FlipToLoginService } from '../services/flip-to-login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
 
  constructor(
    private fliptoLogin: FlipToLoginService,
    private trigerToggle: TrigerTroggleService) { }
  side="false";
  ngOnInit() {
    if(sessionStorage.getItem("user")!=null){
      this.side="true";
    }
    this.trigerToggle.events$.forEach((event)=>{
      this.side=event;
      
      
      console.log(event);
    });
    
  }




  
  
  display(showSide:string):void{
    console.log("funciona")
    this.side=showSide;
    
  }
  
  animatesigninform="";
  animateloginform="";
  toogleSideNav=""

  signIn(){
    this.animateloginform="animated fadeOut";
    this.animatesigninform="animated fadeIn";
    
  }

  logIn(){
    
    this.animateloginform="animated fadeIn";
    this.animatesigninform="animated fadeOut";
    
  }
  

}
