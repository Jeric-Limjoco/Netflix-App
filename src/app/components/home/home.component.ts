import {Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) { 
    
  }
  popularMovies: Movie[] = [
    {title: 'Movie1', imageUrl: './assets/images/spiderman.jpg'},
    {title: 'Movie2', imageUrl: './assets/images/spiderman2.jpg' },
    {title: 'Movie3', imageUrl: './assets/images/spiderman3.jpg'},
    {title: 'Movie4', imageUrl: './assets/images/tasm1.jpg'},
    {title: 'Movie5', imageUrl: './assets/images/spiderverse.jpg'},
    {title: 'Movie6', imageUrl: './assets/images/spiderverse2.jpg'},
    
  ]

  trendingMovies: Movie[] = [
    {title: 'Movie7', imageUrl: './assets/images/fivenights.jpg'},
    {title: 'Movie7', imageUrl: './assets/images/marvels.jpg'},
    {title: 'Movie7', imageUrl: './assets/images/oppenheimer.jpg'},

  ]  

  tvShows: Movie[] = [
    {title: 'Movie7', imageUrl: './assets/images/loki.jpg'},
    {title: 'Movie7', imageUrl: './assets/images/sweet.jpg'},
    {title: 'Movie7', imageUrl: './assets/images/you.jpg'},
  ]
  onMovieClick(movie: Movie): void {
    this.router.navigate(['/movie', this.getMovieId(movie)]);
  }
  
  private getMovieId(movie: Movie): string {
    return movie.title.toUpperCase();
  }
}

interface Movie {
  title: string;
  imageUrl: any;
  additionalText?: string;
}