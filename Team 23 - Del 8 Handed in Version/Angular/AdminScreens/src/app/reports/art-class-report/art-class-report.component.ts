import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-art-class-report',
  templateUrl: './art-class-report.component.html',
  styleUrls: ['./art-class-report.component.scss'],
})
export class ArtClassReportComponent implements OnInit {
  classes;
  class;

  constructor(private httpService: HttpClient) {}

  ngOnInit(): void {
    this.httpService
      .get('https://localhost:44312/api/ArtClasses')
      .subscribe((res) => {
        this.classes = res as string[];
        console.log((this.classes = res as string[]));
      });
  }

  getClass(ArtClassID) {
    this.httpService
      .get('https://localhost:44312/api/ArtClasses/getArtClasses/' + ArtClassID)
      .subscribe((res) => {
        this.class = res as string[];
        console.log((this.class = res as string[]));
      });
  }

  isShown: boolean = false;
  showTable() {
    this.isShown = true;
  }

  hideTable() {
    this.isShown = false;
  }
}
