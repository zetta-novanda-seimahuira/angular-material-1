import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detailMovie: any;
  dataActors:any;

  constructor(
    private route:ActivatedRoute,
    private movieService:MovieService
  ) { }

  ngOnInit(): void {
    const cardId = this.route.snapshot.paramMap.get('id');
    const intString = Number(cardId)
    this.detailMovie = this.movieService.getMovieId(intString);
    console.log(this.detailMovie);
    
    this.dataActors = this.detailMovie.actors.split(',')
    console.log(this.dataActors);
    
    
  }

}
