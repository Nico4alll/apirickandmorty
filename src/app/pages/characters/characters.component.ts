import { Component, OnInit } from '@angular/core';
import { RickMortydbService } from 'src/app/services/rickmortydb.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: any[] = []; // Variable para almacenar los personajes

  constructor(private rickMortydbService: RickMortydbService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.rickMortydbService.getCharacters().subscribe(
      (data: any[]) => {
        this.characters = data; // Almacena los datos obtenidos
      },
      (error: any) => {
        console.error('Error al cargar los personajes:', error);
      }
    );
  }
  
}
