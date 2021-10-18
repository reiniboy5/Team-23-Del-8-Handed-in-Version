import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Announcement } from '../model/Users/announcement';
import { AnnouncementService } from '../shared/Announcement/announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent implements OnInit {
  announceForm: FormGroup;
  constructor(
    public announcementService: AnnouncementService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {
    // this.announceForm = new FormGroup({
    //   announcementID: new FormControl(''),
    //   announcementTitle: new FormControl(''),
    //   announcementDescription: new FormControl(''),
    //   announceStamp: new FormControl(''),
    // });
  }

  error_messages = {
    announcementTitle: [
      { type: 'required', message: 'Please Provide a Title' },
    ],

    announcementDescription: [
      { type: 'required', message: 'Please Provide a description.' },
    ],
  };

  ngOnInit(): void {
    this.announceForm = this.formBuilder.group({
      announcementID: [''],
      announcementTitle: ['', Validators.required],
      announcementDescription: ['', Validators.required],
      announceStamp: [''],
    });
  }

  onSubmit() {
    this.announceForm.patchValue({
      announceStamp: new Date().toISOString(),
    });
    console.log(this.announceForm.value);
    this.announcementService
      .postAnnouncement(this.announceForm.value)
      .subscribe(
        (res) => {
          console.log('DATA:', res);
          this.toastr.success('Announcement Successfully Posted', 'Success');
          this.modalService.dismissAll();
        },
        (error) => {
          this.toastr.success('Announcement Successfully Posted', 'Success');
        }
      );
  }
}
