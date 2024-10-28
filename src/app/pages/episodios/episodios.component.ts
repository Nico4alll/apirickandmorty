import { Component } from '@angular/core';
import { RickyMortyDbService } from 'src/app/services/ricky-morty-db.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent {
  
  episodes: any;

  constructor(private dataBD: RickyMortyDbService) {}

  ngOnInit() {
    this.loadEpisodes();
  }

  async loadEpisodes() {
    this.dataBD.getRMEpisodes().toPromise().then((data: any) => {
      this.episodes = data;
      console.log("EPISODES", this.episodes);
    });
  }
}
