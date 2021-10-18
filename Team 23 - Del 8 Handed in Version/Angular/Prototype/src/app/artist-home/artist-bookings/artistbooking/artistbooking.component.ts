import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-artistbooking',
  templateUrl: './artistbooking.component.html',
  styleUrls: ['./artistbooking.component.scss']
})
export class ArtistbookingComponent implements OnInit {

  constructor(private route: Router, private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onCancelBooking(cancelBookingModal) {
    this.modalService.open(cancelBookingModal, { centered: true });

  }

  confirmCancel(cancelBookingModal){
    // this.route.navigate(['/home/art-classes']);
    this.modalService.dismissAll(cancelBookingModal);
    this.toastr.success('Cancellation Successful', 'Success')
    this.toastr.error('Could Not Cancel Booking', 'Error')
  }

  onRequestRefund(requestRefundModal) {
    this.modalService.open(requestRefundModal, { centered: true });

  }

  confirmRefund(requestRefundModal){
    // this.route.navigate(['/home/art-classes']);
    this.modalService.dismissAll(requestRefundModal);
    this.toastr.success('Request Successful', 'Success')
    this.toastr.error('Cannot Make Request', 'Error')

  }

}