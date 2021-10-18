import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ReportsService } from 'src/app/shared/reports.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-class-teacher-report',
  templateUrl: './class-teacher-report.component.html',
  styleUrls: ['./class-teacher-report.component.scss'],
})
export class ClassTeacherReportComponent implements OnInit {
  chart = [];
  classes: any[];
  options = [
    { id: 1, text: 'January' },
    { id: 2, text: 'February' },
    { id: 3, text: 'March' },
    { id: 4, text: 'April' },
    { id: 5, text: 'May' },
    { id: 6, text: 'June' },
    { id: 7, text: 'July' },
    { id: 8, text: 'August' },
    { id: 9, text: 'September' },
    { id: 10, text: 'October' },
    { id: 11, text: 'November' },
    { id: 12, text: 'December' },
    { id: 13, text: 'All Year' },
  ];
  selection: Number = 1;

  constructor(private service: ReportsService) {}

  ngOnInit(): void {}

  submitRequest() {
    this.service.getReportingData2(this.selection).subscribe((response) => {
      console.log(response);

      let keys = response['ArtClasses'].map((d) => d.ArtClassName);
      let values = response['ArtClasses'].map((d) => d.Sum);

      this.classes = response['Classes'];

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

  // teachers;
  // teacher;
  // classes;
  // class;
  // rand;

  // constructor(private httpService: HttpClient) { }

  // ngOnInit(): void {
  //   this.httpService.get('https://localhost:44312/api/ClassTeachers').subscribe (res => {
  //     this.teachers = res as string [];
  //     console.log(this.teachers = res as string [])
  //   });
  //   this.httpService.get('https://localhost:44312/api/ArtClasses').subscribe (res => {
  //     this.classes = res as string [];
  //     console.log(this.classes = res as string [])
  //   });
  //  this.getRandomInt(1,8)
  // }

  // getTeacher(ClassTeacherID){
  //   this.httpService.get('https://localhost:44312/api/Teacher/getTeacherClasses/' + ClassTeacherID).subscribe (res => {
  //     this.teacher = res as string [];
  //     console.log(this.teacher = res as string [])
  //   });
  // }

  // getClass(ArtClassID){
  //   this.httpService.get('https://localhost:44312/api/ArtClasses/getArtClasses/' + ArtClassID).subscribe (res => {
  //     this.class = res as string [];
  //     console.log(this.class = res as string [])
  //   });
  // }

  // isShown: boolean = false ;
  // showTable() {

  //   this.isShown = true;

  //   }

  // hideTable(){
  //   this.isShown = false;
  // }

  // getRandomInt(min, max) {
  //   min = Math.ceil(1);
  //   max = Math.floor(8);
  //   this.rand = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  //   console.log(this.rand)
  //   return this.rand;
  // }
}
