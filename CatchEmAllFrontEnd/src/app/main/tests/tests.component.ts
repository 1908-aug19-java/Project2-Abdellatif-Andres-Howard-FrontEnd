import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {MatSidenavModule } from '@angular/material';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/services/models/Post';
import { TrigerTroggleService } from 'src/app/services/triger-troggle.service';


@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})

export class TestsComponent implements OnInit {
  posts: Post[] = [];
   constructor(
     private postService: PostService,
     private trigerToggle: TrigerTroggleService) { }
  

  ngOnInit() {
  }
  
  
  

  side="toogle";
  clickLogin(){
    
    this.trigerToggle.newEvent("holi");

  }

  
  getAllPosts(){
    this.postService.getPosts()
      .subscribe((allPosts)=>{
        this.posts = allPosts;
      });

  }

}


  

 
  