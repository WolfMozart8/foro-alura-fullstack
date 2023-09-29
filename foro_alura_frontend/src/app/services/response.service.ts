import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateResponse, EditResponse, PostResponse } from '../models/post-response';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  private baseUrl = 'http://localhost:8080/topicos/respuestas';

  constructor(private http: HttpClient) {}

  createResponse(
    newResponse: CreateResponse,
    bearerToken: string
  ): Observable<any> {
    return this.http.post(this.baseUrl, newResponse, {
      headers: {
        Authorization: bearerToken,
      },
    });
  }

  editResponse(
    postResponse: EditResponse,
    bearerToken: string
  ):Observable<any> {
    return this.http.put(this.baseUrl, postResponse, {
      headers: {
        "Authorization": bearerToken
      }
    });
  }
}
