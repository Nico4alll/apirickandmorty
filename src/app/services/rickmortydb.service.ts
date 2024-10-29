import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortydbService {
  private apiUrl = 'http://app.localhost/cecep/apirick&morty/characters.php'; // URL base de la API en PHP

  constructor(private http: HttpClient) { }

  // Método para obtener la lista de personajes
  getCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Solicitud GET para obtener personajes
  }

  // Método para eliminar un personaje 
  deleteCharacter(id: number): Observable<any> {
    const url = `${this.apiUrl}?id=${id}`; // Incluye el ID en la URL para eliminar
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete(url, httpOptions); // Solicitud DELETE para eliminar personaje
  }

  // Método para obtener un personaje por su ID
  getCharacterById(id: number): Observable<any> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.get<any>(url);  // Este método debería obtener un solo objeto
  }

  // Método para editar un personaje
  updateCharacter(id: number, characterData: any): Observable<any> {
    const url = `${this.apiUrl}?id=${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put(url, characterData, httpOptions); // Enviar datos del personaje con PUT
  }
}
