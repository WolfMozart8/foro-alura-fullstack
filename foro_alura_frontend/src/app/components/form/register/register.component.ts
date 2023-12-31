import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  usuarioValidation = new FormControl('', [Validators.required]);
  nombreValidation = new FormControl('', [Validators.required]);
  emailValidation = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  contrasenaValidation = new FormControl('', [Validators.required, Validators.minLength(6)]);

  // userRegister: UserRegister = {
  //   nombre: "",
  //   email: "",
  //   contrasena: ""
  // }

  constructor(
    private userService: UserService,
    private route: Router,
    private _snackBar: MatSnackBar
    ) {}

  onRegister() {
    const userRegister: UserRegister = {
      usuario: this.usuarioValidation.value,
      nombre: this.nombreValidation.value,
      email: this.emailValidation.value,
      contrasena: this.contrasenaValidation.value,
    };

    this.userService.userRegister(userRegister).subscribe({
      next: () => {
        this.openSnackBar("Te has registrado exitosamente");
        this.route.navigate(["/login"]);
      },
      error: (error) => console.error(error),
    });
  }

  openSnackBar(message: string){
    this._snackBar.open(message, "OK");
  }
}
