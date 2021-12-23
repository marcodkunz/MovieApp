import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SearchComponent} from "./components/search/search.component";
import {GenreComponent} from "./components/genre/genre.component";
import {FavouriteComponent} from "./components/favourite/favourite.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'genre', component: GenreComponent},
  {path: 'favorites', component: FavouriteComponent, pathMatch: 'full'},
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
