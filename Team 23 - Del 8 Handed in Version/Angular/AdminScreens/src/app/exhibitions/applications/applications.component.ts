import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApplicationStatus } from 'src/app/model/Exhibitions/application-status';
import { Exhibition } from 'src/app/model/Exhibitions/exhibition';
import { ExhibitionApplication } from 'src/app/model/Exhibitions/exhibition-application';
import { User } from 'src/app/model/Users/user';
import { ExhibitionService } from 'src/app/shared/Exhibitions/exhibition.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {
  application: ExhibitionApplication;
  applications: ExhibitionApplication[];
  exhibitionID: any;
  exhibitionApplicationList: ExhibitionApplication[];
  constructor(
    private toastr: ToastrService,
    private route: Router,
    private modalService: NgbModal,
    public exhibitionService: ExhibitionService,
    private httpService: HttpClient
  ) {}

  ngOnInit(): void {
    this.resetObject();
    // this.exhibitionService.getApplications();
    this.exhibitionService.getApplication2().subscribe((res) => {
      this.applications = res as ExhibitionApplication[];
      console.log(this.applications);
      this.exhibitionID = JSON.parse(localStorage.getItem('exhibitionID'));
      this.exhibitionApplicationList = this.applications.filter(
        (app) => app.exhibition.exhibitionID === this.exhibitionID
      );
      console.log(this.exhibitionApplicationList);
    });
  }

  resetObject() {
    this.application = {
      exhibitionApplicationID: 0,
      exhibitionApplicationImage1: '',
      exhibitionApplicationImage2: '',
      exhibitionApplicationImage3: '',
      applicationDescription: '',
      exhibition: new Exhibition(),
      applicationStatus: new ApplicationStatus(),
      user: new User(),
    };
  }

  acceptApplication() {
    this.httpService
      .get(
        'https://localhost:44353/api/ExhibitionApplication/acceptapplication/' +
          parseInt(localStorage['exhibitionApplicationID'])
      )
      .subscribe((res) => {
        console.log('Status has been changed to Ready for Delivery!');
      });
  }

  declineApplication() {
    this.httpService
      .get(
        'https://localhost:44353/api/ExhibitionApplication/declineapplication/' +
          parseInt(localStorage['exhibitionApplicationID'])
      )
      .subscribe((res) => {
        console.log('Status has been changed to Ready for Delivery!');
      });
  }

  storeID(id) {
    localStorage['exhibitionApplicationID'] = id;
  }

  onAccept(acceptModal) {
    this.modalService.open(acceptModal, { centered: true });
  }
  onDecline(declineModal) {
    this.modalService.open(declineModal, { centered: true });
  }

  confirmAccept(acceptModal) {
    this.acceptApplication();
    this.modalService.dismissAll(acceptModal);
    this.toastr.success('Application Accepted', 'Success');
    // this.toastr.success('Report Generated Successfully', 'Succeess');
  }

  confirmDecline(declineModal) {
    this.declineApplication();
    this.modalService.dismissAll(declineModal);
    this.toastr.error('Application Declined', 'Declined');
  }
}
