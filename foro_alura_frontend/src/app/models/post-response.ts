export interface PostResponse {
    id: number,
    autor_id: number,
    autor: string,
    fechaCreacion: Date,
    solucion: boolean,
    mensaje: string
}

export interface CreateResponse {
    topico_id: number;
    autor_id: number;
    mensaje: string;
}

export interface EditResponse {
    id: number;
    mensaje?: string;
    solucion?: boolean;
}
