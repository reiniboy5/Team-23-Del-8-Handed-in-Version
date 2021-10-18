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
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.scss'],
})
export class UpdateTeacherComponent implements OnInit {
  teacherTypeList: TeacherType[];

  teacher: ClassTeacher;
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
  s;

  constructor(
    private route: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public teacherService: TeacherService,
    private formBuilder: FormBuilder
  ) {
    this.teacherForm = new FormGroup({
      classTeacherID: new FormControl(
        this.teacherService.selectedTeacher.classTeacherID
      ),
      teacherName: new FormControl(
        this.teacherService.selectedTeacher.teacherName
      ),
      teacherSurname: new FormControl(
        this.teacherService.selectedTeacher.teacherSurname
      ),
      teacherEmail: new FormControl(
        this.teacherService.selectedTeacher.teacherEmail,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^[\\w]+(?:\\.[\\w])*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$'
          ),
        ])
      ),
      teacherPhoneNumber: new FormControl(
        this.teacherService.selectedTeacher.teacherPhoneNumber,
        Validators.compose([
          Validators.required,
          Validators.min(100000000),
          Validators.maxLength(10),
        ])
      ),
      teacherTypeID: new FormControl(
        this.teacherService.selectedTeacher.teacherType.teacherTypeID,
        Validators.min(1)
      ),
    });
  }

  ngOnInit(): void {
    this.teacherForm = this.formBuilder.group({
      classTeacherID: [this.teacherService.selectedTeacher.classTeacherID],
      teacherName: [
        this.teacherService.selectedTeacher.teacherName,
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      teacherSurname: [
        this.teacherService.selectedTeacher.teacherSurname,
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      teacherEmail: [this.teacherService.selectedTeacher.teacherEmail],
      teacherPhoneNumber: [
        this.teacherService.selectedTeacher.teacherPhoneNumber,
      ],
      teacherTypeID: [
        this.teacherService.selectedTeacher.teacherType.teacherTypeID,
      ],
    });

    this.getTeacherTypes();
  }

  getTeacherTypes() {
    this.teacherService.getTeacherType().subscribe((res) => {
      this.teacherTypeList = res as TeacherType[];
    });
  }

  updateTeacher(teacherModal) {
    this.modalService.open(teacherModal, { centered: true });
  }

  onSubmit() {
    this.teacher = this.teacherForm.value;
    console.log(this.teacher);
    this.teacherService.putTeacher(this.teacherForm.value).subscribe(
      (res) => {
        this.teacherService.getTeachers();
        this.toastr.success('Teacher Successfully Updated', 'Success');
        this.route.navigate(['/view-teachers']);
      },
      (error) => {
        this.toastr.info('Could not update teacher', 'Info');
      }
    );
  }

  refreshFrom(form: NgForm) {
    form.form.reset();
    this.teacherService.teacherData = new ClassTeacher();
    this.route.navigate(['/view-teachers']);
    this.modalService.dismissAll();
    this.toastr.success('Teacher Successfully Updated', 'Success');
    // this.toastr.info('Could Not Update Teacher', 'Info')
  }

  // confirmUpdateTeacher(teacherModal){

  // }

  onCancel(cancelTeacherModal) {
    this.modalService.open(cancelTeacherModal, { centered: true });
  }

  confirmCancel(cancelTeacherModal) {
    this.route.navigate(['/view-teachers']);
    this.modalService.dismissAll(cancelTeacherModal);
  }
}
