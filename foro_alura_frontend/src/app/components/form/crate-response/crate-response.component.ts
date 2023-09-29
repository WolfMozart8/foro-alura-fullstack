import { Component, Input, OnInit } from '@angular/core';
import { CreateResponse } from 'src/app/models/post-response';
import { ResponseService } from 'src/app/services/response.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-crate-response',
  templateUrl: './crate-response.component.html',
  styleUrls: ['./crate-response.component.css'],
})
export class CrateResponseComponent implements OnInit {
  message: string = '';
  userId: number = 0;
  @Input() postId: number = 0;

  constructor(
    private storageService: StorageService,
    private responseService: ResponseService,
    private storateService: StorageService
  ) {}

  ngOnInit(): void {
    this.userId = this.storageService.getUser().usuario_id;
  }

  onNewResponse() {
    const newResponse: CreateResponse = {
      topico_id: this.postId,
      autor_id: this.userId,
      mensaje: this.message,
    };

    if (
      newResponse.autor_id != undefined &&
      newResponse.autor_id != null &&
      newResponse.autor_id != 0
    ) {
      this.responseService
        .createResponse(newResponse, this.storageService.getUser().jwtToken)
        .subscribe({
          next: (data) => {
            console.log(data);
            this.reloadPage();
          },
          error: (error) => console.error(error),
        });
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
