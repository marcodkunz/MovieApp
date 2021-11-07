import {Component, OnInit} from '@angular/core';
import {MovieListResponse, MovieResponse} from "../../models/Movie";
import {MovieService} from "../../services/movie/movie.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nowPlaying: Array<MovieResponse> | undefined;

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getNowPlaying().subscribe((data: MovieListResponse) => {
        this.nowPlaying = data.results
      }
    )
  }

}
