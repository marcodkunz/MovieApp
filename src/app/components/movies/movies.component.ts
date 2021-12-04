import {Component, Input} from '@angular/core';
import {MovieResponse} from "../../models/Movie";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  @Input() movieList: Array<MovieResponse> = [];

  constructor() {
  }

}
