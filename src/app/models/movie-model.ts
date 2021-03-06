export class MovieModel {
  id: string;
  overview: string;
  original_title: string;
  poster_path: string;

  get img_url(): string {
    return "https://image.tmdb.org/t/p/w500" + this.poster_path;
  }
}
