import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { MoviesService } from "../../services/movies.service";
import { MovieModel } from "../../models/movie-model";

@Component({
  selector: "app-movies-page",
  templateUrl: "./movies-page.component.html",
  styleUrls: ["./movies-page.component.scss"]
})
export class MoviesPageComponent implements OnInit {
  title = "app";
  movies = Array<MovieModel>();
  loading = true;
  @Input() perpage: number;
  @Output() movieClicked = new EventEmitter();

  constructor(private moviesService: MoviesService) {
    this.moviesService
      .getMovies()
      .then(data => {
        const response = data as any;
        this.loading = false;
        this.movies = response.results.map(item => {
          const movie: MovieModel = new MovieModel();
          movie.id = item.id;
          movie.original_title = item.original_title;
          movie.overview = item.overview;
          movie.poster_path = item.poster_path;
          return movie;
        });
      })
      .catch(e => {
        console.log(e);
        alert(e);
      });
  }

  ngOnInit() {}

  itemClicked(movie) {
    this.movieClicked.emit(movie);
  }
}
