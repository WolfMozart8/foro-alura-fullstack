import { Component, OnInit } from '@angular/core';
import { PostView } from "../../../models/Post-view";
import { Router } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';
import { PageEvent } from "@angular/material/paginator";
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-forum-main',
  templateUrl: './forum-main.component.html'
})
export class ForumMainComponent implements OnInit{

  constructor (private route: Router, private postService: PostServiceService, private storageService: StorageService){}

  pageEvent: PageEvent|null = null;
  postsList: PostView[] = [];

  currentPage: number = 0;
  pageSize: number = 0;
  totalPages: number = 0;
  totalElements: number = 0;

  isFetched: boolean = false;
  isLoggedIn: boolean = false;

  ngOnInit(): void {

    this.isLoggedIn = this.storageService.isLoggedIn();

    this.postService.getPostList(this.currentPage).subscribe(
      {
        next: (data) => {
        this.postsList = data.content;
        this.currentPage = data.pageable.pageNumber;
        this.totalPages = data.totalPages;
        this.pageSize = data.pageable.pageSize;
        this.totalElements = data.totalElements;
    },
    error: (error) => {
      console.error(error);

    },
    complete: () => {
      this.isFetched = true
    }
  })
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.totalElements = e.length;
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;

    // to scroll to the top when changing pages
    window.scrollTo({top: 0, behavior: 'instant'});
  }

  nuevaLista(): void {
    this.postService.getPostList(this.currentPage).subscribe(
      {
        next: (data) => {
          console.log(this.isFetched);
          this.postsList = data.content;
      },
      error: (error) => {
        console.error(error);
      }
    }
    );
}


  actualPage(page: number) {
    this.route.navigate(["/posts", page]);
  }

  onCreatePost(): void{
    if (this.isLoggedIn){
      this.route.navigate(["/posts/new"]);
    } else {
      this.route.navigate(["/login"]);
    }
  }

}
