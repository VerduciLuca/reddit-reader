import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http:HttpClient) {}

  getRedditPosts(){
    this.http.get<any>('https://www.reddit.com/r/italy/new.json').pipe(
      tap()
    );
  }
}
