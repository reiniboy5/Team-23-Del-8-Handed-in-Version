import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-completed',
  templateUrl: './artist-completed.component.html',
  styleUrls: ['./artist-completed.component.scss']
})
export class ArtistCompletedComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onFeedback() {
    this.route.navigate(['../artist-home/artist-bookings/artist-feedback']);

  }
}
