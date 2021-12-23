import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import {MovieListResponse, MovieResponse} from "../../models/Movie";
import {MovieService} from "../../services/movie/movie.service";
import {Observable} from "rxjs";
import {AddFavoriteResponse} from "../../models/AddFavoriteResponse";
import {RemoveFavouriteResponse} from "../../models/RemoveFavouriteResponse";
import {HttpClient} from "@angular/common/http";

let spiderman: MovieResponse;
let batman: MovieResponse;
let thor: MovieResponse;
let movieListResponse: MovieListResponse;

spiderman = {poster_path: "string",
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
  vote_average: 5}

batman = {poster_path: "string",
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
  vote_average: 5}

thor = {poster_path: "string",
  adult: false,
  overview: "string",
  release_date: "string",
  genre_ids: [2],
  id: 3,
  original_title: "thor",
  original_language: "string",
  title: "thor",
  backdrop_path: "string",
  popularity: 1,
  vote_count: 1,
  video: false,
  vote_average: 5}

movieListResponse = {
  dates: {
    maximum: "string",
    minimum: "string"
  },
  page: 1,
  results: [spiderman, batman, thor]
}

let httpClientSpy: jasmine.SpyObj<HttpClient>;

class MockMovieService extends MovieService {

  //addFavourite(movie: MovieResponse): Observable<AddFavoriteResponse>{
    //let response: AddFavoriteResponse = new AddFavoriteResponse("favourite inserted", movie);
    //return Observable.of(response)
 // }
  removeFavourite(movie: MovieResponse): Observable<RemoveFavouriteResponse> {
    return new Observable((observer) => {
      observer.next({result: "favourite deleted"});
      return
    })
  }
  getFavouriteMovies(): Observable<Array<MovieResponse>> {
    return new Observable((observer) => {
      observer.next([spiderman, batman]);
      return
    })
  }
  getNowPlaying(): Observable<MovieListResponse> {
    return new Observable((observer) => {
      observer.next(movieListResponse);
      return
    })
  }
}

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      providers: [
        {
          provide: MovieService,
          useClass: MockMovieService
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    //movieService = fixture.get(MovieService);
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shouldRemoveFavoriteFromList', () => {
    let mockMovieService = new MockMovieService(httpClientSpy);
    component.toggleLike(spiderman);
    expect(component.movieList.length).toBe(2);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
