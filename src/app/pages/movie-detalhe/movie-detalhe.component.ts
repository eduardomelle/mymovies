import { Component, OnInit, Input } from "@angular/core";
import { MovieModel } from "../../models/movie-model";
import {
  ActivatedRoute,
  Router
} from "../../../../node_modules/@angular/router";

import { MoviesService } from "../../services/movies.service";

@Component({
  selector: "app-movie-detalhe",
  templateUrl: "./movie-detalhe.component.html",
  styleUrls: ["./movie-detalhe.component.scss"]
})
export class MovieDetalheComponent implements OnInit {
  movie: MovieModel = new MovieModel();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService
  ) {
    this.route.params.subscribe(params => {
      let id: string = params["id"];
      this.moviesService.getMovie(id).then(data => {
        const response = data as any;
        this.movie.id = response.id;
        this.movie.original_title = response.original_title;
        this.movie.overview = response.overview;
        this.movie.poster_path = response.poster_path;
      });
    });
  }

  ngOnInit() {}
}
