import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit {
  loggedInUser: any;

  constructor() { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(localStorage.getItem('LoggedinUser'));
  }

}
