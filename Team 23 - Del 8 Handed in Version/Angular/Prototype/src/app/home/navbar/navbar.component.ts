import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedInUser: any;
  public show:boolean = false;
  public divName:any = 'Show';
  public hide:boolean = false;
  weather: any;


  constructor(private route: Router, private modalService: NgbModal, private toastr: ToastrService,public data: DataService,) { }

  ngOnInit(): void {

    this.loggedInUser = JSON.parse(localStorage.getItem('LoggedinUser'));

    if (this.loggedInUser.userTypeID === 1){

      this.show = true;

      
    }
    /*
    this.data.getWeather().then((result) => { 

      this.weather = result;

    });


     console.log(this.weather);
    */
    

  }

  onLogout(logoutModal) {
    this.modalService.open(logoutModal, { centered: true });
  }

  

  yesLogout (logoutModal) {

    window.localStorage.clear();

    this.route.navigate(['/login']);
    this.modalService.dismissAll(logoutModal);
    // this.toastr.success('Registration Successful', 'Success');
    // this.toastr.error('Registration Unsuccessful', 'Error');
  }

  cancelRegistration(cancelRegisterModal) {
    this.modalService.open(cancelRegisterModal, { centered: true });
  }

  yesCancel (cancelRegisterModal) {
    this.route.navigate(['/login']);
    this.modalService.dismissAll(cancelRegisterModal);
    // this.toastr.success('Registration Successful', 'Success');
    this.toastr.warning('Registration Cancelled', 'Warning');
  }



}