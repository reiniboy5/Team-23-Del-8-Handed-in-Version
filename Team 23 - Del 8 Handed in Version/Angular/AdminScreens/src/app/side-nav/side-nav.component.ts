import { Component, OnInit } from '@angular/core';
import { Timer } from '../model/Users/timer';
import { UserService } from '../shared/User/user.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  constructor(public service: UserService) {}

  ngOnInit(): void {}

  getTimer(selectedTimer: Timer) {}
}
