import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private baseUrl = "http://localhost:8080/cursos";

  constructor(private http: HttpClient) { }

  getCursosList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }


}
