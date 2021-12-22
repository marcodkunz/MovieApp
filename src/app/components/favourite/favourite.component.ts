import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie/movie.service";
import {MovieResponse} from "../../models/Movie";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  movieList: Array<MovieResponse> = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getFavouriteMovies().subscribe((data: Array<MovieResponse>) => {
        this.movieList = data
      }
    );
  }

  updateMovies(movieList: Array<MovieResponse>) {
    this.movieList = movieList;
  }
}
