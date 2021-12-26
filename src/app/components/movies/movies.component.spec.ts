import {MoviesComponent} from './movies.component';
import {MovieService} from "../../services/movie/movie.service";
import {MovieResponse} from "../../models/Movie";
import {Observable} from "rxjs";
import {AddFavoriteResponse} from "../../models/AddFavoriteResponse";
import {RemoveFavouriteResponse} from "../../models/RemoveFavouriteResponse";

describe('MoviesComponent', () => {
  let component: MoviesComponent;

  const spiderman = {
    poster_path: "string",
    adult: false,
    overview: "string",
    release_date: "string",
    genre_ids: [2],
    id: 1,
    original_title: "spiderman",
    original_language: "string",
    title: "spiderman",
    backdrop_path: "string",
    popularity: 1,
    vote_count: 1,
    video: false,
    vote_average: 5
  }
  const batman = {
    poster_path: "string",
    adult: false,
    overview: "string",
    release_date: "string",
    genre_ids: [2],
    id: 2,
    original_title: "batman",
    original_language: "string",
    title: "batman",
    backdrop_path: "string",
    popularity: 1,
    vote_count: 1,
    video: false,
    vote_average: 5
  }

  const mockSuccessfulService = {
    addFavourite(movie: MovieResponse): Observable<AddFavoriteResponse> {
      return new Observable((observer) => {
        observer.next({result: "favourite inserted", favourite: movie});
        observer.complete();
      });
    },
    removeFavourite(movie: MovieResponse): Observable<RemoveFavouriteResponse> {
      return new Observable((observer) => {
        observer.next({result: "favourite deleted"});
        observer.complete();
      });
    }
  }

  const mockUnsuccessfulService = {
    addFavourite(movie: MovieResponse): Observable<AddFavoriteResponse> {
      return new Observable((observer) => {
        observer.next({});
        observer.complete();
      });
    },
    removeFavourite(movie: MovieResponse): Observable<RemoveFavouriteResponse> {
      return new Observable((observer) => {
        observer.next({});
        observer.complete();
      });
    }
  }

  it('should update favourites after successfully adding movie', () => {
    const movies = [spiderman, batman];
    const favourites: Array<MovieResponse> = [];

    component = new MoviesComponent(mockSuccessfulService as MovieService);
    component.movieList = movies;
    component.favorites = favourites;

    component.updateFavorites.subscribe(
      (favourites: Array<MovieResponse>) => expect(favourites).toContain(spiderman));

    component.toggleLike(spiderman);

    expect(component.favorites.length).toBe(1);
  });

  it('should update favourites after successfully removing movie', () => {
    const movies = [spiderman, batman];
    const favourites: Array<MovieResponse> = [spiderman, batman];

    component = new MoviesComponent(mockSuccessfulService as MovieService);
    component.movieList = movies;
    component.favorites = favourites;

    component.updateFavorites.subscribe(
      (favourites: Array<MovieResponse>) => expect(favourites).not.toContain(spiderman));

    component.toggleLike(spiderman);

    expect(component.favorites.length).toBe(1);
  });

  it('should not update favourites after unsuccessfully adding movie', () => {
    const movies = [spiderman, batman];
    const favourites: Array<MovieResponse> = [];

    component = new MoviesComponent(mockUnsuccessfulService as MovieService);
    component.movieList = movies;
    component.favorites = favourites;

    component.updateFavorites.subscribe(
      (favourites: Array<MovieResponse>) => expect(favourites).not.toHaveBeenCalled());

    component.toggleLike(spiderman);

    expect(component.favorites.length).toBe(0);
  });

  it('should not update favourites after unsuccessfully removing movie', () => {
    const movies = [spiderman, batman];
    const favourites: Array<MovieResponse> = [spiderman, batman];

    component = new MoviesComponent(mockUnsuccessfulService as MovieService);
    component.movieList = movies;
    component.favorites = favourites;

    component.updateFavorites.subscribe(
      (favourites: Array<MovieResponse>) => expect(favourites).not.toHaveBeenCalled());

    component.toggleLike(spiderman);

    expect(component.favorites.length).toBe(2);
  });
});
