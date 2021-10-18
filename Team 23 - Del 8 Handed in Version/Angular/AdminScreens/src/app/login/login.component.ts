import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/User/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: Object;
  formSubmitted = false;
  theErrors: string[] = [];
  public hide: boolean = false;

  public User: FormControl = new FormControl();
  loginForm: FormGroup;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder,
    public service: UserService
  ) {
    this.loginForm = new FormGroup({
      UserName: new FormControl(''),
      Password: new FormControl(''),
    });
  }

  validation_message = {
    UserName: [
      { type: 'required', message: 'Please provide User Name' },
      { type: 'pattern', message: 'Only Admin' },
    ],
    Password: [{ type: 'required', message: 'Please provide Password' }],
  };

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      UserName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('Reinhardt15'),
        ]),
      ],
      Password: ['', Validators.required],
    });
  }

  onSubmit(event) {
    this.formSubmitted = true;
    event.preventDefault();

    if (this.loginForm.invalid) {
      return;
    } else {
      this.service.loginUser(this.loginForm.value).subscribe(
        (success) => {
          this.service.loginInUserData = success;

          localStorage.setItem('LoggedinUser', JSON.stringify(success));

          console.log(this.service.loginInUserData);
          this.hide = true;
          this.router.navigate(['/home']);
          this.service.userLoggedIn = true;
        },
        (error) => {
          console.log(error);

          this.toastr.error(error, 'Error', {
            disableTimeOut: true,
            tapToDismiss: false,
            closeButton: true,
            positionClass: 'toast-top-full-width',
            enableHtml: true,
          });
          console.log(error);
        }
      );
    }
  }
}
