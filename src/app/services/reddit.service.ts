import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  // Default user settings
  public settings = {
    perPage: 10,
    subreddit: 'gifs',
    sort: '/hot'
  };

  public posts: any[] = []; // Hold an array of the posts retrieved from Reddit

  public loading: boolean = false; // Are we currently trying to load information from Reddit?
  private page: number = 1;
  private after: string; // Keeps track of the last gif that was pulled from the Reddit API.
  private moreCount: number = 0; // How much longer should you try getting enough gifs before you stop trying?

  constructor(private http:HttpClient, private dataService: DataService) {

   }

   load(): void{

   }

   fetchData(): void{

   }

   nextPage(): void{

   }

   resetPosts(): void {

   }

   changeSubreddit(subreddit): void {

   }
}
