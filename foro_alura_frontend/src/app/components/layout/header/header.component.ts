import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  menuOn: boolean = false;

  constructor(
    private storageService: StorageService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
  }

  logout(): void {
    this.storageService.clean();
    this.openSnackBar('te has desconectado');
    window.location.reload();
  }

  openSnackBar(message: string): void {
    this._snackBar.open(message, 'OK');
  }
}
