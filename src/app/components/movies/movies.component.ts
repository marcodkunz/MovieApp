import {Component, OnInit} from '@angular/core';
import {MovieListResponse, MovieResponse} from "../../models/Movie";
import {MovieService} from "../../services/movie/movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movieList: Array<MovieResponse> = [];

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  }

  ngOnChanges(): void {
    this.activatedRoute.queryParams.subscribe(res => {
        console.log(res);
        this.movieService.search(res['query']).subscribe((data: MovieListResponse) => {
            this.movieList = data.results
          }
        );
      }
    )
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(res => {
        console.log(res);
        this.movieService.search(res['query']).subscribe((data: MovieListResponse) => {
            this.movieList = data.results
          }
        );
      }
    )
  }
}
