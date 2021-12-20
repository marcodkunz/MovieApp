import {Component, OnInit} from '@angular/core';
import {MovieListResponse, MovieResponse} from "../../models/Movie";
import {MovieService} from "../../services/movie/movie.service";
import {ActivatedRoute} from "@angular/router";
import {Genre, GenreResponse} from "../../models/Genre";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  movieList: Array<MovieResponse> = [];
  genreList: Array<Genre> = [];
  genre: Array<Genre> = [];
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

    this.activatedRoute.queryParams.subscribe(res => {
        console.log(res);
        this.movieService.getGenre().subscribe((data: GenreResponse) => {
          this.genreList = data.genres.filter((genre) => genre.id == res['id'])
          }
        );
      }
    )
  }
}
