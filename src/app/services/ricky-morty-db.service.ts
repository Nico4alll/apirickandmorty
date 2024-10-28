import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_RM } from '../config/url.servicios';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickyMortyDbService {

  constructor(public http: HttpClient) {}

  getRMCharacters(page: number = 1): any {

    let url = `${URL_RM}/character/?page=${page}`;
    return this.http.get(url).pipe(
      map((data:any) => {
        //console.log('DATOS', data);
        return data.results;
      })
    );
  }

  getRMLocations() {
    let url = `${URL_RM}/location`;
    return this.http.get(url).pipe(
      map((data: any) => data.results)
    );
  }

  getRMEpisodes() {
    let url = `${URL_RM}/episode`;
    return this.http.get(url).pipe(
      map((data: any) => data.results)
    );
  }

}
