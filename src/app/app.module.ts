import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { MoviesService } from "./services/movies.service";
import { MoviesPageComponent } from "./pages/movies-page/movies-page.component";

import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { MenuComponent } from "./pages/menu/menu.component";
import { MovieItemComponent } from "./pages/movie-item/movie-item.component";
import { MovieDetalheComponent } from "./pages/movie-detalhe/movie-detalhe.component";

const appRoutes: Routes = [
  /*{ path: "crisis-center", component: CrisisListComponent },
  { path: "hero/:id", component: HeroDetailComponent },
  {
    path: "heroes",
    component: HeroListComponent,
    data: { title: "Heroes List" }
  },*/
  {
    path: "",
    component: MoviesPageComponent,
    // redirectTo: "/heroes",
    pathMatch: "full"
  },
  // { path: "**", component: PageNotFoundComponent }
  {
    path: "dashboard",
    component: DashboardComponent,
    // redirectTo: "/heroes",
    pathMatch: "full"
  },
  {
    path: "detalhe/:id",
    component: MovieDetalheComponent,
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    DashboardComponent,
    MenuComponent,
    MovieItemComponent,
    MovieDetalheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
