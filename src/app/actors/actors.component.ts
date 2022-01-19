import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css'],

})
export class ActorsComponent implements OnInit {
  actors:any
  actor: any
  save=[];
  saveActor= [];

  constructor( private movieService:MovieService) { }

  ngOnInit(){
    this.actors = this.movieService.getAllActor();
    console.log(this.actors);
    
    
    // this.actor = this.actors[0].split(',')

    console.log(this.actor)

    for (let i of this.actors) {
      console.log(i);
      this.save = i.split(',')
      this.saveActor = this.saveActor.concat(this.save)

     
      // this.saveActor.push(this.save)
    
      //tidak bisa split saat for
      //jd error properties of undefined (reading 'split')
      //sudah coba pakai split tp masih tdk bisa
    }
    console.log(this.saveActor)
    

  }
}
