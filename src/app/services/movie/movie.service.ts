import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieListResponse} from "../../models/Movie";
import {query} from "@angular/animations";
import {apiKey, baseUrl, langDE} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // TODO: refactor
  private nowPlayingUrl: string = baseUrl + "movie/now_playing?" + apiKey;
  private searchMovieBaseUrl: string = baseUrl + "search/movie?" + apiKey + langDE + "&query=";
  private popularMoviesUrl: string = baseUrl + "movie/popular?" + apiKey + langDE;
  private queryString: string = "";

    constructor(private http: HttpClient) {
  }

  getNowPlaying(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(this.nowPlayingUrl);
  }

  getPopularMovies(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(this.popularMoviesUrl);
  }

  getSearch(queryString: string): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(this.searchMovieBaseUrl+queryString);
  }
}
