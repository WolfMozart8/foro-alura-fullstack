import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/cursos';
import { postCreate } from 'src/app/models/post-create';
import { AuthService } from 'src/app/services/auth.service';
import { CursosService } from 'src/app/services/cursos.service';
import { PostServiceService } from 'src/app/services/post-service.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit{
  newPost: postCreate = {
    titulo: '',
    mensaje: '',
    autor_id: 0,
    curso_id: 0,
  };

  cursosList :Curso[] = [];
  isValidForm: boolean = false;

  constructor(
    private postService: PostServiceService,
    private cursosService: CursosService,
    private authService: AuthService,
    private storageService: StorageService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.cursosService.getCursosList().subscribe(data => {
      this.cursosList = data;
    })
  }

  isValid(): boolean {
    if (this.newPost.titulo === "" || this.newPost.mensaje === "" || this.newPost.autor_id == 0 || this.newPost.curso_id == 0){
      return false;
    } else {
      return true;
    }
  }

  onSubmit():void {
      this.newPost.autor_id = this.storageService.getUser().usuario_id;
      console.log(this.storageService.getUser())
      console.log(this.newPost)
    if (this.isValid()){
      this.postService.createPost(this.newPost, this.storageService.getUser().jwtToken).subscribe({
        next: (data) => {
        const postId: number = data.id;

        this.route.navigate(["posts/" + postId])
        },
        error: (error) => {
          console.error(error);
        }
      });

    }
  }
}
