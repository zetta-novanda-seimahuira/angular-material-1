import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './movie/detail/detail.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path:'', component:MovieComponent},
  {path:'detail/:id', component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
