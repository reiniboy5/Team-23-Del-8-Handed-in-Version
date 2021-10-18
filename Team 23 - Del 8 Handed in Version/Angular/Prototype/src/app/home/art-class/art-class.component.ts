import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';
import { ArtClass } from 'src/app/model/ArtClasses/art-class';
import { ArtClassType } from 'src/app/model/ArtClasses/art-class-type';
import { ClassTeacher } from 'src/app/model/ArtClasses/class-teacher';
import { Organisation } from 'src/app/model/Exhibitions/organisation';
import { Venue } from 'src/app/model/Exhibitions/venue';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-art-class',
  templateUrl: './art-class.component.html',
  styleUrls: ['./art-class.component.scss']
})
export class ArtClassComponent implements OnInit {

  artClass: any;

  teacher: any;
  artVenue: any;
  artClassType: any;
  artOrganisation: any;

  classTeacher: ClassTeacher;

  classType: ArtClassType;

  BookingsModal: any;

  venue: Venue;

  organisation: Organisation;

  listartclass: Array<ArtClass> = [];

  user: any;

  bookingForm: FormGroup;

  formSubmitted: boolean;
  timestamp: Date;

  constructor(public data: DataService, private route: Router
    , private modalService: NgbModal, private toastr: ToastrService
    , private formBuilder: FormBuilder,public datepipe: DatePipe) { }






  ngOnInit(): void {



    this.artClass = this.data.sharedData;


    this.listartclass.push(this.artClass);

    this.user = JSON.parse(localStorage.getItem('LoggedinUser'));


    this.bookingForm = this.formBuilder.group({
      bookingID: [''],
      bookingDateTime: [''],
      bookingNotificationID: [''],
      bookingStatus: [''],
      artClassID: [''],
      userID: ['']
    });


  }




  onBooking(bookModal) {

    this.BookingsModal = bookModal;

    this.modalService.open(bookModal, { centered: true });
  }

  submitBooking() {

    this.timestamp = new Date();  

    let latest_date_time =this.datepipe.transform(this.timestamp, 'yyyy-MM-ddTHH:mm:ss');

    this.bookingForm.get('bookingID').setValue(0)  ;
    this.bookingForm.get('bookingDateTime').setValue(latest_date_time +'.000Z')  ;
    this.bookingForm.get('bookingNotificationID').setValue(1)  ;
    this.bookingForm.get('bookingStatus').setValue('Pending Payment')  ;
    this.bookingForm.get('artClassID').setValue(this.artClass.artClassID)  ;
    this.bookingForm.get('userID').setValue(this.user.userID)  ;

    if (this.bookingForm.invalid) {
      return;
    }
    else {

      console.log(this.bookingForm.value);

    this.data.addBooking(this.bookingForm.value).then(success => {

    
        this.toastr.success("Booking Request Sucessfully Sent", 'Success', {
         disableTimeOut: true,
          tapToDismiss: false,
          closeButton: true,
          positionClass: 'toast-top-full-width',

        });
        this.modalService.dismissAll(this.BookingsModal);
        this.route.navigate(['/home/art-classes']),


      this.formSubmitted = false;     


      }).catch(error => {

        console.log(error);
        this.modalService.dismissAll(this.BookingsModal);
        
        this.toastr.error(error.error, 'Error', {
          disableTimeOut: true,
          tapToDismiss: false,
          closeButton: true,
          positionClass: 'toast-top-full-width',
          enableHtml: true

        });
        console.log(error);
      
      });



    }

  }

}
