import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = {
    usuario: '',
    contrasena: '',
  };

  isValidForm: boolean = true;
  requiredFormControl = new FormControl("", [Validators.required]);

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string[] = [];

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private storageService: StorageService,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      // this.roles = this.storageService.getUser().roles;
    }
  }

  onLogin() {
    this.userService.userLogin(this.userLogin).subscribe({
      next: (data) => {
        this.isValidForm = false;

        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.storageService.setLogIn();
        // this.roles = this.storageService.getUser().roles;
        this.route.navigate(["/"]);
        this.openSnackBar("Login exitoso");
        console.log()
      },
      error: (error) => {
        this.isValidForm = false;
        console.error(error);
      },
    });
  }

  reloadPage(): void{
    window.location.reload();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "OK", {duration: 4000});
  }
}
