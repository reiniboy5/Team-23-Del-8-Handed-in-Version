import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ClassTeacher } from 'src/app/model/ArtClasses/class-teacher';
import { TeacherType } from 'src/app/model/ArtClasses/teacher-type';
import { TeacherService } from 'src/app/shared/ArtClasses/teacher.service';

@Component({
  selector: 'app-view-teachers',
  templateUrl: './view-teachers.component.html',
  styleUrls: ['./view-teachers.component.scss'],
})
export class ViewTeachersComponent implements OnInit {
  teacher: ClassTeacher;
  searchValue: string;
  teacherTypeList: TeacherType[];
  constructor(
    private route: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    //this.resetObject();
    this.getTeacherType();
    this.teacherService.getTeachers();
  }

  resetObject() {
    this.teacher = {
      classTeacherID: 0,
      teacherName: '',
      teacherSurname: '',
      teacherEmail: '',
      teacherPhoneNumber: 0,

      teacherType: new TeacherType(),
    };
  }

  getTeacherType() {
    this.teacherService.getTeacherType().subscribe((res) => {
      this.teacherTypeList = res as TeacherType[];
      console.log(this.teacherTypeList);
    });
  }

  onEditTeacher(selectedTeacher: ClassTeacher) {
    this.teacherService.selectedTeacher = selectedTeacher;
  }

  onDeleteTeacher(classAnnounceModal) {
    this.modalService.open(classAnnounceModal, { centered: true });
  }

  confirmDelete(id: number) {
    this.teacherService.deleteTeacher(id).subscribe(
      (res) => {
        this.teacherService.getTeachers();
        this.route.navigate(['/view-teachers']);
        this.modalService.dismissAll();
        this.toastr.success('Class Teacher Successfully deleted', 'Success');
      },
      (err) => {
        this.toastr.info('Cannot Delete Class Teacheris in Use', 'Info');
      }
    );
  }
}
