import { Component, Input, OnInit } from "@angular/core";

export interface TimelineSpan {
  yearFrom: string;
  yearTo?: string;
  jobTitle: string;
  content: string;
}

@Component({
  selector: "app-timeline-block",
  templateUrl: "timeline-block.component.html",
  styleUrl: "timeline-block.component.scss",
})
export class TimelineBlockComponent {
  @Input()
  timelineSpan?: TimelineSpan;

  expanded: boolean = false;

  toggleContent() {
    this.expanded = !this.expanded;
  }
}
