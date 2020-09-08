import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  search = '';
  searchField = 'title';


  posts: Post[] = [
    {title: "Somsa", text: "Ya lubli somasu"},
    {title: "Nyam Nyam", text: "woooooooooow"},
    {title: "Nyam Nyam", text: "woooooooooow"},
  ];

  addPost() {
    this.posts.push({
      title: 'Angular 9',
      text: 'Course wooooow'
    })
  }

}
