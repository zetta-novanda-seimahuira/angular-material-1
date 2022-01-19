import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-card-actor',
  templateUrl: './card-actor.component.html',
  styleUrls: ['./card-actor.component.css']
})
export class CardActorComponent implements OnInit {

  constructor( private movieService:MovieService) { }
  ngOnInit(): void {
  }
  @Input() actor:any;

}
