import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
   private readonly apiKey = '8e7e2ea02de910683f780f1996fea5c4';
   private readonly movieUrl ='https://api.themoviedb.org/3/movie/550?api_key='; 
   
  constructor(private http: HttpClient) { }

  public getMovie()
  {
    return this.http.get( this.movieUrl + this.apiKey);
  }
}
