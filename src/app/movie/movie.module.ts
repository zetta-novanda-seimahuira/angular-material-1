import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import { DetailMovieComponent } from './movie/card-movie/detail-movie.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MovieComponent } from './movie/movie.component';
import { DetailComponent } from './movie/detail/detail.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DescMovieComponent } from './movie/detail/desc-movie/desc-movie.component';

@NgModule({
  declarations: [
    MovieComponent,
    DetailMovieComponent,
    DetailComponent,
    DescMovieComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    MovieComponent,
    DetailMovieComponent,
  ]
})
export class MovieModule { }
