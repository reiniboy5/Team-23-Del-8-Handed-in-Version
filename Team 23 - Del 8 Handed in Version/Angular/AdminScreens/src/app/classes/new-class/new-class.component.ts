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
import { ArtClass } from 'src/app/model/ArtClasses/art-class';
import { ArtClassType } from 'src/app/model/ArtClasses/art-class-type';
import { ClassTeacher } from 'src/app/model/ArtClasses/class-teacher';
import { Organisation } from 'src/app/model/Exhibitions/organisation';
import { Venue } from 'src/app/model/Exhibitions/venue';
import { ArtClassService } from 'src/app/shared/ArtClasses/art-class.service';

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.scss'],
})
export class NewClassComponent implements OnInit {
  artClassTypeList: ArtClassType[];
  venueList: Venue[];
  teachersList: ClassTeacher[];
  organisationList: Organisation[];

  startDate: Date;
  endDate: Date;

  base64: string = '';
  fileSelected?: Blob;
  imageUrl?: string;

  public ArtClass: FormControl = new FormControl();
  artClassForm: FormGroup;

  validation_message = {
    artClassName: [
      { type: 'required', message: 'Please provide an Art Class Name' },
      { type: 'minlength', message: 'Must be more than 2 characters' },
      { type: 'maxlength', message: 'Cannot be more than 50 characters' },
    ],
    artClassDescription: [
      {
        type: 'required',
        message: 'Please provide a Description for the Art Class',
      },
      { type: 'minlength', message: 'Must be more than 2 characters' },
      { type: 'maxlength', message: 'Cannot be more than 250 characters' },
    ],
    artClassStartDateTime: [
      { type: 'required', message: 'Please provide an Start Date' },
    ],
    artClassEndDateTime: [
      { type: 'required', message: 'Please provide an End Date' },
    ],
    artClassImage: [
      { type: 'required', message: 'Please provide an Art Class Image' },
    ],
    classLimit: [
      { type: 'required', message: 'Please provide a Class limit' },
      { type: 'min', message: 'Must have more than 3 students per class' },
      { type: 'max', message: 'Cannot have more than 14 students per class' },
    ],
    refundDayLimit: [
      { type: 'required', message: 'Please provide a refund day limit' },
      { type: 'min', message: 'Refund limit must be more than 6 days' },
      { type: 'max', message: 'Cannot be more than 16 days' },
    ],
    classPrice: [
      { type: 'required', message: 'Please provide a Price' },
      { type: 'min', message: 'Please provide a price above 1' },
    ],
    artClassTypeID: [{ type: 'min', message: 'Please select a class type' }],
    classTeacherID: [{ type: 'min', message: 'Please select a Teacher' }],
    organisationID: [{ type: 'min', message: 'Please select an organisation' }],
    venueID: [{ type: 'min', message: 'Please select an Venue' }],
  };

  constructor(
    private route: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public artClassService: ArtClassService,
    private formBuilder: FormBuilder
  ) {
    // this.artClassForm = new FormGroup({
    //   artClassID: new FormControl(0),
    //   artClassName: new FormControl(''),
    //   artClassDescription: new FormControl(''),
    //   artClassStartDateTime: new FormControl(''),
    //   artClassEndDateTime: new FormControl(''),
    //   artClassImage: new FormControl(''),
    //   classLimit: new FormControl(0),
    //   refundDayLimit: new FormControl(0),
    //   classPrice: new FormControl(0),
    //   artClassTypeID: new FormControl(0),
    //   classTeacherID: new FormControl(0),
    //   organisationID: new FormControl(0),
    //   venueID: new FormControl(0)
    // });
  }

  ngOnInit(): void {
    this.artClassForm = this.formBuilder.group({
      artClassID: [0],
      artClassName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ]),
      ],
      artClassDescription: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ]),
      ],
      artClassStartDateTime: ['', Validators.required],
      artClassEndDateTime: ['', Validators.required],
      artClassImage: ['', Validators.required],
      classLimit: [
        0,
        Validators.compose([
          Validators.required,
          Validators.min(4),
          Validators.max(14),
        ]),
      ],
      refundDayLimit: [
        0,
        Validators.compose([
          Validators.required,
          Validators.min(7),
          Validators.max(14),
        ]),
      ],
      classPrice: [
        0,
        Validators.compose([Validators.required, Validators.min(1)]),
      ],
      artClassTypeID: [0, Validators.min(1)],
      classTeacherID: [0, Validators.min(1)],
      organisationID: [0, Validators.min(1)],
      venueID: [0, Validators.min(1)],
    });
    this.getVenue();
    this.getArtClassTypes();
    this.getClassTeachers();
    this.getOrganization();
  }

  getClassTeachers() {
    this.artClassService.getClassTeacher().subscribe((res) => {
      this.teachersList = res as ClassTeacher[];
    });
  }

  getArtClassTypes() {
    this.artClassService.getArtClassType().subscribe((res) => {
      this.artClassTypeList = res as ArtClassType[];
    });
  }

  getVenue() {
    this.artClassService.getVenue().subscribe((res) => {
      this.venueList = res as Venue[];
    });
  }

  getOrganization() {
    this.artClassService.getOrganisation().subscribe((res) => {
      this.organisationList = res as Organisation[];
    });
  }

  addClass(classAnnounceModal) {
    this.modalService.open(classAnnounceModal, { centered: true });
  }

  onSelectNewFile(files: FileList) {
    this.fileSelected = files[0];
    this.imageUrl = window.URL.createObjectURL(this.fileSelected);

    let reader = new FileReader();
    reader.readAsDataURL(this.fileSelected as Blob);
    reader.onloadend = () => {
      this.base64 = reader.result as string;
      this.artClassForm.patchValue({
        artClassImage: this.base64,
      });
      //this.service.driverData.driverImage = this.base64;
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.startDate = this.artClassForm.get('artClassStartDateTime').value;
    this.endDate = this.artClassForm.get('artClassEndDateTime').value;

    if (this.startDate > this.endDate) {
      this.toastr.info('Check Dates', 'Info');
    } else if (this.startDate === this.endDate) {
      this.toastr.info('Dates cannot be equal to each other', 'Info');
    } else if (this.endDate > this.startDate) {
      this.artClassService.postArtClass(this.artClassForm.value).subscribe(
        (res) => {
          this.route.navigate(['/classes']);
          this.toastr.success('Class Successfully created', 'Success');
          //this.toastr.info('Could Not Create New Art Class', 'Info')
        },
        (error) => {
          this.toastr.info('Art Class Could not be added', 'Info');
        }
      );
    }
  }

  // refreshForm(form: NgForm){
  //   form.form.reset();
  //   this.artClassService.artClassData = new ArtClass();
  // }

  confirmClass() {
    this.artClassService.postAnnouncement();
    this.route.navigate(['/classes']);
    this.modalService.dismissAll();
    this.toastr.success('Class Successfully created', 'Success');
    //this.toastr.info('Could Not Create New Art Class', 'Info')
  }

  onCancel(cancelModal) {
    this.modalService.open(cancelModal, { centered: true });
  }

  confirmCancel(cancelModal) {
    this.route.navigate(['/classes']);
    this.modalService.dismissAll(cancelModal);
    // this.toastr.success('Exhibition created Successfully', 'Success')
  }
}
