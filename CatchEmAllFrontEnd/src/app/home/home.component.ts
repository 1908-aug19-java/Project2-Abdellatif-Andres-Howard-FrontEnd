import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    
  animatesigninform="animated fadeOut";
  animateloginform="";
  

  signIn(){
    this.animateloginform="animated fadeOut";
    this.animatesigninform="animated fadeIn";
    
  }

  logIn(){
    
    this.animateloginform="animated fadeIn";
    this.animatesigninform="animated fadeOut";
    
  }


}
