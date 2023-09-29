import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { PostView } from '../models/Post-view';
import { postCreate } from '../models/post-create';
import { PostEdit } from '../models/post-edit';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService{

  private postList: PostView[] = [];

  private baseUrl = "http://localhost:8080/topicos?page=";
  private baseUrlParam = "http://localhost:8080/topicos/";
  private baseUrlPost = "http://localhost:8080/topicos";

  constructor(private http: HttpClient) { }

  getPostList(page: number) :Observable<any> {
    return this.http.get(this.baseUrl + page);
  }

  getPostById(id: number): Observable<any> {
    return this.http.get(this.baseUrlParam + id);
  }
  createPost(postItem: postCreate, bearerToken: string): Observable<any> {
    return this.http.post(this.baseUrlPost, postItem, {headers: {
      "Authorization": bearerToken
    }});
  }

  editPost(postToEdit: PostEdit, bearerToken: string): Observable<any> {
    return this.http.put(this.baseUrlPost, postToEdit, {headers: {
      "Authorization": bearerToken
    }});
  }

  deletePost(postId: number, bearerToken: string): Observable<any> {
    return this.http.delete(this.baseUrlParam + postId, {headers: {
      "Authorization": bearerToken
    }});
  }
}
