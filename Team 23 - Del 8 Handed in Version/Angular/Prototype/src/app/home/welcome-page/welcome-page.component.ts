import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ArtClass } from 'src/app/model/ArtClasses/art-class';
import { Exhibition } from 'src/app/model/Exhibitions/exhibition';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  exhibitionList: Exhibition[];
  artClassList: ArtClass[];
  latestExhibition: any;
  latestArtClass: any;
  constructor(public service: DataService) {}

  ngOnInit(): void {
    this.service.getExhibitions().subscribe((res) => {
      this.exhibitionList = res as Exhibition[];
      this.exhibitionList.sort((a, b) => {
        return (
          <any>new Date(b.exhibitionStartDateTime) -
          <any>new Date(a.exhibitionStartDateTime)
        );
      });
      this.latestExhibition = this.exhibitionList[0];

      this.service.getArtClasses().subscribe((res) => {
        this.artClassList = res as ArtClass[];
        this.artClassList.sort((a, b) => {
          return (
            <any>new Date(b.artClassStartDateTime) -
            <any>new Date(a.artClassStartDateTime)
          );
        });
        this.latestArtClass = this.artClassList[0];
      });
    });
  }
  images = [944, 1011, 984].map(
    (n) => `https://picsum.photos/id/${n}/2000/500`
  );
}
