import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exhibition-report',
  templateUrl: './exhibition-report.component.html',
  styleUrls: ['./exhibition-report.component.scss'],
})
export class ExhibitionReportComponent implements OnInit {
  exhibitions;
  exhibition;

  constructor(private httpService: HttpClient) {}

  ngOnInit(): void {
    this.httpService
      .get('https://localhost:44312/api/Exhibitions')
      .subscribe((res) => {
        this.exhibitions = res as string[];
        console.log((this.exhibitions = res as string[]));
      });
  }

  getExhibition(ExhibitionID) {
    this.httpService
      .get(
        'https://localhost:44312/api/Exhibition/getExhibition/' + ExhibitionID
      )
      .subscribe((res) => {
        this.exhibition = res as string[];
        console.log((this.exhibition = res as string[]));
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
