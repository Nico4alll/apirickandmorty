import { Component, OnInit } from '@angular/core';
import { RickyMortyDbService } from 'src/app/services/ricky-morty-db.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})

export class UbicacionComponent {
  locations: any;

  constructor(private dataBD: RickyMortyDbService) {}

  ngOnInit() {
    this.loadLocations();
  }

  async loadLocations() {
    this.dataBD.getRMLocations().toPromise().then((data: any) => {
      this.locations = data;
      console.log("LOCATIONS", this.locations);
    });
  }
}
