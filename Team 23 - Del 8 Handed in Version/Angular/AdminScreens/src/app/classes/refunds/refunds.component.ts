import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/model/Payments/payment';
import { Refund } from 'src/app/model/Payments/refund';
import { ArtClassService } from 'src/app/shared/ArtClasses/art-class.service';

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.scss'],
})
export class RefundsComponent implements OnInit {
  refundList: Refund[];
  paymentList: Payment[];

  constructor(
    private route: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public servive: ArtClassService,
    private httpService: HttpClient
  ) {}

  ngOnInit(): void {
    this.getRefunds();
    this.getPayments();
  }

  getPayments() {
    this.servive.getPayments().subscribe((res) => {
      this.paymentList = res as Payment[];
    });
  }

  getRefunds() {
    this.servive.getRefunds().subscribe((res) => {
      this.refundList = res as Refund[];
    });
  }

  acceptRefund() {
    this.httpService
      .get(
        'https://localhost:44353/api/Refund/acceptrefund/' +
          parseInt(localStorage['refundID'])
      )
      .subscribe((res) => {
        console.log('Status has been changed to Ready for Delivery!');
      });
  }

  declineRefund() {
    this.httpService
      .get(
        'https://localhost:44353/api/Refund/declinerefund/' +
          parseInt(localStorage['refundID'])
      )
      .subscribe((res) => {
        console.log('Status has been changed to Ready for Delivery!');
      });
  }
  onApprove(approveModal) {
    this.modalService.open(approveModal, { centered: true });
  }

  storeID(id) {
    localStorage['refundID'] = id;
  }

  confirmApprove(approveModal) {
    this.acceptRefund();
    this.ngOnInit();
    // this.route.navigate(['/d']);
    this.modalService.dismissAll(approveModal);
    this.toastr.success('Refund Approved', 'Success');
    // this.toastr.info('Could not Approve Refund', 'Info');
  }

  onDecline(declineModal) {
    this.modalService.open(declineModal, { centered: true });
  }

  confirmDecline(declineModal) {
    this.declineRefund();
    // this.route.navigate(['/delete-user']);
    this.modalService.dismissAll(declineModal);
    this.toastr.success('Refund Declined', 'Success');
    // this.toastr.info('Could not decline Refund', 'Info');
    this.ngOnInit();
  }
}
