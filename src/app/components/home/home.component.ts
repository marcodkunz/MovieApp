import {Component, EventEmitter, OnInit, Output,} from '@angular/core';
import {MovieListResponse, MovieResponse} from "../../models/Movie";
import {MovieService} from "../../services/movie/movie.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  nowPlaying: Array<MovieResponse> = [];
  popularMovies: Array<MovieResponse> = [];
  topRatedMovies: Array<MovieResponse> = [];
  favorites: Array<MovieResponse> = [];

  @Output() updateFavorites = new EventEmitter<Array<MovieResponse>>();

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getNowPlaying().subscribe((data: MovieListResponse) => {
        this.nowPlaying = data.results
      }
    )

    this.movieService.getPopularMovies().subscribe((data: MovieListResponse) => {
        this.popularMovies = data.results
      }
    )

    this.movieService.getTopRatedMovies().subscribe((data: MovieListResponse) => {
        this.topRatedMovies = data.results
      }
    )

    this.movieService.getFavouriteMovies().subscribe((data: Array<MovieResponse>) => {
        this.favorites = data
      }
    );
  }

  updateMovies(favorites: Array<MovieResponse>) {
    this.favorites = favorites;
  }
}
