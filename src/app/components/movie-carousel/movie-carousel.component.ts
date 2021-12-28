import {Component} from '@angular/core';
import {MoviesComponent} from "../movies/movies.component";

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.css']
})
export class MovieCarouselComponent extends MoviesComponent {
}
