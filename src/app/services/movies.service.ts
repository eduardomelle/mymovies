import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  api_key: string = "api_key=9a2695c5bac0e19d7d1cc459957b9f83";
  base_path: string = "https://api.themoviedb.org/3/";
  movies_popular_path: string = `${this.base_path}movie/popular?${
    this.api_key
  }&language=pt-BR`;

  constructor(private http: HttpClient) {}

  getMovies() {
    return new Promise((resolve, reject) => {
      this.http.get(this.movies_popular_path).subscribe(
        data => {
          console.log(data);
          resolve(data);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  getMovie(id) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.base_path}movie/${id}?${this.api_key}`).subscribe(
        data => {
          console.log(data);
          resolve(data);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }
}
