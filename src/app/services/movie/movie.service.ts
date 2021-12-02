import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieListResponse} from "../../models/Movie";
import {apiKey, baseUrl, langDE} from "../../../environments/environment";
import {GenreResponse} from "../../models/Genre";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private nowPlayingUrl: string = baseUrl + "movie/now_playing?" + apiKey;
  private searchMovieBaseUrl: string = baseUrl + "search/movie?" + apiKey + langDE + "&query=";
  private popularMoviesUrl: string = baseUrl + "movie/popular?" + apiKey + langDE;
  private topRatedUrl: string = baseUrl + "movie/top_rated?" + apiKey + langDE;
  private favouriteMoviesUrl: string = baseUrl + "account/1/favorite/movies?" + apiKey + langDE;
  private genreUrl: string = baseUrl + "genre/movie/list?" + apiKey + langDE;
  private moviesByGenreUrl: string = baseUrl + "discover/movie?" + apiKey + langDE + "&with_genres=";

    constructor(private http: HttpClient) {
  }

  getNowPlaying(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(this.nowPlayingUrl);
  }

  getFavouriteMovies(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(this.favouriteMoviesUrl);
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

  getMoviesByGenre(genreID: string): Observable<MovieListResponse>{
      return this.http.get<MovieListResponse>(this.moviesByGenreUrl + genreID)
  }

  search(queryString: string): Observable<MovieListResponse>{
    return this.http.get<MovieListResponse>(this.searchMovieBaseUrl + queryString)
  }
}
