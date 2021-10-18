import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(private route: Router, private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmitFeedback(feedbackModal) {
    this.modalService.open(feedbackModal, { centered: true });

  }

  confirmFeedback(feedbackModal){
    this.route.navigate(['/home/my-bookings/completed']);
    this.modalService.dismissAll(feedbackModal);
    this.toastr.success('Feedback Successfully submitted', 'Success')
  }

}
