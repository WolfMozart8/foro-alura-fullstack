import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PostView, StatusPost } from 'src/app/models/Post-view';
import { PostEdit } from 'src/app/models/post-edit';
import { EditResponse, PostResponse } from 'src/app/models/post-response';
import { AuthService } from 'src/app/services/auth.service';
import { PostServiceService } from 'src/app/services/post-service.service';
import { ResponseService } from 'src/app/services/response.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  isFetched: boolean = false;
  isOwner: boolean = false;
  IsLoggedUserResponse: boolean = false;
  isEditing: boolean = false;
  isEditingResponse: boolean = false;
  isDeleting: boolean = false;
  isDeletingResponse: boolean = false;
  isSolved: boolean = false;

  loggedUserId: number = 0;

  editedPost: PostEdit = {
    id: 0,
  };

  editedResponseMessage: string = "";

  constructor(
    private route: ActivatedRoute,
    private routeNavigate: Router,
    private postService: PostServiceService,
    private authService: AuthService,
    private storageService: StorageService,
    private responseService: ResponseService
  ) // public dialog: MatDialog
  {}

  postMain: PostView | null = null;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const postId = params['id'];

      // this.postMain = posts.filter(p => p.id == postId)[0];
      // console.log(this.postService.getPostById(postId))
      this.postService.getPostById(postId).subscribe({
        next: (data) => {
          this.editedPost.id = postId;
          this.editedPost.titulo = data.titulo;
          this.editedPost.mensaje = data.mensaje;
          const ownerId = this.storageService.getUser().usuario_id;
          this.loggedUserId = this.storageService.getUser().usuario_id;
          this.postMain = data;

          this.isSolved = data.respuestas.some((post: PostResponse) => post.solucion === true);

          console.log(data);
          console.log('service: ' + data.autor_id + ' ' + ownerId);

          if (data.autor_id === this.storageService.getUser().usuario_id) {
            this.isOwner = true;
          }

          this.isFetched = true;
        },
        error: (error) => {
          console.error(error);
        },
        complete() {},
      });
    });
  }

  onEdit() {
    this.isDeleting = false;
    this.isEditing = !this.isEditing;
  }

  editPost(){
    if(this.isOwner){
    this.postService
      .editPost(this.editedPost, this.storageService.getUser().jwtToken)
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => console.error(error)
      });

      this.isEditing = false;
      this.reloadPage();

    }
  }
  onEditResponse(responseMessage: string) {
    this.isDeletingResponse = false;
    this.isEditingResponse = !this.isEditingResponse;
    this.editedResponseMessage = responseMessage;
  }

  editPostResponse(response: PostResponse, message: string){
    if(response.autor_id === this.loggedUserId){

      const responseEdit: EditResponse = {
          id: response.id,
          mensaje: message
      }
      this.responseService.editResponse(responseEdit, this.storageService.getUser().jwtToken)
      .subscribe({
        next: data => console.log(data),
        error: error => console.error(error)
      })

      this.isEditingResponse = false;
      this.reloadPage();

    }
  }

  onDelete() {
    this.isEditingResponse = false;
    this.isDeletingResponse = !this.isDeletingResponse;
  }

  deletePost() {
    if (this.isOwner) {
      const postId = this.editedPost.id;
      this.postService
        .deletePost(postId, this.storageService.getUser().jwtToken)
        .subscribe();

        this.routeNavigate.navigate(["/"]);
    }
  }

  onDeleteResponse() {
    this.isEditingResponse = false;
    this.isDeleting = !this.isDeleting;
  }

  deletePostResponse(response: PostResponse) {
    if (response.autor_id === this.loggedUserId) {
      this.responseService.deleteResponse(response.id, this.storageService.getUser().jwtToken).subscribe({
        next: data => console.log(data),
        error: error => console.error(error)
      })

      this.reloadPage();
  }
}

  // openDialog(){
  //   this.dialog.open();
  // }

  solutionResponse(response: PostResponse) {
    if (this.isOwner){
    const solutionPost: EditResponse = {
      id: response.id,
      solucion: !response.solucion
    }

    this.isSolved = !this.isSolved;
    this.responseService.editResponse(solutionPost, this.storageService.getUser().jwtToken).subscribe(
      {
        next: data => console.log(data),
        error: error => console.error(error)
      }
    );

    this.reloadPage();
  }
}
  //TODO: create post-status server chage

  reloadPage(){
    window.location.reload();
  }
}
