import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    {
      id: 1,
      title: 'Avatar',
      year: '2009',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn16S3di8DgpKZrcuBjyV3Tr0J6_axVHvh6DMHrPSYct79sxFutCWB7LG4uxqoEIc109I&usqp=CAU',
      actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
      plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
      Language: 'English, Spanish',
      Country: 'USA, UK',
	    imdbRating: '7.9',
     
    },
    {
      id: 2,
      title: '300',
      year: '2006',
      poster: 'https://c8.alamy.com/comp/H689H3/movie-poster-300-rise-of-an-empire-2014-H689H3.jpg',
      actors: 'Gerard Butler, Lena Headey, Dominic West, David Wenham',
      plot: 'Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.',
      Language: 'English',
      Country: 'USA',
      imdbRating: '7.2',
    },
    {
      id: 3,
      title: ' Avengers ',
      year: '2012',
      poster: 'https://live.staticflickr.com/4771/40132387124_5a19dd518f_b.jpg',
      actors: 'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth',
      plot: 'King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.',
      Language: 'English',
      Country: 'USA',
      imdbRating: '8.7',

    },

    {
      id: 4,
      title: 'The Wolf of Wall Street ',
      year: '2013',
      poster: 'https://i.pinimg.com/originals/ca/85/b0/ca85b0a51be6a481b042841ec8c4f8f9.jpg',
      actors: 'Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey',
      plot: 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
      Language: 'English',
      Country: 'USA',
      imdbRating: '8.2',
    },

{
      id: 5,
      title: 'Interstellar',
      year: '2011',
      poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
      plot: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.',
      Language: 'English',
      Country: 'USA',
      imdbRating: '8.6',
    },
{
      id: 6,
      title: 'Game of Thrones',
      year: '2011',
      poster: 'https://i.pinimg.com/originals/4a/7f/86/4a7f8662523c78ed18cc5a77534015ad.jpg',
      actors: 'Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington',
      plot: 'While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.',
      Language: 'English',
      Country: 'USA',
      imdbRating: '9.5',
    },
  ];

  actors:any

  public getAllMovie(){
    return this.movieList
  }
  public getAllActor(){
    const fltrActor =  this.movieList.map(ac => ac.actors)
    // this.actors = fltrActor.flat()
    return this.actors
  }
  public getMovieId(id: number) {
    return this.movieList.find(mv => mv.id == id)
  }

}
