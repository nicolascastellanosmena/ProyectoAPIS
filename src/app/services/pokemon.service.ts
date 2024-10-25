import { inject, Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
private http: HttpClient = inject(HttpClient);
  private readonly URL = "https://api.pokemontcg.io/v2/cards/"
  constructor() { }
  getCharacters(): Observable<Pokemon>{
    return this.http.get<Pokemon>(this.URL);
  }
}
