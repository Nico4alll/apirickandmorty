import { Component, OnInit } from '@angular/core';
import { RickMortydbService } from 'src/app/services/rickmortydb.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: any[] = []; // Lista de personajes a mostrar
  editingCharacter: any = null; // Variable para almacenar el personaje en edición


  constructor(private rickMortydbService: RickMortydbService) { }

  ngOnInit(): void {
    this.loadCharacters(); // Cargar los personajes al iniciar
  }

  // Método para cargar los personajes desde el servicio
  loadCharacters(): void {
    this.rickMortydbService.getCharacters().subscribe(
      (data: any[]) => {
        this.characters = data; // Asignar la lista obtenida a la variable 'characters'
      },
      (error: any) => {
        console.error('Error al cargar los personajes:', error);
      }
    );
  }

  // Método para eliminar un personaje
  deleteCharacter(id: number): void {
    this.rickMortydbService.deleteCharacter(id).subscribe(
      () => {
        // Actualizar la lista local de personajes después de la eliminación
        this.characters = this.characters.filter(character => character.id !== id);
        console.log('Personaje eliminado');
      },
      (error) => {
        console.error('Error al eliminar el personaje:', error);
      }
    );
  }

}

