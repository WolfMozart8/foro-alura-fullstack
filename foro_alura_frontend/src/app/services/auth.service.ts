import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userId: number= 0;
  private jwtToken: string = "";

  private userData = {
    id: 0,
    token: ""
  };

  constructor() { }

  getUserId() {
    return this.userId;
  }
  getJwtToken() {
    return this.jwtToken;
  }


  setUserId(id: number) {
    this.userId = id;
    ;
  }
  setJwtToken(token: string) {
    this.jwtToken = token;
  }

}
