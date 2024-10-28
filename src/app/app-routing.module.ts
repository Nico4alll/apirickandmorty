import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { EpisodiosComponent } from './pages/episodios/episodios.component';
import { ListPersonajesComponent } from './pages/list-personajes/list-personajes.component';
import { AddEditPersonajeComponent } from './pages/add-edit-personaje/add-edit-personaje.component';

//BD
import { CharactersComponent } from './pages/characters/characters.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'personajes', component: PersonajesComponent},
  { path: 'ubicacion', component: UbicacionComponent},
  { path: 'episodios', component: EpisodiosComponent},
  { path: 'list-personajes', component: ListPersonajesComponent},
  { path: 'personaje/:id', component: AddEditPersonajeComponent},

  //BD
  { path: 'characters', component: CharactersComponent }, // Ruta para los personajes


  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
