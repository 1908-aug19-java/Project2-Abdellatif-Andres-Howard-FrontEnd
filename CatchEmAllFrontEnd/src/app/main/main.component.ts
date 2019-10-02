import { Component, OnInit } from '@angular/core';
import { TrigerTroggleService } from '../services/triger-troggle.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
 
  constructor(private trigerToggle: TrigerTroggleService) { }
  side="false";
  ngOnInit() {
    this.trigerToggle.events$.forEach((event)=>{
      if(event==="false"||event==="true"){
        this.side=event;
      }
      
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
