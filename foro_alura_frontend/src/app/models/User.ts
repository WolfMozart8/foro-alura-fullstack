export interface UserLogin {
    nombre: string;
    contrasena: string;
}

export interface UserRegister {
    nombre: string | null;
    email: string | null;
    contrasena: string | null;
}
