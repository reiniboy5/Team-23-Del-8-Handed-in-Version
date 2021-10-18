import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

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
    public data: DataService,
    private formBuilder: FormBuilder,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private calendar: NgbCalendar
  ) {
    this.loginForm = new FormGroup({
      UserName: new FormControl(''),
      Password: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  onSubmit(event) {
    this.formSubmitted = true;
    event.preventDefault();

    if (this.loginForm.invalid) {
      return;
    } else {
      this.data.loginUser(this.loginForm.value).subscribe(
        (success) => {
          this.data.loginInUserData = success;

          localStorage.setItem('LoggedinUser', JSON.stringify(success));

          console.log(this.data.loginInUserData);
          this.hide = true;
          this.router.navigate(['/home/welcome']);
        },
        (error) => {
          console.log(error);
          /*
        var splited = error.String().split(",");


        for(let i = 0; i< splited.length;i++)
        
        {
          var p = i+1;

          splited[i] = p.toString() + "-" + splited[i]

          this.theErrors.push(splited[i] )

        }

        error = this.theErrors.join(".");
*/
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
