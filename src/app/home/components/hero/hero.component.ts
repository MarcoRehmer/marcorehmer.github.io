import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: "app-hero",
  templateUrl: "hero.component.html",
  styleUrl: "hero.component.scss",
  // animations: [
  //   trigger("pulsate", [
  //     state(
  //       "invisible",
  //       style({
  //         opacity: 0.3,
  //       })
  //     ),
  //     state(
  //       "visible",
  //       style({
  //         opacity: 1,
  //       })
  //     ),
  //     transition("* => *", [animate("1s")]),
  //   ]),
  // ],
})
export class HeroComponent {}
