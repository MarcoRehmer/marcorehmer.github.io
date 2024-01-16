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
      { yearFrom: "2023" },
      { yearFrom: "2021", yearTo: "2023" },
      { yearFrom: "2018", yearTo: "2021" },
      { yearFrom: "2014", yearTo: "2018" },
    ];
  }
}
