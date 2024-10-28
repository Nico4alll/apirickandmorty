import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { RickyMortyDbService } from 'src/app/services/ricky-morty-db.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})

export class PersonajesComponent {

  personajes:any[] = [];
  currentPage:number = 1;
  totalPages:number = 0; 

  constructor(private dataBD: RickyMortyDbService,) {   
  }

  ngOnInit(){
    this.cargarPersonajesBD();
  }

  
  async cargarPersonajesBD() {
    try {
      const data = await this.dataBD.getRMCharacters(this.currentPage).toPromise();
      console.log("Response from API:", data);  
      
      
      if (Array.isArray(data)) {
        this.personajes = [...this.personajes, ...data];  
        this.currentPage++;  
      } else {
        console.error('No data array found in the response');
      }
    } catch (error) {
      console.error('Error loading characters:', error);
    }      
  }

  // Detecta cuando el usuario llega al final de la página
  @HostListener('window:scroll', ['$event'])
  handleScroll(event: any) {
    // Calcula si el usuario está cerca del final del scroll (500px antes del final)
    const threshold = 500;
    const position = window.innerHeight + window.scrollY;
    const height = document.body.offsetHeight;

    if (position >= height - threshold) {
      // Cargar más personajes
      this.cargarPersonajesBD();
    }
  }

}
