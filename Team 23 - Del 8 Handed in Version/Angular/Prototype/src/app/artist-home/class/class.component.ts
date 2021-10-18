import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  constructor(private route: Router, private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onArtistBooking(artistBookModal) {
    this.modalService.open(artistBookModal, { centered: true });
  }

  submitArtistBooking (artistBookModal) {
    this.route.navigate(['/artist-home/classes']);
    this.modalService.dismissAll(artistBookModal);
    this.toastr.success('Booking Successful', 'Success')
    this.toastr.error('Booking Unsuccessful', 'Error')

  }

}
