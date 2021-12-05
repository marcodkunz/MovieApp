import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieListResponse, MovieResponse} from "../../models/Movie";
import {apiKey, environment, langDE} from "../../../environments/environment";
import {GenreResponse} from "../../models/Genre";
import {RemoveFavouriteResponse} from "../../models/RemoveFavouriteResponse";
import {AddFavoriteResponse} from "../../models/AddFavoriteResponse";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private nowPlayingUrl: string = environment.baseUrl + "movie/now_playing?" + apiKey;
  private searchMovieBaseUrl: string = environment.baseUrl + "search/movie?" + apiKey + langDE + "&query=";
  private popularMoviesUrl: string = environment.baseUrl + "movie/popular?" + apiKey + langDE;
  private topRatedUrl: string = environment.baseUrl + "movie/top_rated?" + apiKey + langDE;
  private favouriteMoviesUrl: string = environment.serverBaseUrl + "favourites";
  private genreUrl: string = environment.baseUrl + "genre/movie/list?" + apiKey + langDE;
  private moviesByGenreUrl: string = environment.baseUrl + "discover/movie?" + apiKey + langDE + "&with_genres=";

  constructor(private http: HttpClient) {
  }

  getNowPlaying(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(this.nowPlayingUrl);
  }

  getFavouriteMovies(): Observable<Array<MovieResponse>> {
    return this.http.get<Array<MovieResponse>>(this.favouriteMoviesUrl);
  }

  addFavourite(movie: MovieResponse): Observable<AddFavoriteResponse> {
    return this.http.post<AddFavoriteResponse>(this.favouriteMoviesUrl, movie);
  }

  removeFavourite(movie: MovieResponse): Observable<RemoveFavouriteResponse> {
    return this.http.delete<RemoveFavouriteResponse>(this.favouriteMoviesUrl + "/" + movie.id);
  }

  getTopRatedMovies(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(this.topRatedUrl);
  }

  getPopularMovies(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(this.popularMoviesUrl);
  }

  getGenre(): Observable<GenreResponse> {
    return this.http.get<GenreResponse>(this.genreUrl);
  }

  getMoviesByGenre(genreID: string): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(this.moviesByGenreUrl + genreID)
  }

  search(queryString: string): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(this.searchMovieBaseUrl + queryString)
  }
}
