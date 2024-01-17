import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
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
  animations: [
    trigger("openClose", [
      state("open", style({ overflow: "hidden" })),
      state(
        "closed",
        style({
          height: "0",
          overflow: "hidden",
          visibility: "hidden",
          opacity: "0",
        })
      ),
      transition("* <=> *", [animate("300ms 0s ease-out")]),
    ]),
    trigger("rotateUpDown", [
      state("down", style({ rotate: "0" })),
      state("up", style({ rotate: "180deg" })),
      transition("* <=> *", [animate("200ms 0s ease-out")]),
    ]),
  ],
})
export class TimelineBlockComponent {
  @Input()
  timelineSpan?: TimelineSpan;

  open: boolean = false;

  toggleContent() {
    this.open = !this.open;
  }
}
