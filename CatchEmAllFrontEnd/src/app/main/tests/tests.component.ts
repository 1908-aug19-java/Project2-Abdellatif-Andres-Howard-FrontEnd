import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {MatSidenavModule } from '@angular/material';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/services/models/Post';


@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})

export class TestsComponent implements OnInit {
  posts: Post[] = [];
  
  @Output() clicklo = new EventEmitter();

  side=1;
  clickLogin(){
    this.side++;
    this.clicklo.emit(this.side);

  }

 
  constructor(private postService: PostService,
              private sideNavService: MatSidenavModule) { }
  

  ngOnInit() {
  }
  
  
  
  
  getAllPosts(){
    this.postService.getPosts()
      .subscribe((allPosts)=>{
        this.posts = allPosts;
      });

  }

}


  

 
  