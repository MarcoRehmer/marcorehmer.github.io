import { NgModule } from "@angular/core";
import {
  BrowserModule,
  provideClientHydration,
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlogOverviewComponent } from "./blog/blog-overview.component";
import { PostComponent } from "./blog/post/post.component";
import { MarkdownModule } from "ngx-markdown";
import { HttpClient, provideHttpClient, withFetch } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "./home/components/hero/hero.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutComponent } from "./home/components/about/about.component";
import { TimelineComponent } from "./home/components/timeline/timeline.component";
import { ProjectsGalleryComponent } from "./home/components/projects-gallery/projects-gallery.component";
import { ContactBoxComponent } from "./home/components/contact-box/contact-box.component";
import { TimelineBlockComponent } from "./home/components/timeline-block/timeline-block.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ImprintComponent } from "./imprint/imprint.component";
import { NotFoundComponent } from "./404/404.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HomeComponent,
    AboutComponent,
    BlogOverviewComponent,
    PostComponent,
    NavbarComponent,
    TimelineComponent,
    ProjectsGalleryComponent,
    ContactBoxComponent,
    TimelineBlockComponent,
    ImprintComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
