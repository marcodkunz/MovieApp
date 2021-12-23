import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieResponse} from "../../models/Movie";
import {MovieService} from "../../services/movie/movie.service";
import {RemoveFavouriteResponse} from "../../models/RemoveFavouriteResponse";
import {AddFavoriteResponse} from "../../models/AddFavoriteResponse";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input() movieList: Array<MovieResponse> = [];
  favorites: Array<MovieResponse> = [];

  @Output() updateFavorites = new EventEmitter<Array<MovieResponse>>();

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getFavouriteMovies().subscribe((data: Array<MovieResponse>) => {
        this.favorites = data
      }
    );
  }

  isFavourite(movie: MovieResponse): boolean {
    return this.favorites.some(m => m.id === movie.id);
  }

  toggleLike(movie: MovieResponse): void {
    if (this.favorites.some(m => m.id === movie.id)) {
      this.movieService.removeFavourite(movie).subscribe((data: RemoveFavouriteResponse) => {
        if (data.result != null) {
          const index = this.favorites.findIndex((f) => f.id === movie.id);
          if (index > -1) {
            this.favorites.splice(index, 1);
          }
          this.updateFavorites.emit(this.favorites);
        }
      });
    } else {
      this.movieService.addFavourite(movie).subscribe((data: AddFavoriteResponse) => {
        if (data.result != null && data.favourite.id === movie.id) {
          this.favorites.push(movie);
          this.updateFavorites.emit(this.favorites);
        }
      });
    }
  }

}
