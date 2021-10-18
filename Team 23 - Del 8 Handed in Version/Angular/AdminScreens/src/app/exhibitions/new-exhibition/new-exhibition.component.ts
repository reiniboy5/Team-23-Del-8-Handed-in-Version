import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Exhibition } from 'src/app/model/Exhibitions/exhibition';
import { ExhibitionType } from 'src/app/model/Exhibitions/exhibition-type';
import { Organisation } from 'src/app/model/Exhibitions/organisation';
import { Venue } from 'src/app/model/Exhibitions/venue';
import { ExhibitionService } from 'src/app/shared/Exhibitions/exhibition.service';

@Component({
  selector: 'app-new-exhibition',
  templateUrl: './new-exhibition.component.html',
  styleUrls: ['./new-exhibition.component.scss'],
})
export class NewExhibitionComponent implements OnInit {
  exhibitionTypeList: ExhibitionType[];
  venueList: Venue[];
  organisationList: Organisation[];

  base64: string = '';
  fileSelected?: Blob;
  imageUrl?: string;

  startDate: Date;
  endDate: Date;

  formSubmitted = false;
  notCorrect = false;
  public Exhibition: FormControl = new FormControl();
  exhibitionForm: FormGroup;

  validation_message = {
    exhibitionName: [
      { type: 'required', message: 'Please provide an Exhibition Name' },
      { type: 'minlength', message: 'Must be more than 2 characters' },
      { type: 'maxlength', message: 'Cannot be more than 50 characters' },
    ],
    exhibitionDescription: [
      {
        type: 'required',
        message: 'Please provide a Description for the Exhibition',
      },
      { type: 'minlength', message: 'Must be more than 2 characters' },
      { type: 'maxlength', message: 'Cannot be more than 250 characters' },
    ],
    exhibitionStartDateTime: [
      { type: 'required', message: 'Please provide an Start Date' },
    ],
    exhibitionEndDateTime: [
      { type: 'required', message: 'Please provide an End Date' },
    ],
    exhibitionImage: [
      { type: 'required', message: 'Please provide an Exhibition Image' },
    ],
    exhibitionTypeID: [{ type: 'min', message: 'Please select a type' }],
    organisationID: [{ type: 'min', message: 'Please select an organisation' }],
    venueID: [{ type: 'min', message: 'Please select an Venue' }],
  };

  constructor(
    private route: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public exhibitionService: ExhibitionService,
    private formBuilder: FormBuilder
  ) {
    // this.exhibitionForm = new FormGroup({
    //   exhibitionID: new FormControl(0),
    //   exhibitionName: new FormControl(''),
    //   exhibitionDescription: new FormControl(''),
    //   exhibitionStartDateTime: new FormControl(''),
    //   exhibitionEndDateTime: new FormControl(''),
    //   exhibitionImage: new FormControl(''),
    //   exhibitionTypeID: new FormControl(0),
    //   // scheduleID: new FormControl(0),
    //   organisationID: new FormControl(0),
    //   venueID: new FormControl(0)
    // });
  }

  ngOnInit(): void {
    this.exhibitionForm = this.formBuilder.group({
      exhibitionID: [0],
      exhibitionName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ]),
      ],
      exhibitionDescription: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(250),
        ]),
      ],
      exhibitionStartDateTime: ['', Validators.required],
      exhibitionEndDateTime: ['', Validators.required],
      exhibitionImage: [this.base64, Validators.required],
      exhibitionTypeID: [0, Validators.min(1)],
      // scheduleID: [0],
      organisationID: [0, Validators.min(1)],
      venueID: [0, Validators.min(1)],
    });

    this.getExhibitionType();
    this.getVenue();
    this.getOrganization();
  }

  getExhibitionType() {
    this.exhibitionService.getExhibitionType().subscribe((res) => {
      this.exhibitionTypeList = res as ExhibitionType[];
    });
  }

  getVenue() {
    this.exhibitionService.getVenue().subscribe((res) => {
      this.venueList = res as Venue[];
    });
  }

  getOrganization() {
    this.exhibitionService.getOrganisation().subscribe((res) => {
      this.organisationList = res as Organisation[];
    });
  }

  addAnnouncement(announcementModal) {
    this.modalService.open(announcementModal, { centered: true });
  }

  onSelectNewFile(files: FileList) {
    this.fileSelected = files[0];
    this.imageUrl = window.URL.createObjectURL(this.fileSelected);

    let reader = new FileReader();
    reader.readAsDataURL(this.fileSelected as Blob);
    reader.onloadend = () => {
      this.base64 = reader.result as string;
      this.exhibitionForm.patchValue({
        exhibitionImage: this.base64,
      });
      //this.service.driverData.driverImage = this.base64;
    };
  }

  // checkDates(formGroup: FormGroup) {
  //   const { value: exhibitionStartDateTime = formatDate(new Date(), 'yyyy-MM-dd', 'en_US')} = formGroup.get('exhibitionStartDateTime');
  //   const { value: exhibitionEndDateTime = formatDate(new Date(), 'yyyy-MM-dd', 'en_US') } = formGroup.get('exhibitionEndDateTime');
  //   return exhibitionStartDateTime > exhibitionEndDateTime ? null : { notCorrect: true};
  // }

  onSubmit(event) {
    event.preventDefault();
    this.startDate = this.exhibitionForm.get('exhibitionStartDateTime').value;
    this.endDate = this.exhibitionForm.get('exhibitionEndDateTime').value;

    if (this.startDate > this.endDate) {
      this.toastr.info('Start-Date cannot be set after End-Date', 'Info');
    } else if (this.startDate === this.endDate) {
      this.toastr.info('Dates cannot be equal to each other', 'Info');
    } else if (this.endDate > this.startDate) {
      this.exhibitionService
        .postExhibition(this.exhibitionForm.value)
        .subscribe(
          (res) => {
            this.route.navigate(['/exhibitions']);
            this.modalService.dismissAll();
            this.toastr.success('Exhibition created Successfully', 'Success');
            // this.toastr.info('Could not Create Exhibition', 'Info')
          },
          (error) => {
            this.toastr.info('Exhibition Could not be added', 'Info');
          }
        );
    }
  }

  // refreshForm(form: NgForm){
  //   form.form.reset();
  //   this.exhibitionService.exhibitionData = new Exhibition();
  // }

  confirmAnnouncement(announcementModal) {
    this.route.navigate(['/exhibitions']);
    this.modalService.dismissAll(announcementModal);
    this.toastr.success('Exhibition created Successfully', 'Success');
    this.toastr.info('Could not Create Exhibition', 'Info');
  }

  onCancel(cancelModal) {
    this.modalService.open(cancelModal, { centered: true });
  }

  confirmCancel(cancelModal) {
    this.route.navigate(['/exhibitions']);
    this.modalService.dismissAll(cancelModal);
    // this.toastr.success('Exhibition created Successfully', 'Success')
  }
  onTime() {}
}
