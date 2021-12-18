import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie, MovieCredits, MovieImages, MovieVideo } from '../../models/movie';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  imagesSizes = IMAGES_SIZES;
  constructor(private route: ActivatedRoute, private moviesSerivce: MoviesService) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    });
  }

  getMovie(id: string) {
    this.moviesSerivce.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  getMovieImages(id: string) {
    this.moviesSerivce.getMovieImages(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
    });
  }

  getMovieVideos(id: string) {
    this.moviesSerivce.getMovieVideos(id).subscribe((movieVideosData) => {
      this.movieVideos = movieVideosData;
    });
  }

  getMovieCredits(id: string) {
    this.moviesSerivce.getMovieCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
    });
  }
}
