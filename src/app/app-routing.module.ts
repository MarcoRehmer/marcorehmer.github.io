import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BlogOverviewComponent } from "./blog/blog-overview.component";
import { PostComponent } from "./blog/post/post.component";
import { ImprintComponent } from "./imprint/imprint.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "blog", component: BlogOverviewComponent },
  { path: "blog/:id", component: PostComponent },
  { path: "imprint", component: ImprintComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
