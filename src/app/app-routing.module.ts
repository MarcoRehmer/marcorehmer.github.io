import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogOverviewComponent } from './blog/blog-overview.component';
import { PostComponent } from './blog/post/post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogOverviewComponent },
  { path: 'blog/:id', component: PostComponent },
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
