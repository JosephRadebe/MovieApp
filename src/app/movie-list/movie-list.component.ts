import { Component, OnInit } from '@angular/core';
import { Observable,Subscription, interval } from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

public movieList = [];
  movieObj = JSON.parse(localStorage.getItem('movie'));
  updateSubscription: Subscription;
  constructor(private router: Router){}

public getStoreMovie() {
   var movie = JSON.parse(localStorage.getItem('movie'));
   this.movieList.push(movie);
}
  
public onSelectedMovie(movie: any) {
    if (movie.title != null ) {
      localStorage.setItem('movie',JSON.stringify(movie));  
    }   
  }

public refresh() {
    this.updateSubscription = interval(1).subscribe(
      (val) => { 
        if (val == 1) {
          this.getStoreMovie();
        }    
    });
  }
  
  ngOnInit() {
   this.refresh();
  }
}
