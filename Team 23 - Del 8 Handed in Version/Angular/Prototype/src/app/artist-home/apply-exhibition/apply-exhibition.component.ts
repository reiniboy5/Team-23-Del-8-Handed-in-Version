import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-apply-exhibition',
  templateUrl: './apply-exhibition.component.html',
  styleUrls: ['./apply-exhibition.component.scss']
})
export class ApplyExhibitionComponent implements OnInit {

  constructor(private route: Router, private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onApply(applyExhibitionModal) {
    this.modalService.open(applyExhibitionModal, { centered: true });
  }

  submitApplication (applyExhibitionModal) {
    this.route.navigate(['/artist-home/artist-exhibitions']);
    this.modalService.dismissAll(applyExhibitionModal);
    this.toastr.success('Application Successful', 'Success')
    this.toastr.error('Application Unsuccessful', 'Error')

  }

  cancelApplication(cancelApplicationModal) {
    this.modalService.open(cancelApplicationModal, { centered: true });
  }

  yesCancel (cancelApplicationModal) {
    this.route.navigate(['/artist-home/artist-exhibition']);
    this.modalService.dismissAll(cancelApplicationModal);
    // this.toastr.warning('Application Successful', 'Success')
    // this.toastr.error('Application Unsuccessful', 'Error')

  }


}