import { Component, Input } from '@angular/core';
import { Post } from 'src/app/model/post';
import { RedditService } from 'src/app/services/reddit.service';
import { StorageService } from 'src/app/services/storage.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {


  posts: Post[] = []
  constructor (private reddit: RedditService, public storage:StorageService){}

  ngOnInit(): void {
    this.reddit.getRedditPosts().subscribe(childrenData => this.posts = childrenData);
    console.log(this.posts);

  }

}
