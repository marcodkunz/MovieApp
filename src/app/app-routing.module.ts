import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MoviesComponent} from "./components/movies/movies.component";
import {GenreComponent} from "./components/genre/genre.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'popular', component: MoviesComponent},
  {path: 'latestMovies', component: MoviesComponent},
  {path: 'genre', component: GenreComponent},
  {path: 'favorite', redirectTo: 'home', pathMatch: 'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
