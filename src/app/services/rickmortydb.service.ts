// src/app/services/rickmortydb.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortydbService {
  private apiUrl = 'http://localhost/apirick&morty/characters.php'; // URL base de la API en PHP

  constructor(private http: HttpClient) {}

  // Método para obtener la lista de personajes
  getCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Solicitud GET para obtener personajes
  }

  // Método para eliminar un personaje específico
  deleteCharacter(id: number): Observable<any> {
    const url = `${this.apiUrl}?id=${id}`; // Incluye el ID en la URL para eliminar
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete(url, httpOptions); // Solicitud DELETE para eliminar personaje
  }
}
