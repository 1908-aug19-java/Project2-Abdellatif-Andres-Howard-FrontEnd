import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/Pokemon';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonGetService {
  url: string = environment.pokemonUrl;
  constructor(private http: HttpClient) { }

  getPokemonsByUserId(userId: number):Observable<Pokemon[]>{
    console.log('Getting All Pokemons By UserId:' + userId)
    return this.http.get<Pokemon[]>(this.url+"/"+userId);
  }


}
