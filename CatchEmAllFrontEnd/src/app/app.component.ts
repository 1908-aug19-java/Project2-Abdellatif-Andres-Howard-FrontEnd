import { Component } from '@angular/core';
import { getMedia } from './methods/getMedia';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CatchEmAllFrontEnd';

  

  events: string[] = [];
  opened: boolean;
 
}

