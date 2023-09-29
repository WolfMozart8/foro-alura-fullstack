import { StatusPost } from "./Post-view";

export interface PostEdit {
    id: number;
    titulo?: string;
    mensaje?: string;
    status?: StatusPost;
}
