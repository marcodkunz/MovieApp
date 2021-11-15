import {Component, OnInit} from '@angular/core';
import {MovieListResponse, MovieResponse} from "../../models/Movie";
import {MovieService} from "../../services/movie/movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  latestMovies: Array<MovieResponse> = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe((data: MovieListResponse) => {
        this.latestMovies = data.results
      }
    )
  }

}
