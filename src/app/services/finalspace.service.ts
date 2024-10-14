import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FinalSpace } from '../interfaces/finalspace';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinalspaceService {
private http: HttpClient = inject(HttpClient);
  private readonly URL = "https://finalspaceapi.com/api/v0/character/"
  constructor() { }
  getCharacters(): Observable<FinalSpace>{
    return this.http.get<FinalSpace>(this.URL);
  }
}
