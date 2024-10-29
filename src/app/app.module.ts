import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { EpisodiosComponent } from './pages/episodios/episodios.component';
import { ListPersonajesComponent } from './pages/list-personajes/list-personajes.component';
import { AddEditPersonajeComponent } from './pages/add-edit-personaje/add-edit-personaje.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { EditCharacterComponent } from './pages/edit-character/edit-character.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonajesComponent,
    NavbarComponent,
    UbicacionComponent,
    EpisodiosComponent,
    ListPersonajesComponent,
    AddEditPersonajeComponent,
    CharactersComponent,
    EditCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
