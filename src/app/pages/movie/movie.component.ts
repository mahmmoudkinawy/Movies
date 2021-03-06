import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie, MovieCredits, MovieImages, MovieVideo } from '../../models/movie';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  similarMovies: Movie[] = [];
  imagesSizes = IMAGES_SIZES;

  constructor(private route: ActivatedRoute, private moviesSerivce: MoviesService) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getMovieSimilar(id);
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

  getMovieSimilar(id: string) {
    this.moviesSerivce.getMovieSimiler(id).subscribe((movieSimilarData) => {
      this.similarMovies = movieSimilarData;
    });
  }

  ngOnDestroy(): void {
    console.log('component destroyed yala');
  }
}
