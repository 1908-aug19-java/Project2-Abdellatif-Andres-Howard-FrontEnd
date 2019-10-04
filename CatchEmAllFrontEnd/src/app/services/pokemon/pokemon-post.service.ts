import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable, from } from 'rxjs';
import { Pokemon } from '../models/Pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonPostService {

  url: string = environment.pokemonUrl;

  constructor(private http: HttpClient) { 

  }

  savePokemon(pk: Pokemon): Observable<Object>{

    const payload = JSON.stringify(pk);
    console.log(payload);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.url,payload,httpOptions);
  
  }
  deletePokemon(pk: Pokemon): Observable<Object>{

    const payload = JSON.stringify(pk);
    console.log(payload);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.delete(this.url+"/"+pk.pokemonName);
  
  }
}

