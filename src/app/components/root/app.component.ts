import {Component, Input, Output} from '@angular/core';
import {MovieService} from "../../services/movie/movie.service";
import {MovieListResponse, MovieResponse} from "../../models/Movie";
import {Router} from '@angular/router';
import {Genre, GenreResponse} from "../../models/Genre";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchResult: Array<MovieResponse> = [];
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

