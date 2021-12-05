import {Component, OnInit} from '@angular/core';
import {MovieListResponse, MovieResponse} from "../../models/Movie";
import {MovieService} from "../../services/movie/movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  movieList: Array<MovieResponse> = [];

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(res => {
        console.log(res);
        this.movieService.getMoviesByGenre(res['id']).subscribe((data: MovieListResponse) => {
            this.movieList = data.results
          }
        );
      }
    )
  }
}
