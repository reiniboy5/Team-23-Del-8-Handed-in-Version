import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-class',
  templateUrl: './completed-class.component.html',
  styleUrls: ['./completed-class.component.scss']
})
export class CompletedClassComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onFeedback() {
    this.route.navigate(['../home/my-bookings/feedback']);

  }

}
