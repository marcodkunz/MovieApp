import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  favorites: Array<MovieResponse> = [];

  @Output() updateFavorites = new EventEmitter<Array<MovieResponse>>();

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(res => {
        this.movieService.getMoviesByGenre(res['id']).subscribe((data: MovieListResponse) => {
            this.movieList = data.results
          }
        );
      }
    )

    this.activatedRoute.queryParams.subscribe(res => {
        this.movieService.getGenre().subscribe((data: GenreResponse) => {
            this.genreList = data.genres.filter((genre) => genre.id == res['id'])
          }
        );
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
