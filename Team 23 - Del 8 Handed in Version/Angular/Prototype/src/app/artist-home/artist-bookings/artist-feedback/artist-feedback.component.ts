import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-artist-feedback',
  templateUrl: './artist-feedback.component.html',
  styleUrls: ['./artist-feedback.component.scss']
})
export class ArtistFeedbackComponent implements OnInit {

  constructor(private route: Router, private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmitFeedback(feedbackModal) {
    this.modalService.open(feedbackModal, { centered: true });

  }

  confirmFeedback(feedbackModal){
    this.route.navigate(['/artist-home/artist-bookings/artist-completed']);
    this.modalService.dismissAll(feedbackModal);
    this.toastr.success('Feedback Successfully submitted', 'Success')
    this.toastr.error('Could Not Submit Feedback Form', 'Error')
  }

  cancelFeedback(cancelfeedbackModal) {
    this.modalService.open(cancelfeedbackModal, { centered: true });

  }

  confirmCancelFeedback(cancelfeedbackModal){
    this.route.navigate(['/artist-home/artist-bookings/artist-completed']);
    this.modalService.dismissAll(cancelfeedbackModal);
    // this.toastr.success('Feedback Successfully submitted', 'Success')
    // this.toastr.error('Could Not Submit Feedback Form', 'Error')
  }
}
