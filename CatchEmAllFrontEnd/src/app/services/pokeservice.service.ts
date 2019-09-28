import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeserviceService {

  printToConsole(arg){
    console.log(arg);
  }

  constructor() { }
}
