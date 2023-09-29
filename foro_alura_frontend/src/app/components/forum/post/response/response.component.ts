import { Component, Input } from '@angular/core';
import { PostResponse } from 'src/app/models/post-response';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent {

  @Input() respuestas: PostResponse[] = [];


}
