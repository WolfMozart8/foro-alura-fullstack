import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {

  user: UserData | null = null;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: params => {
        const userId = params["id"];

        this.userService.getUserData(userId).subscribe({
          next: data => {
            this.user = data;
          },
          error: error => console.error(error)

        })
      },
      error: error => console.error(error)
    })
  }
}
