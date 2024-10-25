import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MonsterHunter, MonsterHunterOne } from '../interfaces/monsterhunter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonsterhunterService {
private http: HttpClient = inject(HttpClient);
  private readonly URL = "https://mhw-db.com/weapons/"
  constructor() { }
  getCharacters(): Observable<MonsterHunter>{
    return this.http.get<MonsterHunter>(this.URL);
  }
  getCharacter(id:number): Observable<MonsterHunterOne>{
    return this.http.get<MonsterHunterOne>(this.URL+id);
  }
}
