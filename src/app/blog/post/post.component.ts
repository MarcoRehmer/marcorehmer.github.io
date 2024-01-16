import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "post.component.html",
})
export class PostComponent implements OnInit {
  @Input() id!: string;

  post?: string = undefined;
  constructor() {}
  ngOnInit(): void {
    this.post = ``;
  }
}
