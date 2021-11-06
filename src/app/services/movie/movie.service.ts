import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieListResponse} from "../../models/Movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // TODO: refactor
  private nowPlayingUrl: string = "https://api.themoviedb.org/3/movie/now_playing?api_key=7a31fe58dd891f6ad484f3ae8589aa71";

  constructor(private http: HttpClient) {
  }

  getNowPlaying(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(this.nowPlayingUrl);
  }
}
