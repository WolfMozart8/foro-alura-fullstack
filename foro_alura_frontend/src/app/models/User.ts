import { PostMain } from "./Post-main";
import { PostResponse } from "./post-response";

export interface UserLogin {
    usuario: string;
    contrasena: string;
}

export interface UserRegister {
    usuario: string | null;
    nombre: string | null;
    email: string | null;
    contrasena: string | null;
}

export interface UserData {
    id: number;
    nombre: string;
    topicos: PostMain[];
    respuestas?: PostResponse[]
}
