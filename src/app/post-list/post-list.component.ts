import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = [
    {
      title: "Angular",
      content: "C'est un merveilleux framework.",
      loveIts: 2,
      created_at:  new Date()
    },
    {
      title: "Lorem",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      loveIts: -1,
      created_at:  new Date('February 10, 2019 16:24:00')
    },
    {
      title: "Création",
      content: "Bienvenu sur mon blog !",
      loveIts: 0,
      created_at:  new Date('February 9, 2019 15:13:00')
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
