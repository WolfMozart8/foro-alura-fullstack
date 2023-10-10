import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserData } from 'src/app/models/User';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedUserId: number = 0;
  loggedUser: UserData | null = null;

  isLoggedIn: boolean = false;
  menuOn: boolean = false;

  constructor(
    private storageService: StorageService,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.storageService.isLogged$.subscribe({
      next: login => {
        this.isLoggedIn = login;
        if (login) {
          this.loggedUserId = this.storageService.getUser().usuario_id;
        } else {
          this.loggedUserId = 0;
        }
      }
    })
  }

  logout(): void {
    this.storageService.clean();
    this.openSnackBar('te has desconectado');
    this.storageService.setLogOut();
    // window.location.reload();
  }

  openSnackBar(message: string): void {
    this._snackBar.open(message, 'OK', {duration: 5000});
  }
}
