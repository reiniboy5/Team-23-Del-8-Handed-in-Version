import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/shared/reports.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user-report',
  templateUrl: './new-user-report.component.html',
  styleUrls: ['./new-user-report.component.scss'],
})
export class NewUserReportComponent implements OnInit {
  constructor(
    public formbuilder: FormBuilder,
    private report: ReportsService
  ) {}
  model: any = {};
  emp: any;

  dateForm: any;
  details: any;
  ngOnInit(): void {
    // this.showdata();
    this.dateForm = this.formbuilder.group({
      startdate: ['', [Validators.required]],
      enddate: ['', [Validators.required]],
    });
  }
  onSubmit() {
    const date = this.dateForm.value;
    this.report.getDateData1(date).subscribe((res: any) => {
      console.log(res);
      this.details = res;
    });
  }

  // showdata(){
  //   this.report.showdata().subscribe((res: any) => {
  //     this.emp = res;
  //     console.log(this.emp)
  //   })
  // }
  // searchdata(){
  //   this.report.searchdata(this.model).subscribe((res : any) => {
  //     this.emp = res;
  //     console.log(this.emp)
  //   })
  // }
}
