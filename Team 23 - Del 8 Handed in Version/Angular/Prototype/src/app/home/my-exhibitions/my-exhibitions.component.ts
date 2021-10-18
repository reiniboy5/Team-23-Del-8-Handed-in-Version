import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-exhibitions',
  templateUrl: './my-exhibitions.component.html',
  styleUrls: ['./my-exhibitions.component.scss']
})
export class MyExhibitionsComponent implements OnInit {
  loggedInUser: any;

  constructor() { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(localStorage.getItem('LoggedinUser'));
  }

}
