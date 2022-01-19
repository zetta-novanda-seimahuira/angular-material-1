import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {

  constructor( private movieService:MovieService) { }

  ngOnInit(): void {
  }
  
  @Input() movie:any;
  isActive = false;
}
