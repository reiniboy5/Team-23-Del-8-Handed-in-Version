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
import { ClassTeacher } from 'src/app/model/ArtClasses/class-teacher';
import { TeacherType } from 'src/app/model/ArtClasses/teacher-type';
import { TeacherService } from 'src/app/shared/ArtClasses/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss'],
})
export class AddTeacherComponent implements OnInit {
  teacher: ClassTeacher;
  teacherTypeList: TeacherType[];

  formSubmitted = false;
  public ClassTeacher: FormControl = new FormControl();
  teacherForm: FormGroup;

  validation_message = {
    teacherName: [
      { type: 'required', message: 'Please provide an First Name' },
      { type: 'minlength', message: 'Must be more than 2 characters' },
    ],
    teacherSurname: [
      { type: 'required', message: 'Please provide a Last Name' },
      { type: 'minlength', message: 'Must be more than 2 characters' },
    ],
    teacherEmail: [
      { type: 'required', message: 'Please provide an Email' },
      { type: 'pattern', message: 'Please provide a valid Email' },
    ],
    teacherPhoneNumber: [
      { type: 'required', message: 'Please provide a phone number' },
      { type: 'min', message: 'Please provide a valid phone number' },
      { type: 'maxlength', message: 'Please provide a valid phone number' },
    ],
    teacherTypeID: [
      { type: 'min', message: 'Please select a type for teacher' },
    ],
  };
  constructor(
    private route: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public teacherService: TeacherService,
    private formBuilder: FormBuilder
  ) {
    this.teacherForm = new FormGroup({
      classTeacherID: new FormControl(0),
      teacherName: new FormControl(''),
      teacherSurname: new FormControl(''),
      teacherEmail: new FormControl(''),
      teacherPhoneNumber: new FormControl(0),
      teacherTypeID: new FormControl(0),
    });
  }

  ngOnInit(): void {
    this.teacherForm = this.formBuilder.group({
      classTeacherID: [0],
      teacherName: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      teacherSurname: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      teacherEmail: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^[\\w]+(?:\\.[\\w])*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$'
          ),
        ]),
      ],
      teacherPhoneNumber: [
        0,
        Validators.compose([
          Validators.required,
          Validators.min(100000000),
          Validators.maxLength(10),
        ]),
      ],
      teacherTypeID: [0, Validators.min(1)],
    });

    this.getTeacherTypes();
  }

  addTeacher(teacherModal) {
    this.modalService.open(teacherModal, { centered: true });
  }

  getTeacherTypes() {
    this.teacherService.getTeacherType().subscribe((res) => {
      this.teacherTypeList = res as TeacherType[];
    });
  }

  // selectType($event) {
  //   this.teacherTypeList.forEach(type => {
  //     if(type.teacherTypeID == $event){
  //       this.teacher.teacherTypeID = type.teacherTypeID;
  //     }
  //   })
  // }

  onSubmit(event) {
    this.formSubmitted = true;
    event.preventDefault();
    console.log(this.teacherForm.value);
    this.teacherService.postTeacher(this.teacherForm.value).subscribe(
      (success) => {
        this.route.navigate(['/view-teachers']);
        this.toastr.success('Teacher Successfully Added', 'Success');
      },
      (error) => {
        this.toastr.info('Teacher Could not be added', 'Info');
      }
    );
  }

  // onSubmit(event){
  //   this.teacherService.postTeacher().subscribe(res => {
  //    // this.refreshForm();
  //     this.route.navigate(['/view-teachers']);
  //     this.teacherService.getTeachers();

  //   })
  // }

  // refreshForm(form: NgForm) {
  //   form.form.reset();
  //   this.teacherService.teacherData = new ClassTeacher();
  //   this.modalService.dismissAll();
  //   this.toastr.success('Teacher Successfully Added', 'Success')
  // }

  confirmTeacher(teacherModal) {
    this.modalService.dismissAll(teacherModal);
    this.toastr.success('Teacher Successfully added', 'Success');
    this.toastr.info('Could Not Add Teacher', 'Info');
  }

  onCancel(cancelTeacherModal) {
    this.modalService.open(cancelTeacherModal, { centered: true });
  }

  confirmCancel() {
    this.route.navigate(['/view-teachers']);
    this.modalService.dismissAll();
  }
}
