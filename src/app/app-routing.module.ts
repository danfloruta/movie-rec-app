import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { GenresComponent } from './genres/genres.component';
import { GenreSpecificComponent } from './genre-specific/genre-specific.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'toprated', component: TopRatedComponent},
  {path:'genres', component: GenresComponent},
  {path: 'genre', component: GenreSpecificComponent},
  {path: 'movie/:id', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
