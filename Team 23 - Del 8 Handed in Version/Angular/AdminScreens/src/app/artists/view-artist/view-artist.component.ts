import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/Users/user';
import { UserService } from 'src/app/shared/User/user.service';

@Component({
  selector: 'app-view-artist',
  templateUrl: './view-artist.component.html',
  styleUrls: ['./view-artist.component.scss'],
})
export class ViewArtistComponent implements OnInit {
  user: User;
  artist: User;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser(this.userService.user.userID);
  }
}
