import { DatePipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs/operators';
import { DataService } from 'src/app/data.service';
import { Booking } from 'src/app/model/Bookings/booking';
import { ExpiryDateValidator } from 'src/confirmed.validators';
import { CustomValidationsService } from 'src/custom-validations.service';
import { User } from '../../../model/user.model';
import { RefundsComponent } from '../refunds/refunds.component';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
  listBookings: [];

  listUserBookings: Booking[];

  loggedInUser: any;
  timestamp: any;
  booking: Booking;
  formSubmitted = false;
  selectedBooking: any;
  public Payment: FormControl = new FormControl();
  paymentForm: FormGroup;
  public Feeback: FormControl = new FormControl();
  ratingsForm: FormGroup;
  datestripped: any;
  PaymentModal: any;

  refund: RefundsComponent;

  error_messages = {
    CardNumber: [
      { type: 'required', message: 'Card number is required.' },
      { type: 'minlength', message: 'Card Number is too short' },
      { type: 'maxlength', message: 'Card Number length.' },
    ],
    Code: [
      { type: 'required', message: 'CVV is required' },
      { type: 'minlength', message: 'CVV is too short' },
      { type: 'maxlength', message: 'CVV Number length.' },
    ],

    ExpiryDate: [
      { type: 'required', message: 'Expiry date is required.' },
      { type: 'minlength', message: 'Expiry date is too short' },
      { type: 'maxlength', message: 'Expiry date length.' },
      { type: 'min', message: 'Card has Expired.' },
    ],
    TeacherRating: [
      { type: 'required', message: 'Teacher Rating is required.' },
      { type: 'min', message: 'Rating must be between 1 and 10.' },
      { type: 'min', message: 'Rating must be between 1 and 10.' },
    ],
    DifficultyRating: [
      { type: 'required', message: 'Difficulty Rating is required.' },
      { type: 'min', message: 'Rating must be between 1 and 10.' },
      { type: 'min', message: 'Rating must be between 1 and 10.' },
    ],
    OverallRating: [
      { type: 'required', message: 'Overall Rating is required.' },
      { type: 'min', message: 'Rating must be between 1 and 10.' },
      { type: 'min', message: 'Rating must be between 1 and 10.' },
    ],

    CardHolderName: [
      { type: 'required', message: 'Card holder name is required.' },
    ],
  };

  errorMessage: any;
  makeRatingModal: any;

  constructor(
    private route: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public data: DataService,
    private formBuilder: FormBuilder,
    private fb: FormBuilder,
    public datepipe: DatePipe
  ) {
    this.paymentForm = new FormGroup({
      PaymentID: new FormControl(''),
      Amount: new FormControl(''),
      PaymentDateTime: new FormControl(''),
      PaymentType: new FormControl(''),
      PaymentStatus: new FormControl(''),
      BookingID: new FormControl(''),
      CardNumber: new FormControl(''),
      Code: new FormControl(''),
      ExpiryDate: new FormControl(''),
      CardHolderName: new FormControl(''),
    });

    this.ratingsForm = new FormGroup({
      FeedbackID: new FormControl(''),
      FeedbackComment: new FormControl(''),
      TeacherRating: new FormControl(''),
      DifficultyRating: new FormControl(''),
      OverallRating: new FormControl(''),
      UserID: new FormControl(''),
      ArtClassID: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.data.getAllBookings().then((result) => {
      console.log(result);

      this.listBookings = result;

      this.loggedInUser = JSON.parse(localStorage.getItem('LoggedinUser'));

      console.log(this.loggedInUser);

      this.listUserBookings = this.listBookings.filter(
        (bking: Booking) => bking.userID === this.loggedInUser.userID
      );
      localStorage.setItem(
        'UserBookings',
        JSON.stringify(this.listUserBookings)
      );

      console.log(this.listUserBookings);
    });

    this.timestamp = new Date();

    let paymentmmyy = this.datepipe.transform(this.timestamp, 'dd/MM/yyyy');

    this.datestripped =
      paymentmmyy.substring(3, 5) + paymentmmyy.substring(8, 10);

    var minminthyear = this.datestripped;

    console.log(minminthyear);

    this.paymentForm = this.formBuilder.group({
      PaymentID: [''],
      Amount: [''],
      PaymentDateTime: [''],
      PaymentType: [''],
      PaymentStatus: [''],
      BookingID: [''],
      CardNumber: ['', [Validators.required, Validators.minLength(16)]],
      Code: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
      ],
      ExpiryDate: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          CustomValidationsService.min(minminthyear),
        ],
      ],
      CardHolderName: ['', Validators.required],
    });

    this.ratingsForm = this.formBuilder.group({
      FeedbackID: [''],
      FeedbackComment: [''],
      TeacherRating: [
        '',
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      DifficultyRating: [
        '',
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      OverallRating: [
        '',
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      UserID: [''],
      ArtClassID: [''],
    });
  }

  onHint(hintModal) {
    this.modalService.open(hintModal, { centered: true });
  }

  onCancelBooking(cancelBookingModal) {
    this.modalService.open(cancelBookingModal, { centered: true });
  }

  confirmCancel(id: number) {
    // this.route.navigate(['/home/art-classes']);
    this.data.cancelBooking(id).subscribe(
      (res) => {
        this.modalService.dismissAll();
        this.toastr.success('Cancellation Successful', 'Success');
        this.ngOnInit();
      },
      (error) => {
        this.toastr.error('Could Not Cancel Booking', 'Error');
      }
    );
  }

  onRequestRefund(requestRefundModal, selectedbooking) {
    this.selectedBooking = selectedbooking;

    this.modalService.open(requestRefundModal, { centered: true });
  }

  makePayment(makePamentModal, selectedbooking) {
    this.selectedBooking = selectedbooking;

    this.PaymentModal = makePamentModal;

    console.log('SelectedBooking', this.selectedBooking);

    this.modalService.open(makePamentModal, { centered: true });
  }
  confirmRefund(requestRefundModal) {
    this.data
      .requestRefund(this.selectedBooking.bookingID)
      .then((success) => {
        this.toastr.success('Refund requested successfully', 'Success');

        this.modalService.dismissAll(requestRefundModal);

        this.ngOnInit();

        this.formSubmitted = false;
      })
      .catch((error) => {
        console.log(error);

        this.modalService.dismissAll(requestRefundModal);

        this.toastr.error(error.error, 'Error', {
          disableTimeOut: true,
          tapToDismiss: false,
          closeButton: true,
          positionClass: 'toast-top-full-width',
          enableHtml: true,
        });

        this.ngOnInit();
        console.log(error);
      });
  }

  onSubmitFeedback(feedbackModal, selectedbooking) {
    this.selectedBooking = selectedbooking;

    localStorage.setItem(
      'SelectedBooking',
      JSON.stringify(this.selectedBooking)
    );

    console.log(this.selectedBooking);

    this.modalService.open(feedbackModal, { centered: true });
  }

  onSubmitFeedbackConfirm(feedbackModal, event) {
    event.preventDefault();
    this.modalService.open(feedbackModal, { centered: true });
  }

  confirmFeedback(ratingsModal, event) {
    console.log(this.ratingsForm.value);

    this.selectedBooking = JSON.parse(localStorage.getItem('SelectedBooking'));

    console.log(this.selectedBooking);

    this.makeRatingModal = ratingsModal;

    this.formSubmitted = true;

    this.ratingsForm.get('UserID').setValue(this.selectedBooking.userID);
    this.ratingsForm
      .get('ArtClassID')
      .setValue(this.selectedBooking.artClassID);

    console.log(this.ratingsForm.value);

    if (this.ratingsForm.invalid) {
      return;
    } else {
      this.data
        .addFeedback(this.ratingsForm.value)
        .then((success) => {
          this.toastr.success('Feedback Successfully submitted', 'Success', {
            disableTimeOut: true,
            tapToDismiss: false,
            closeButton: true,
            positionClass: 'toast-top-full-width',
          });

          this.modalService.dismissAll(this.makeRatingModal);

          this.ngOnInit();

          this.formSubmitted = false;
        })
        .catch((error) => {
          console.log(error);
          this.modalService.dismissAll(this.makeRatingModal);

          this.toastr.error(error.error, 'Error', {
            disableTimeOut: true,
            tapToDismiss: false,
            closeButton: true,
            positionClass: 'toast-top-full-width',
            enableHtml: true,
          });

          this.ngOnInit();
        });
    }

    this.route.navigate(['/home/my-bookings/bookings']);

    this.modalService.dismissAll(ratingsModal);
  }

  onSubmit(event) {
    this.formSubmitted = true;

    event.preventDefault();
    console.log(this.paymentForm.value);

    this.timestamp = new Date();

    let latest_date_time = this.datepipe.transform(
      this.timestamp,
      'yyyy-MM-ddTHH:mm:ss'
    );

    this.paymentForm.get('BookingID').setValue(this.selectedBooking.bookingID);
    this.paymentForm
      .get('PaymentDateTime')
      .setValue(latest_date_time + '.098Z');
    this.paymentForm.get('PaymentType').setValue('Credit Card');
    this.paymentForm
      .get('Amount')
      .setValue(this.selectedBooking.artClass.classPrice);

    console.log(this.paymentForm.value);

    if (this.paymentForm.invalid) {
      return;
    } else {
      console.log(this.paymentForm.value);

      this.data
        .addPayment(this.paymentForm.value)
        .then((success) => {
          let currentUrl = this.route.url;

          this.toastr.success('Payment was successful', 'Success', {
            disableTimeOut: true,
            tapToDismiss: false,
            closeButton: true,
            positionClass: 'toast-top-full-width',
          });

          this.modalService.dismissAll(this.PaymentModal);

          this.ngOnInit();

          this.formSubmitted = false;
        })
        .catch((error) => {
          console.log(error);
          this.modalService.dismissAll(this.PaymentModal);

          this.toastr.error(error.error, 'Error', {
            disableTimeOut: true,
            tapToDismiss: false,
            closeButton: true,
            positionClass: 'toast-top-full-width',
            enableHtml: true,
          });
          let currentUrl = this.route.url;
          this.ngOnInit();
          console.log(error);
        });
    }
  }
}
