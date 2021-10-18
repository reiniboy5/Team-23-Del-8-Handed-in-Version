import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../../../data.service';
import { Booking } from '../../../model/Bookings/booking';
import { Payment } from '../../../model/Payments/payment';
import { Refund } from '../../../model/Payments/refund';

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.scss'],
})
export class RefundsComponent implements OnInit {
  listRefunds: string[];
  loggedInUser: any;
  listPayments: any;
  userBookingsPayments: any;
  listBookingID: string[];
  listBookings: Booking[];
  refundID: [];
  listUserPayments: Payment[];
  refunds: any;
  listUserRefunds: string[];

  constructor(
    private route: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public data: DataService,
    private formBuilder: FormBuilder,
    private fb: FormBuilder,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.data.getAllPayments().then((result) => {
      console.log(result);

      this.listPayments = result;

      this.loggedInUser = JSON.parse(localStorage.getItem('LoggedinUser'));

      this.listBookings = JSON.parse(localStorage.getItem('UserBookings'));

      console.log(this.listBookings);

      for (let i = 0; i < this.listBookings.length; i++) {
        var id = this.listBookings[i].bookingID;

        this.listBookingID = [];

        this.listBookingID.push(id);
      }

      for (let i = 0; i < this.listBookingID.length; i++) {
        this.listUserPayments = this.listPayments.filter(
          (paymn: Payment) => paymn.bookingID === this.listBookingID[i]
        );

        console.log('CHECK', this.listUserPayments);

        for (let j = 0; j < this.listUserPayments.length; j++) {
          var paymmentRefundID = this.listUserPayments[j].refundID;

          this.listRefunds = [];

          this.listRefunds.push(paymmentRefundID);
        }

        console.log('REFUNDS', this.listRefunds);
      }

      console.log(this.listBookingID);

      /*
      this.listUserBookings  =this.listBookings.filter((bking: Booking) => bking.userID === this.loggedInUser.userID);

      console.log(this.listUserBookings );
    */
    });

    this.data.getAllRefunds().then((result) => {
      console.log('ReaLLL', result);

      this.refunds = result;

      console.log('REFUNDIDS', this.listRefunds);

      if (this.listRefunds !== undefined) {
        for (let i = 0; i < this.listRefunds.length; i++) {
          this.listUserRefunds = [];

          this.listUserRefunds = this.refunds.filter(
            (refnd: Refund) => refnd.refundID === this.listRefunds[i]
          );
        }
      }
      console.log(this.listUserRefunds);
    });
  }
}
