import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  public User: FormControl = new FormControl();
  resetForm: FormGroup;
  formSubmitted = false;


  error_messages = {
  
    'userEmail': [
      { type: 'required', message: 'Email is required.' },
      { type: 'email', message: 'please enter a valid email address.' }
    ],

  }
  
  errorMessage: any;

  constructor(public data: DataService, private route: Router,
    private toastr: ToastrService, private formBuilder: FormBuilder, private fb: FormBuilder) {



    this.resetForm = new FormGroup({
      UserEmail: new FormControl(''),

    });
  }

  ngOnInit(): void {


    this.resetForm = new FormGroup({


    });

    this.resetForm = this.formBuilder.group({

      userEmail: ['', [Validators.required, Validators.email]],


    });


  }


  onSubmit(event) {

    this.formSubmitted = true;

   
    if (this.resetForm.invalid) {
      return;
    }
    else {

  
console.log(this.resetForm.value);
      this.data.resetPassword(this.resetForm.value).then(success => {

       

        this.toastr.success("Check your email address for a link to reset password", 'Success', {
          disableTimeOut: true,
          tapToDismiss: false,
          closeButton: true,
          positionClass: 'toast-top-full-width',

        });


        this.route.navigate(['/login']);


        this.formSubmitted = false;


      }).catch(error => {

        console.log(error);
        this.formSubmitted = false;

        this.toastr.error(error.error, 'Error', {
          disableTimeOut: true,
          tapToDismiss: false,
          closeButton: true,
          positionClass: 'toast-top-full-width',
          enableHtml: true

        });

        this.route.navigate(['/login']);

       
        console.log(error);

      });



    }


  }




}
