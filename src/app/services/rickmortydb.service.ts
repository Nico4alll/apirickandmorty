import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickMortydbService {
  private apiUrl = 'http://localhost/apirick&morty/'; // URL base de la API en PHP

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}characters.php`); //url del archivo local :3
  }

  deleteCharacter(id: number): Observable<any> {
    const url = `${this.apiUrl}characters.php?id=${id}`;
    return this.http.delete(url);
  }
}