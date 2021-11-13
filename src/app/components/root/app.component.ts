import {Component, Input, Output} from '@angular/core';
import {MovieService} from "../../services/movie/movie.service";
import {MovieListResponse, MovieResponse} from "../../models/Movie";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() queryString: string = '';

  searchResult: Array<MovieResponse> = [];

  title = 'MovieApp';
  query = '';

  constructor(private movieService: MovieService) {
  }

  search(): void {
    this.movieService.getMovie().subscribe((data: MovieListResponse) => {
      this.searchResult = data.results}
    )
  }
}

