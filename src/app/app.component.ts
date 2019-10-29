import { Component } from '@angular/core';
import { MovieService } from './shared/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieSearch';
  movieList: any = [];
  movie: any = {};
  foundMovie: any = [];

  constructor(private service: MovieService) { }

  public GetMovie(movie: any) {
    if (movie.title != '') {
      localStorage.clear();    
    }
    this.service.getMovie().subscribe((res) => {
      this.movieList = res; 
      if (movie.title.substring(1,2) == this.movieList.title.substring(1,2) ) {
        localStorage.setItem('movie', JSON.stringify(this.movieList));
      }
   },
   (err) => {
      console.log(err.Message);
   });
  }
}
