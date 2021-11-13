import {Component, OnInit} from '@angular/core';
import {MovieListResponse, MovieResponse} from "../../models/Movie";
import {MovieService} from "../../services/movie/movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  allMovies: Array<MovieResponse> = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getMovie().subscribe((data: MovieListResponse) => {
        this.allMovies = data.results
      }
    )
  }

}
