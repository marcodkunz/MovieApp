import {Component, Input, Output} from '@angular/core';
import {MovieService} from "../../services/movie/movie.service";
import {MovieListResponse, MovieResponse} from "../../models/Movie";
import {Genre, GenreResponse} from "../../models/Genre";
import {GenreComponent} from "../genre/genre.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public searchResult: Array<MovieResponse> = [];
  genres: Array<Genre> = [];

  title = 'MovieApp';
  query = '';

  constructor(private movieService: MovieService) {
  }

  search(): void {
    const queryString = this.query;
    this.movieService.getSearch(queryString).subscribe((data: MovieListResponse) => {
        this.searchResult = data.results
      }
    )
  }

  ngOnInit(): void {

    this.movieService.getGenre().subscribe((data: GenreResponse) => {
        this.genres = data.genres
      }
    )
  }
}

