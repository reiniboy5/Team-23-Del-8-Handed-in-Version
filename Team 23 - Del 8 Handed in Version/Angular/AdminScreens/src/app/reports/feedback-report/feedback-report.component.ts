import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ReportsService } from 'src/app/shared/reports.service';
import { Data } from './data';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-feedback-report',
  templateUrl: './feedback-report.component.html',
  styleUrls: ['./feedback-report.component.scss'],
})
export class FeedbackReportComponent implements OnInit {
  chart = [];
  teachers: any[];
  options = [
    { id: 1, text: 'Easy' },
    { id: 2, text: 'Medium' },
    { id: 3, text: 'Hard' },
    { id: 4, text: 'All' },
  ];
  selection: Number = 4;

  constructor(private service: ReportsService) {}

  ngOnInit(): void {}

  submitRequest() {
    this.service.getReportingData(this.selection).subscribe((response) => {
      console.log(response);

      let keys = response['ArtClasses'].map((d) => d.ArtClassName);
      let values = response['ArtClasses'].map((d) => d.Average);

      this.teachers = response['ClassTeachers'];

      var chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: keys,
          datasets: [
            {
              data: values,
              borderColor: '#3cba9f',
              fill: false,
              backgroundColor: [
                'red',
                'blue',
                'green',
                'orange',
                'teal',
                'lightblue',
                'purple',
                'maroon',
                'pinnk',
              ],
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Average rating by Art Class',
          },
          scales: {
            xAxes: [
              {
                display: true,

                // barPercentage: number
              },
            ],
            yAxes: [
              {
                display: true,
                ticks: {
                  min: 0,
                  max: 10,
                },
              },
            ],
          },
        },
      });
    });
  }

  public download(): void {
    let DATA = document.getElementById('pdf');

    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;

      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

      PDF.save('Feedback_Report.pdf');
    });
  }
}
