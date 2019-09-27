import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  side="false";
  
  display(){
    console.log("3");
  }
 
  constructor() { }

  ngOnInit() {
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
