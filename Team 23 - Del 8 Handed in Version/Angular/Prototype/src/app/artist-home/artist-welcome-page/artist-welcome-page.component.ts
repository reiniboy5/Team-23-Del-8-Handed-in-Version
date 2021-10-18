import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-welcome-page',
  templateUrl: './artist-welcome-page.component.html',
  styleUrls: ['./artist-welcome-page.component.scss']
})
export class ArtistWelcomePageComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/2000/500`);
  constructor() { }

  ngOnInit(): void {
  }

}
