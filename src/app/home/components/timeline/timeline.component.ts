import { Component, OnInit } from "@angular/core";
import { TimelineSpan } from "../timeline-block/timeline-block.component";

@Component({
  selector: "app-timeline",
  templateUrl: "timeline.component.html",
  styleUrl: "timeline.component.scss",
})
export class TimelineComponent {
  readonly timelineSpans: Array<TimelineSpan>;

  constructor() {
    this.timelineSpans = [
      {
        yearFrom: "2023",
        jobTitle: "Frontend Developer / Freelancer",
        content: `Prototyping einer App zur Zeiterfassung mit ReactJS / NextJS. Erweiterung
      mittels Extensions (Web Components), Mobile Client mit React Native.
      Backend-Entwicklung in Go mit Gin-Framework und GORM`,
      },
      {
        yearFrom: "2022",
        yearTo: "2023",
        jobTitle: "Senior Web Developer / Co-Team Lead",
        content: `Erstellung von mehreren Microfrontends im öffentlichen Sektor, verwaltet
        mit Nx auf Basis von Angular. E2E Tests mit Cypress, Jest und Storybook.
        CI/CD Pipeline-Entwicklung mit Jenkins`,
      },
      {
        yearFrom: "2021",
        yearTo: "2022",
        jobTitle: "Web Frontend Developer",
        content: `Entwicklung Monitoring App für Dialyse-Maschinen in Angular.
        Weiterentwicklung einer Konfigurator-App für Consulting-Nutzer zur
        Angebotserstellung von Dialyse-Systemen`,
      },
      {
        yearFrom: "2018",
        yearTo: "2021",
        jobTitle: "Lead Mobile Frontend Developer",
        content: `Migration Bestandsanwendung von Windows.Forms nach Xamarin.Forms
        (Android & iOS). Offline-Ready Mobile App für Inventur, Wareneingang /
        Warenausgang, Bestandserfassung mit RFID-Erfassung`,
      },
      {
        yearFrom: "2014",
        yearTo: "2018",
        jobTitle: "Fullstack Software Developer",
        content: `Anwendungsentwicklung mit Schwerpunkt C#, .NET Compact Framework
        (Windows CE), WIndows.Forms und .NET Remoting`,
      },
    ];
  }
}
