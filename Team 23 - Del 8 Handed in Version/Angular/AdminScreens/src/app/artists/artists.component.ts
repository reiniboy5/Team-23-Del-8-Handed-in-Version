import { Component, OnInit } from '@angular/core';
import { User } from '../model/Users/user';
import { UserService } from '../shared/User/user.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  users: User[];
  userTypeID: any;
  artistList: User[];
  user: User;
  searchValue: string;
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => {
      this.users = res as User[];
      this.artistList = this.users.filter(
        (user) => user.userType.userTypeID === 1
      );
    });
  }

  onViewArtist(selectedArtist: User) {
    this.userService.user = selectedArtist;
  }
}
