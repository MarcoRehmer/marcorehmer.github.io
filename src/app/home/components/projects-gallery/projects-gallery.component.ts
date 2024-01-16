import { Component, OnInit } from "@angular/core";

interface Project {
  title: string;
  shortDescription: string;
  imageUrl: string;
  content: string;
}

@Component({
  selector: "app-projects-gallery",
  templateUrl: "projects-gallery.component.html",
  styleUrl: "projects-gallery.component.scss",
})
export class ProjectsGalleryComponent {
  readonly projects: ReadonlyArray<Project>;

  constructor() {
    this.projects = [
      {
        title: "Clockmate",
        imageUrl: "assets/images/clockmate_thumbnail.png",
        shortDescription:
          "Modulare Zeiterfassung, komplett anpassbar. Für User. Für Devs.",
        content: "",
      },
      {
        title: "Personal Portfolio",
        imageUrl: "assets/images/portfolio_thumbnail.png",
        shortDescription: "Eigenes Portfolio, Hand-Crafted mit Angular 17",
        content: "",
      },
      {
        title: "Squirrel News App",
        imageUrl: "assets/images/squirrel-news-app_thumbnail.png",
        shortDescription: "News App für kuratierte, konstruktive Nachrichten",
        content: "",
      },
    ];
  }
}
