import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {


  constructor(private route: Router, private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  cancelApplication(cancelApplicationModal) {
    this.modalService.open(cancelApplicationModal, { centered: true });

  }

  confirmCancel(cancelApplicationModal){
    // this.route.navigate(['/home/art-classes']);
    this.modalService.dismissAll(cancelApplicationModal);
    this.toastr.success('Application Successfully Cancelled', 'Success')
    this.toastr.error('Could not Cancel', 'Error')

  }


}
