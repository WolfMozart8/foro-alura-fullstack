import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { PostView, StatusPost } from 'src/app/models/Post-view';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})
export class ForumListComponent implements OnInit, OnChanges{

  constructor (private route: Router, private postService: PostServiceService){}

  pageEvent: PageEvent|null = null;
  postsList: PostView[] = [];

  status: StatusPost = StatusPost.NO_RESPONDIDO;

  @Input() isFetched: boolean = false;

  @Input() currentPage: number = 0;
  responsesNumber: number = 0;
  // pageSize: number = 0;
  // totalPages: number = 0;


  ngOnInit(): void {
    this.postService.getPostList(this.currentPage).subscribe(
      {
      next: (data) => {
      // console.log(data)
      this.postsList = data.content;
      this.currentPage = data.pageable.pageNumber;
      // this.totalPages = data.totalPages;
      // this.pageSize = data.pageable.pageSize;
      this.postsList.map(post => {
        if (post.respuestas.length != 0) {
          post.statusTopico = StatusPost.NO_SOLUCIONADO;
        }
        if (post.respuestas.length != 0 && post.respuestas.some(obj => obj.solucion === true)) {
          post.statusTopico = StatusPost.SOLUCIONADO;
        }
      }
      )
    },
    error: (error) => {
      console.error(error);

    },
    complete: () => {
      this.isFetched = true;
    }

  }
  )

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.postService.getPostList(changes["currentPage"].currentValue).subscribe((data) => {
        this.postsList = data.content;
        this.chagePostStatus(this.postsList);
    })
  }

  irAlPost(id: number) {
    console.log("id: " + id)
    this.route.navigate(["/posts", id])
  }

  statusColor(status: StatusPost):string {
    let statusClass: string = "";

    switch(status){
      case StatusPost.NO_RESPONDIDO:
        statusClass = "opacity-0";
        break;

      case StatusPost.NO_SOLUCIONADO:
        statusClass = "bg-gray-400 text-white";
        break;

      case StatusPost.SOLUCIONADO:
        statusClass = "bg-green-400 text-white";
        break;

      case StatusPost.CERRADO:
        statusClass = "bg-red-500 text-white";
        break;
      default:
        statusClass = "";
        break;
    }
    return statusClass;
  }

  chagePostStatus(postList: PostView[]) {
    return postList.map(post => {
      if (post.respuestas.length != 0) {
        post.statusTopico = StatusPost.NO_SOLUCIONADO;
        console.log("ah")
      }
      if (post.respuestas.length != 0 && post.respuestas.some(obj => obj.solucion === true)) {
        post.statusTopico = StatusPost.SOLUCIONADO;
      }
    })
  }
}
