import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../shared/User/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private route: Router,
    public service: UserService
  ) {}

  ngOnInit(): void {}

  onLogout(logoutModal) {
    this.modalService.open(logoutModal, { centered: true });
  }

  yesLogout(logoutModal) {
    window.localStorage.clear();
    this.service.userLoggedIn = false;
    this.route.navigate(['/login']);
    this.modalService.dismissAll(logoutModal);
    // this.toastr.success('Registration Successful', 'Success');
    // this.toastr.error('Registration Unsuccessful', 'Error');
  }
}
