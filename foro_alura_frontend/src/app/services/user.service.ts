import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData, UserLogin, UserRegister } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private userId = null;
  // private token: string | null = null;

  private urlLogin = 'http://localhost:8080/login';
  private urlUsers = 'http://localhost:8080/usuarios';

  // private loginHeader = new HttpHeaders()
  //   .set('Content-Type', 'application/json')
  //   .set('Authorization', `Bearer ${this.token}`);

  constructor(private http: HttpClient) {}

  userLogin(user: UserLogin): Observable<any> {
    return this.http.post(this.urlLogin, user);
  }

  userRegister(user: UserRegister): Observable<any> {
    return this.http.post(this.urlUsers, user);
  }

  getUserData(id: number): Observable<any>{
    return this.http.get(this.urlUsers + "/" + id);
  }
}
