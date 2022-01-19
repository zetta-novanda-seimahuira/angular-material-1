import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActorsComponent } from './actors/actors.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'about', component:AboutComponent},
  {path: 'actors', component:ActorsComponent},
  {
    path: 'movie',
        loadChildren: () => import('./movie/movie-routing.module').then((m) => m.MovieRoutingModule),
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
