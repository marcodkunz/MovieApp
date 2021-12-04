import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MoviesComponent} from "./components/movies/movies.component";
import {SearchComponent} from "./components/search/search.component";
import {GenreComponent} from "./components/genre/genre.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'genre', component: GenreComponent},
  {path: 'favorite', component: MoviesComponent, pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
