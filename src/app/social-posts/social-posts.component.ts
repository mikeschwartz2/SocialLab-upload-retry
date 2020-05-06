import { Component, OnInit, Input, Output } from '@angular/core';
import { Post } from '../Interfaces/Post';



@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  // @Input() title:string;
  // @Input() thought:string;

  newTitle:string = "";
  newThought:string = "";
  showForm:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  posts:Post[] = [
    {
      title: "Example Post",
      thought: "This is a generic thought"
    },
    {
      title: "Another Post",
      thought: "Just another random thought"
    }
  ];

  addThought = function(newTitle, newThought){
    this.posts.push( { title: newTitle, thought: newThought } )
    this.showForm = false;
  }
  
  deletePost = function (index) {
    this.posts.splice(index, 1);
  }

  showFormToggle = function () {
    this.showForm = true;
  }

}
