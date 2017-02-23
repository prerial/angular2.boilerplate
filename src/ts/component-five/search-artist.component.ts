/**
 * Created by Mikhail on 2/20/2017.
 */
import { Component } from '@angular/core';
import { FormControl,
  FormGroup,
  FormBuilder } from '@angular/forms';
import { SearchService } from '../services/search.service';
import 'rxjs/Rx';

@Component({
  selector: 'search-artist',
  template: `
		<form [formGroup]="coolForm">
		  <input formControlName="search" placeholder="Search Spotify artist">
		  <input (click)="search()" type="submit" value="SearchFor Spotify Artist">
		</form>

		<p style="background: tomato; color: white; padding: 1rem;"
		  *ngIf="errorMessage">
		  {{ errorMessage }}
		</p>

		<div *ngFor="let artist of result">
		  {{artist.name}}
		</div>
	`
})
export class SearcArtistComponent {
  searchField: FormControl;
  result:string[];
  coolForm: FormGroup;
  errorMessage: string;

  constructor(private searchService:SearchService, private fb:FormBuilder) {
    this.searchField = new FormControl();
    this.coolForm = fb.group({ search: this.searchField });
  }

  search() {
    this.searchService.search(this.searchField.value)
      .subscribe(
        result => {
          this.errorMessage = undefined;
          this.result = result.artists.items;
        },
        err => {
          this.result = [];
          this.errorMessage = err.message;
        },
        () => { console.log('Completed'); }
      );
  }
}
