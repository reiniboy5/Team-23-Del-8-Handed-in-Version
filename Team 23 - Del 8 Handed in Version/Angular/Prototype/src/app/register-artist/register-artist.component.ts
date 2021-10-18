import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-artist',
  templateUrl: './register-artist.component.html',
  styleUrls: ['./register-artist.component.scss']
})
export class RegisterArtistComponent implements OnInit {

  constructor(private route: Router, private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onRegister(modalRegister) {
    this.modalService.open(modalRegister, { centered: true });
  }

  submitRegistration (modalRegister) {
    this.route.navigate(['/login']);
    this.modalService.dismissAll(modalRegister);
    // this.toastr.success('Registration Successful', 'Success')
    this.toastr.error('Registration Unsuccessful', 'Error');

  }

}
