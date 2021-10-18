import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-application',
  templateUrl: './my-application.component.html',
  styleUrls: ['./my-application.component.scss']
})
export class MyApplicationComponent implements OnInit {
  selectedApplication: any;



  constructor() { }

  ngOnInit(): void {

     this.selectedApplication = JSON.parse(localStorage.getItem('SelectedApplication'));


  }

}
