import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieListResponse} from "../../models/Movie";
import {query} from "@angular/animations";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // TODO: refactor
  private nowPlayingUrl: string = "https://api.themoviedb.org/3/movie/now_playing?api_key=7a31fe58dd891f6ad484f3ae8589aa71";
  private searchMovieBaseUrl: string = "https://api.themoviedb.org/3/search/movie?api_key=7a31fe58dd891f6ad484f3ae8589aa71&language=en-US&query=horror";

    constructor(private http: HttpClient) {
  }

  getNowPlaying(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(this.nowPlayingUrl);
  }

  getMovie(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(this.searchMovieBaseUrl);
  }

}
