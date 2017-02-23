/**
 * Created by Mikhail on 2/20/2017.
 */
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SearchService {
  artisisUrl :string = '/data/artists';
  urlSuffix :string = '';
  constructor(private http: Http) {}

  search(term: string) {
    var self = this;
    return this.http.get(this.artisisUrl + this.urlSuffix + '.json')


//    return this.http.get('/data/artists.json')
//    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist`)
      .map(response => {
        self.urlSuffix = '0';
        return response.json()
      })
      .catch((e) => {
        this.urlSuffix = '';
        return Observable.throw(
          new Error(`${ e.status } ${ e.statusText }`)
        );
      });  }
}

