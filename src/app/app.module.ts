import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/root/app.component';
import {HomeComponent} from './components/home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {ImagePipe} from './pipes/image.pipe';
import {CarouselModule} from "primeng/carousel";
import {MoviesComponent} from './components/movies/movies.component';
import {FormsModule} from "@angular/forms";
import {GenreComponent} from './components/genre/genre.component';
import {SearchComponent} from './components/search/search.component';
import {FavouriteComponent} from './components/favourite/favourite.component';
import {MovieCarouselComponent} from './components/movie-carousel/movie-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImagePipe,
    MoviesComponent,
    GenreComponent,
    SearchComponent,
    FavouriteComponent,
    MovieCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
