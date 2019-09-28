
import { Component, OnInit } from '@angular/core';
import { TrigerTroggleService } from 'src/app/services/triger-troggle.service'
 
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
    private trigerToggle: TrigerTroggleService) { }

  ngOnInit() {
  }

  side="toogle";
  clickLogin(){
    
    this.trigerToggle.newEvent("sidenav.open()");

  }
  



}

export function getInfo(){

}