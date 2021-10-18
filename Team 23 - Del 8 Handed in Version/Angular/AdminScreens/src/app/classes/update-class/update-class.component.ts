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
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.scss'],
})
export class UpdateClassComponent implements OnInit {
  artClassTypeList: ArtClassType[];
  venueList: Venue[];
  teachersList: ClassTeacher[];
  organisationList: Organisation[];

  base64: string = this.artClassService.selectedArtClass.artClassImage;
  fileSelected?: Blob;
  imageUrl?: string;

  startDate: Date;
  endDate: Date;

  artClass: ArtClass;
  public ArtClass: FormControl = new FormControl();
  artClassForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public artClassService: ArtClassService
  ) {
    // this.artClassForm = new FormGroup({
    //   artClassID: new FormControl(this.artClassService.selectedArtClass.artClassID),
    //   artClassName: new FormControl(this.artClassService.selectedArtClass.artClassName),
    //   artClassDescription: new FormControl(this.artClassService.selectedArtClass.artClassDescription),
    //   artClassStartDateTime: new FormControl(this.artClassService.selectedArtClass.artClassStartDateTime),
    //   artClassEndDateTime: new FormControl(this.artClassService.selectedArtClass.artClassEndDateTime),
    //   artClassImage: new FormControl(this.artClassService.selectedArtClass.artClassImage),
    //   classLimit: new FormControl(this.artClassService.selectedArtClass.classLimit),
    //   refundDayLimit: new FormControl(this.artClassService.selectedArtClass.refundDayLimit),
    //   classPrice: new FormControl(this.artClassService.selectedArtClass.classPrice),
    //   artClassTypeID: new FormControl(this.artClassService.selectedArtClass.artClassType.artClassTypeID),
    //   classTeacherID: new FormControl(this.artClassService.selectedArtClass.classTeacher.classTeacherID),
    //   organisationID: new FormControl(this.artClassService.selectedArtClass.organisation.organisationID),
    //   venueID: new FormControl(this.artClassService.selectedArtClass.venue.venueID)
    // });
  }

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
    classPrice: [{ type: 'required', message: 'Please provide a Price' }],
    artClassTypeID: [{ type: 'min', message: 'Please select a class type' }],
    classTeacherID: [{ type: 'min', message: 'Please select a Teacher' }],
    organisationID: [{ type: 'min', message: 'Please select an organisation' }],
    venueID: [{ type: 'min', message: 'Please select an Venue' }],
  };

  ngOnInit(): void {
    this.getVenue();
    this.getArtClassTypes();
    this.getClassTeachers();
    this.getOrganization();

    this.artClassForm = this.formBuilder.group({
      artClassID: [this.artClassService.selectedArtClass.artClassID],
      artClassName: [
        this.artClassService.selectedArtClass.artClassName,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ]),
      ],
      artClassDescription: [
        this.artClassService.selectedArtClass.artClassDescription,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ]),
      ],
      artClassStartDateTime: [
        this.artClassService.selectedArtClass.artClassStartDateTime,
        Validators.required,
      ],
      artClassEndDateTime: [
        this.artClassService.selectedArtClass.artClassEndDateTime,
        Validators.required,
      ],
      artClassImage: [
        this.artClassService.selectedArtClass.artClassImage,
        Validators.required,
      ],
      classLimit: [
        this.artClassService.selectedArtClass.classLimit,
        Validators.compose([
          Validators.required,
          Validators.min(4),
          Validators.max(14),
        ]),
      ],
      refundDayLimit: [
        this.artClassService.selectedArtClass.refundDayLimit,
        Validators.compose([
          Validators.required,
          Validators.min(4),
          Validators.max(14),
        ]),
      ],
      classPrice: [
        this.artClassService.selectedArtClass.classPrice,
        Validators.required,
      ],
      artClassTypeID: [
        this.artClassService.selectedArtClass.artClassType.artClassTypeID,
        Validators.min(1),
      ],
      classTeacherID: [
        this.artClassService.selectedArtClass.classTeacher.classTeacherID,
        Validators.min(1),
      ],
      organisationID: [
        this.artClassService.selectedArtClass.organisation.organisationID,
        Validators.min(1),
      ],
      venueID: [
        this.artClassService.selectedArtClass.venue.venueID,
        Validators.min(1),
      ],
    });
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

  updateClass(updateClassModal) {
    this.modalService.open(updateClassModal, { centered: true });
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

  onSubmit() {
    this.startDate = this.artClassForm.get('artClassStartDateTime').value;
    this.endDate = this.artClassForm.get('artClassEndDateTime').value;

    if (this.startDate > this.endDate) {
      this.toastr.info('Check Dates', 'Info');
    } else if (this.startDate === this.endDate) {
      this.toastr.info('Dates cannot be equal to each other', 'Info');
    } else if (this.endDate > this.startDate) {
      this.artClassService.putArtClass(this.artClassForm.value).subscribe(
        (res) => {
          this.artClassService.getArtClass();
          this.route.navigate(['/classes']);
          this.modalService.dismissAll();
          this.toastr.success('Art Class updated Successfully', 'Success');
          // this.toastr.info('Could Not Update Art Class', 'Info')
        },
        (error) => {
          this.toastr.info('Could not update Class', 'Info');
        }
      );
    }
  }

  // refreshForm(form: NgForm) {
  //   form.form.reset();
  //   this.artClassService.artClassData = new ArtClass();
  // }

  confirmUpdateClass() {
    this.route.navigate(['/classes']);
    this.modalService.dismissAll();
    this.toastr.success('Art Class updated Successfully', 'Success');
    // this.toastr.info('Could Not Update Art Class', 'Info')
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
