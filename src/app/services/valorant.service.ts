import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Valorant, ValorantOne } from '../interfaces/valorant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValorantService {
  private http: HttpClient = inject(HttpClient);
  private readonly URL = "https://valorant-api.com/v1/agents/"
  constructor() { }
  getCharacters(): Observable<Valorant>{
    return this.http.get<Valorant>(this.URL);
  }
  getCharacter(id:number): Observable<ValorantOne>{
    return this.http.get<ValorantOne>(this.URL+id);
  }
}
