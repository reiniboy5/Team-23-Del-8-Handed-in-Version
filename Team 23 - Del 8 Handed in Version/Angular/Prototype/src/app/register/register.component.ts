import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../data.service';
import { UserType } from '../model/Users/user-type';
import { Suburb } from '../model/Users/suburb';
import { Province } from '../model/Users/province';
import { Country } from '../model/Users/country';
import { City } from '../model/Users/city';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DatePipe } from '@angular/common';
import { ConfirmedValidator } from 'src/confirmed.validators';


//**Interfaces */
/*
interface UserType {
  id: string;
  name: string;
}

interface Surburb {
  id: string;
  name: string;
}

/**End Interfaces */

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isNameSelected: boolean;
  selectInput(event) {
    let selected = event.target.value;
    if (selected == "1") {
      this.isNameSelected = true;
    } else {
      this.isNameSelected = false;
    }
  }

  public listUserTypes: any;

  public listSurburbs: any;

  public listProvinces: any;

  public listCountries: any;

  public listCities: any;

  public listFilteredSurburbs: any;

  public listFilteredProvinces: any;

  
  public listFilteredCities: any;

  public User: FormControl = new FormControl();
  registrationForm: FormGroup;
  SelCountryId: string = '0';
  SelProvinceId: string = '0';
  SelCityId: string = '0';

  formSubmitted = false;
  theErrors: string[] = [];
timestamp: any;
  model;



  error_messages = {
    'UserName': [
      { type: 'required', message: 'User Name is required.' },
    ],

    'UserFirstName': [
      { type: 'required', message: 'First Name is required.' }
    ],
    'UserDOB': [
      { type: 'required', message: 'Date of birth is required.' }
    ],

    'UserTypeId': [
      { type: 'required', message: 'User Type is required.' }
    ],

    'SuburbId': [
      { type: 'required', message: 'Suburb is required.' }
    ],

    'CountryId': [
      { type: 'required', message: 'Country is required.' }
    ],
    'CityId': [
      { type: 'required', message: 'City is required.' }
    ],

    'ProvinceId': [
      { type: 'required', message: 'Province is required.' }
    ],
    'UserLastName': [
      { type: 'required', message: 'Last Name is required.' }
    ],

    'UserEmail': [
      { type: 'required', message: 'Email is required.' },
      { type: 'email', message: 'please enter a valid email address.' }
    ],

    'UserPassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password is too short' },
      { type: 'maxlength', message: 'password length.' }
    ],
    'UserPasswordConfirm': [
      { type: 'required', message: 'password  confirm is required.' },
      { type: 'minlength', message: 'password  is too short.' },
      { type: 'confirmedValidator', message: 'Password and Confirm Password must be match.' }
    ],
    'UserPhoneNumber': [
      { type: 'required', message: 'Phone number is required.' },
      { type: 'minlength', message: ' Phone number is too short.' }
    ],
    'UserAddressLine1': [
      { type: 'required', message: 'address  is required.' },
      { type: 'minlength', message: 'address length.' }
    ],

    'UserPostalCode': [
      { type: 'required', message: 'postal code  is required.' },
      { type: 'minlength', message: 'postal code is too short.' }
    ],

  }
  
  errorMessage: any;

  constructor(public data: DataService, private route: Router, private modalService: NgbModal, 
    private toastr: ToastrService, private formBuilder: FormBuilder, private fb: FormBuilder,public datepipe: DatePipe) {


    this.registrationForm = new FormGroup({
      UserID: new FormControl(''),
      UserName: new FormControl(''),
      UserFirstName: new FormControl(''),
      UserLastName: new FormControl(''),
      UserEmail: new FormControl(''),
      UserPhoneNumber: new FormControl(''),
      UserPassword: new FormControl(''),
      UserPasswordConfirm: new FormControl(''),
      UserDOB: new FormControl(''),
      UserAddressLine1: new FormControl(''),
      UserAddressLine2: new FormControl(''),
      UserPostalCode: new FormControl(''),
      ArtistBio: new FormControl(''),
      UserTypeId: new FormControl(''),
      SuburbId: new FormControl(''),
      CountryId: new FormControl(''),
      ProvinceId: new FormControl(''),
      CityId: new FormControl(''),
      timestamp: new FormControl(''),
      isVerified:new FormControl(''),
      profilePicture:new FormControl(''),
      });





  }

  ngOnInit(): void {

    this.data.getAllCities().then((result) => { console.log(result); this.listCities = result });
    this.data.getAllCountries().then((result) => { console.log(result); this.listCountries = result });
    this.data.getAllSuburbs().then((result) => { console.log(result); this.listSurburbs = result });
    this.data.getAllProvinces().then((result) => { console.log(result); this.listProvinces = result });
    this.data.getAllUserTypes().then((result) => { console.log(result); this.listUserTypes = result });

    console.log(this.listCities);

    this.registrationForm = this.formBuilder.group({
      UserID: [''],
      UserName: ['', Validators.required],
      UserFirstName: ['', Validators.required],
      UserLastName: ['', Validators.required],
      UserEmail: ['', [Validators.required, Validators.email]],
      UserPhoneNumber: ['', [Validators.required,Validators.minLength(10)]],
      UserPassword: ['', [Validators.required,Validators.minLength(6)]],
      UserPasswordConfirm: ['', Validators.required],
      UserDOB: ['', Validators.required],
      UserAddressLine1: ['', Validators.required],
      UserAddressLine2: [''],
      UserPostalCode: ['', [Validators.required,Validators.minLength(4)]],
      ArtistBio: [''],
      UserTypeId: ['', Validators.required],
      SuburbId: ['', Validators.required],
      CityId: ['', Validators.required],
      ProvinceId: ['', Validators.required],
      CountryId: ['', Validators.required],
      timestamp: [''],
      isVerified: [''],
      profilePicture:[''],
    },{ 
      validator: ConfirmedValidator('UserPassword', 'UserPasswordConfirm')
    })
    
    
    ;

  }

  FillCountry(){

    this.listCountries;
  }
  FillProvince(){

    console.log('Country Id', this.SelCountryId);

    this.listFilteredProvinces = this.listProvinces.filter((item) => item.countryID == this.SelCountryId);

    console.log('PROVINCE', this.listFilteredProvinces);

  }
  FillCity(){

    this.listFilteredCities = this.listCities.filter((item)  => item.provinceID == this.SelProvinceId);
  }
  FillSurburb(){

    this.listFilteredSurburbs = this.listSurburbs.filter((item)  => item.cityID == this.SelCityId);
  }


  userPassword(formGroup: FormGroup) {
    const { value: UserPassword } = formGroup.get('UserPassword');
    const { value: UserPasswordConfirm } = formGroup.get('UserPasswordConfirm');
    return UserPassword === UserPasswordConfirm ? null : { notSame: true };
  }


  onSubmit(event) {

    this.formSubmitted = true;

    event.preventDefault();
    console.log(this.registrationForm.value);

    if (this.registrationForm.invalid) {
      return;
    }

    else {

      console.log(this.registrationForm.value);
      //this.registrationForm.get('UserDOB').setValue('2021-08-31T19:39:32.005Z')  ;

        this.timestamp = new Date();  

      let latest_date_time =this.datepipe.transform(this.timestamp, 'yyyy-MM-ddTHH:mm:ss');

      this.registrationForm.get('timestamp').setValue(latest_date_time)  ;
      this.registrationForm.get('isVerified').setValue(0)  ;

      console.log(this.registrationForm.value);
      this.data.addUser(this.registrationForm.value).then(success => {
        this.route.navigate(['/login']);
        this.toastr.success("Registration Successful, Please Login", 'Success', {
          disableTimeOut: true,
          tapToDismiss: false,
          closeButton: true,
          positionClass: 'toast-top-full-width',

        });


        this.formSubmitted = false;
        this.registrationForm.reset();



      }).catch(error => {

        console.log(error);

        this.toastr.error(error.error, 'Error', {
          disableTimeOut: true,
          tapToDismiss: false,
          closeButton: true,
          positionClass: 'toast-top-full-width',
          enableHtml: true

        });

        console.log(error);

      });



    }

  }
  onRegister(modalRegister) {
    this.modalService.open(modalRegister, { centered: true });
  }

  submitRegistration(modalRegister) {
    this.route.navigate(['/login']);
    this.modalService.dismissAll(modalRegister);
    // this.toastr.success('Registration Successful', 'Success');
    this.toastr.error('Registration Unsuccessful', 'Error');
  }

  cancelRegistration(cancelRegisterModal) {
    this.modalService.open(cancelRegisterModal, { centered: true });
  }

  yesCancel(cancelRegisterModal) {
    this.route.navigate(['/login']);
    this.modalService.dismissAll(cancelRegisterModal);
    // this.toastr.success('Registration Successful', 'Success');
    this.toastr.warning('Registration Cancelled', 'Warning');
  }



}
