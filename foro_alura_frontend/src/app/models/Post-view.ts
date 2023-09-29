import { PostResponse } from "./post-response";

export interface PostView {
    id: number;
    titulo: string;
    autor: string;
    autorId: number;
    fecha: string;
    statusTopico: StatusPost;
    respuestas: PostResponse[];
    mensaje: string;
    curso: string;
}

export enum StatusPost {
    NO_RESPONDIDO = "NO_RESPONDIDO",
	NO_SOLUCIONADO = "NO_SOLUCIONADO",
	SOLUCIONADO = "SOLUCIONADO",
	CERRADO = "CERRADO"
}
