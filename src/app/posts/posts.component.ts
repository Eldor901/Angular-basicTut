import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  showPosts =  false;

  constructor(public postsService: PostsService, private router: ActivatedRoute, private  route: Router) {
  }

  ngOnInit(): void {
    this.router.queryParams.subscribe((params: Params)=>{
      this.showPosts = !!params.showPosts;
    })
  }

  showIdsProgram() {
     this.route.navigate(['/posts'], {
       queryParams: {
         showPosts: true
       }
     })
  }
}
