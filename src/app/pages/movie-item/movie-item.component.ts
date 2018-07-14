import { Component, OnInit, Input } from "@angular/core";
import { MovieModel } from "../../models/movie-model";

@Component({
  selector: "app-movie-item",
  templateUrl: "./movie-item.component.html",
  styleUrls: ["./movie-item.component.scss"]
})
export class MovieItemComponent implements OnInit {
  @Input() movie: MovieModel;

  constructor() {}

  ngOnInit() {}

  itemClicked(movie: MovieModel) {
    alert(movie.original_title);
  }
}
