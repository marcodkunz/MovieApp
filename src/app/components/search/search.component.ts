import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MovieListResponse, MovieResponse} from "../../models/Movie";
import {MovieService} from "../../services/movie/movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movieList: Array<MovieResponse> = [];
  favorites: Array<MovieResponse> = [];

  @Output() updateFavorites = new EventEmitter<Array<MovieResponse>>();

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  };

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(res => {
        this.movieService.search(res['query']).subscribe((data: MovieListResponse) => {
            this.movieList = data.results
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
