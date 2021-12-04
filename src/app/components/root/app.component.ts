import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie/movie.service";
import {MovieListResponse, MovieResponse} from "../../models/Movie";
import {Genre, GenreResponse} from "../../models/Genre";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  genres: Array<Genre> = [];
  searchResult: Array<MovieResponse> = [];
  title = 'MovieApp';
  query: string = '';

  constructor(
    private movieService: MovieService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.movieService.getGenre().subscribe((data: GenreResponse) => {
        this.genres = data.genres
      }
    )
  }

  // TODO: Wenn Suche glich 0 - Keine Funkiton auslösen
  search(newQuery: string): void {
    this.query = newQuery;
    if (this.query !== null) {
      this.router.navigate(['/search'], {queryParams: {query: this.query}});
    }
  }
}

