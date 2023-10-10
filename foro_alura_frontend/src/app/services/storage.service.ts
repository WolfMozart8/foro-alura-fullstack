import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const USER_KEY = "auth-user";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLogged$: Observable<boolean> = this._isLogged.asObservable();

  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user:any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user){
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user){
      return true;
    }

    return false;
  }

  public setLogIn(): void{
    this._isLogged.next(true);
  }
  public setLogOut(): void{
    this._isLogged.next(false);
  }
}
