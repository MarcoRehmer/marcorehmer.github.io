import { Component } from '@angular/core';

export interface Post {
  content: string;
  id: string;
  title: string;
}

@Component({
  selector: 'app-blog-overview',
  templateUrl: 'blog-overview.component.html',
})
export class BlogOverviewComponent {
  readonly posts: Array<string> = [];

  constructor() {
    this.posts.push('squirrel-news');
  }
}
