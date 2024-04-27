import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
//   template: `
//   <div>
//     <h2 style="color: white;">Movie Details</h2>
//     <p style="color: white;">Title: {{ movie.title }}</p>
//     <img class="img-fluid" [src]="movie.imageUrl">
//     <img [src]="movie.imageUrl" class="img-fluid" >
//     <p style="color: white;">Description: {{ movie.additionalText }}</p>
// </div>`,
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  // movie: Movie = { title: '', imageUrl: '', additionalText: '' };
  // additionalText: string | null = null;

  // constructor(private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   // Get the movieId from the route parameters
  //   this.route.params.subscribe(params => {
  //     const movieId = params['id'];

  //     const movies: Movie[] = [
  //       { title: 'Spider-Man', imageUrl: './assets/images/spiderman.jpg', additionalText: 'Spider-Man is an American comic book series created by Stan Lee and Steve Ditko.' },
  //       // { title: 'Movie 26', imageUrl: './assets/p1.png' },
  //       // { title: 'Movie 27', imageUrl: './assets/p1.png' },
  //     ];

  //     this.movie = movies.find(m => this.getMovieId(m) === movieId) || { title: '', imageUrl: '', additionalText: '' };
  //   });

  //   // Get the additionalText from the query parameters
  //   this.route.queryParams.subscribe(queryParams => {
  //     this.additionalText = queryParams['additionalText'];
  //   });
  // }

  // private getMovieId(movie: Movie): string {
  //   return movie.title.toUpperCase();
  // }
}

// interface Movie {
//   title: string;
//   imageUrl: string;
//   additionalText?: string;
// }
