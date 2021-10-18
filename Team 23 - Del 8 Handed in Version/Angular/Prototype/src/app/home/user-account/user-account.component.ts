import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
})
export class UserAccountComponent implements OnInit {
  user: any;

  userAccountForm: FormGroup;

  imageForm: FormGroup;
  formSubmitted: boolean;
  loggedInUser: any;
  picture1base64: any;
  base64picture: any;
  imageError: string;
  cardImageBase64: any;
  url: any;
  isImageSaved: boolean;

  constructor(
    private route: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public data: DataService,
    private formBuilder: FormBuilder
  ) {}

  error_messages = {
    userFirstName: [{ type: 'required', message: 'First Name is required' }],

    userEmail: [
      { type: 'required', message: 'Email is required.' },
      { type: 'email', message: 'Enter a valid email' },
    ],
    userPhoneNumber: [
      { type: 'required', message: 'Phone Number is required.' },
      { type: 'email', message: 'Only numeric values' },
    ],
    userLastName: [{ type: 'required', message: 'Last name is required' }],
  };

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('LoggedinUser'));

    this.userAccountForm = this.formBuilder.group({
      artistBio: [''],
      suburbID: [''],
      timestamp: [''],
      userAddressLine1: [''],
      userAddressLine2: [''],
      userDOB: [''],
      userEmail: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      userFirstName: ['', Validators.required],
      userID: [''],
      userLastName: ['', Validators.required],
      userName: [''],
      userPassword: [''],
      userPhoneNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
      ],
      userPostalCode: [''],
      userTypeID: [''],
      profilePicture: [''],
      base64Picture: [''],
    });

    this.imageForm = this.formBuilder.group({
      ImageID: [''],
      ImageContent: [''],
      ImageTypeID: [''],
      UserID: [''],
    });
    this.cardImageBase64 = this.user.profilePicture;
    this.userAccountForm.patchValue(this.user);

    console.log(this.userAccountForm.value);
  }

  this;

  onUpdateUser(updateUserModal) {
    this.modalService.open(updateUserModal, { centered: true });
  }

  onSubmit(event) {
    this.formSubmitted = true;

    this.userAccountForm.get('base64Picture').setValue(this.picture1base64);

    event.preventDefault();
    console.log(this.userAccountForm.value);

    if (this.userAccountForm.invalid) {
      return;
    } else {
      console.log(this.userAccountForm.value);

      this.data
        .updateUser(this.userAccountForm.value)
        .then((success) => {
          this.data.loginInUserData = this.userAccountForm.value;

          localStorage.setItem(
            'LoggedinUser',
            JSON.stringify(this.data.loginInUserData)
          );

          this.toastr.success('User Profile Updated Successful', 'Success', {
            disableTimeOut: true,
            tapToDismiss: false,
            closeButton: true,
            positionClass: 'toast-top-full-width',
          });

          this.formSubmitted = false;
        })
        .catch((error) => {
          console.log(error);

          this.toastr.error(error, 'Error', {
            disableTimeOut: true,
            tapToDismiss: false,
            closeButton: true,
            positionClass: 'toast-top-full-width',
            enableHtml: true,
          });

          console.log(error);
        });
    }
  }

  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      console.log(fileInput.target.files[0]);

      if (fileInput.target.files[0].size > max_size) {
        this.imageError = 'Maximum size allowed is ' + max_size / 1000 + 'Mb';

        return false;
      }

      const reader = new FileReader();

      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;

        console.log(reader.result);
        this.picture1base64 = reader.result.toString();
        image.onload = (rs) => {
          const img_height = rs.currentTarget['height'];
          const img_width = rs.currentTarget['width'];

          console.log(img_height, img_width);

          if (img_height > max_height && img_width > max_width) {
            this.imageError =
              'Maximum dimentions allowed ' +
              max_height +
              '*' +
              max_width +
              'px';
            return false;
          } else {
            const imgBase64Path = e.target.result;
            this.cardImageBase64 = imgBase64Path;
            this.isImageSaved = true;
            // this.previewImagePath = imgBase64Path;
          }
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);

      //me.modelvalue = reader.result;

      console.log(this.picture1base64);
    }
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }
  }

  removeImage() {
    this.cardImageBase64 = null;
    this.isImageSaved = false;
    this.picture1base64 = undefined;
  }

  backHome(event) {
    console.log(this.userAccountForm.value);

    this.data.loginInUserData = this.userAccountForm.value;

    this.loggedInUser = JSON.parse(localStorage.getItem('LoggedinUser'));

    this.route.navigate(['/home/welcome']);
  }
}
