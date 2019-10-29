import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movieObj: any = {};
  movie: any = {};
  image : any = {};

constructor() { }

public getStoreMovie() {
  var movie = JSON.parse(localStorage.getItem('movie')); 
  this.image = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
  if (movie.release_date != null) {     
    movie.release_date = moment(movie.release_date).format('D MMMM YYYY');
    this.movie = movie;
  }
  else {
    movie.release_date = '';
    this.movie = movie;
  }
}
  ngOnInit() {
   this.getStoreMovie();
  }
}
