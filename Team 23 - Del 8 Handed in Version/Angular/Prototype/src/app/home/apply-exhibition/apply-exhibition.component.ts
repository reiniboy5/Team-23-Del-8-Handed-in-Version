import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../../data.service';
import imageToBase64 from 'image-to-base64/browser';

@Component({
  selector: 'app-apply-exhibition',
  templateUrl: './apply-exhibition.component.html',
  styleUrls: ['./apply-exhibition.component.scss']
})
export class ApplyExhibitionComponent implements OnInit {
  exhibition: any;
  public ExhibitionApplication: FormControl = new FormControl();
  exhibitionApplicationForm: FormGroup;
  url = '';
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  imageError2: string;
  isImageSaved2: boolean;
  cardImageBase642: string;
  imageError3: string;
  isImageSaved3: boolean;
  cardImageBase643: string;
  picture1base64: string;
  picture2base64: string;
  picture3base64: string;
  formSubmitted: boolean;
  loggedInUser: any;

  constructor(private route: Router, private modalService: NgbModal, private toastr: ToastrService, public data: DataService
    , private formBuilder: FormBuilder, private fb: FormBuilder) {


    this.exhibitionApplicationForm = new FormGroup({

      ExhibitionApplicationID: new FormControl(''),
      ExhibitionPicture1: new FormControl(''),
      ExhibitionPicture2: new FormControl(''),
      ExhibitionPicture3: new FormControl(''),
      ExhibitionPicture1BASE64: new FormControl(''),
      ExhibitionPicture2BASE64: new FormControl(''),
      ExhibitionPicture3BASE64: new FormControl(''),
      ApplicationDescription: new FormControl(''),
      ExhibitionID: new FormControl(''),
      UserID: new FormControl(''),
      ApplicationStatus: new FormControl(''),
    });

  }

  error_messages = {
   
    'ExhibitionPicture1': [
      { type: 'required', message: 'Exhibition Picture is required.' }
    ],
    'ExhibitionPicture2': [
      { type: 'required', message: 'Exhibition Picture is required' }
    ],

    'ExhibitionPicture3': [
      { type: 'required', message: 'Exhibition Picture is required.' }
     
    ],
    'ApplicationDescription': [
      { type: 'required', message: 'ApplicationDescription is required.' }
   
    ],
 

  }
  
  errorMessage: any;

  ngOnInit(): void {

    this.exhibition = JSON.parse(localStorage.getItem('SelectedExhibition'));
    this.loggedInUser = JSON.parse(localStorage.getItem('LoggedinUser'));


    this.exhibitionApplicationForm = this.formBuilder.group({

      ExhibitionApplicationID: [''],
      ExhibitionPicture1: ['', Validators.required],
      ExhibitionPicture2: ['', Validators.required],
      ExhibitionPicture3: ['', Validators.required],
      ExhibitionPicture1BASE64: [''],
      ExhibitionPicture2BASE64: [''],
      ExhibitionPicture3BASE64: [''],
      ApplicationDescription: ['', Validators.required],
      ExhibitionID: [''],
      UserID: [''],
      ApplicationStatus: [''],
    });

  }

  onApply(applyExhibitionModal) {


    this.modalService.open(applyExhibitionModal, { centered: true });
  }

  submitApplication(applyExhibitionModal, event) {

    console.log(this.exhibitionApplicationForm.value);
    console.log(this.exhibition.exhibitionID);

   /// console.log(imageToBase64('C:/Users/ABSC612/Desktop/artworks.jpeg'));

   this.exhibitionApplicationForm.get('ExhibitionPicture1BASE64').setValue(this.picture1base64) ;
   this.exhibitionApplicationForm.get('ExhibitionPicture2BASE64').setValue(this.picture2base64) ;
   this.exhibitionApplicationForm.get('ExhibitionPicture3BASE64').setValue(this.picture3base64) ;
   this.exhibitionApplicationForm.get('ExhibitionID').setValue(this.exhibition.exhibitionID) ;
   this.exhibitionApplicationForm.get('UserID').setValue(this.loggedInUser.userID) ;
   this.exhibitionApplicationForm.get('ApplicationStatus').setValue(1) ;

    this.route.navigate(['/home/exhibitions']);
    this.modalService.dismissAll(applyExhibitionModal);



    if (this.exhibitionApplicationForm.invalid) {
      return;
    }
    else {

      console.log(this.exhibitionApplicationForm.value);

    this.data.addExhibitionApplication(this.exhibitionApplicationForm.value).then(success => {

      

      this.toastr.success('Application Successful', 'Success');

        this.modalService.dismissAll(applyExhibitionModal);

        this.ngOnInit();


      this.formSubmitted = false;     


      }).catch(error => {

        console.log(error);
        this.modalService.dismissAll(applyExhibitionModal);
        this.toastr.error(error.error ,'Error');
     
        console.log(error);
      
      });



    }

  }

  cancelApplication(cancelApplicationModal) {
    this.modalService.open(cancelApplicationModal, { centered: true });
  }

  yesCancel(cancelApplicationModal) {
    this.route.navigate(['/home/exhibition']);
    this.modalService.dismissAll(cancelApplicationModal);
    // this.toastr.warning('Application Successful', 'Success')
    // this.toastr.error('Application Unsuccessful', 'Error')

  }

  onSelectFile(event) {

      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); // read file as data url

        reader.onload = (event: any) => { // called once readAsDataURL is completed
          this.url = event.target.result;
        }
      }
    
  }
  onSelectFile1(event) {

    
      if (event.target.files && event.target.files[1]) {
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[1]); // read file as data url

        reader.onload = (event: any) => { // called once readAsDataURL is completed
          this.url = event.target.result;
        }
      
    }
  }
  onSelectFile2(event) {

    
      if (event.target.files && event.target.files[2]) {
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[2]); // read file as data url

        reader.onload = (event: any) => { // called once readAsDataURL is completed
          this.url = event.target.result;
        }
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
            this.imageError =
                'Maximum size allowed is ' + max_size / 1000 + 'Mb';

            return false;
        }

    
        const reader = new FileReader();
        
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;

            console.log(reader.result);
            this.picture1base64 = reader.result.toString();
            image.onload = rs => {
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
  



console.log(this.picture1base64 );
    

       
    }
}

fileChangeEvent2(fileInput: any) {
  this.imageError = null;
  if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      console.log(fileInput.target.files[0]);

      if (fileInput.target.files[0].size > max_size) {
          this.imageError2 =
              'Maximum size allowed is ' + max_size / 1000 + 'Mb';

          return false;
      }

  
      const reader = new FileReader();
      
      reader.onload = (e: any) => {
          const image = new Image();
          image.src = e.target.result;

          console.log(reader.result);
          this.picture2base64 = reader.result.toString();
          image.onload = rs => {
              const img_height = rs.currentTarget['height'];
              const img_width = rs.currentTarget['width'];

              console.log(img_height, img_width);


              if (img_height > max_height && img_width > max_width) {
                  this.imageError2 =
                      'Maximum dimentions allowed ' +
                      max_height +
                      '*' +
                      max_width +
                      'px';
                  return false;
              } else {
                  const imgBase64Path2 = e.target.result;
                  this.cardImageBase642 = imgBase64Path2;
                  this.isImageSaved2 = true;
                  // this.previewImagePath = imgBase64Path;
              }
          };
      };

      

reader.readAsDataURL(fileInput.target.files[0]);

//me.modelvalue = reader.result;
console.log(reader.result);


  

     
  }
}

fileChangeEvent3(fileInput: any) {
  this.imageError = null;
  if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      console.log(fileInput.target.files[0]);

      if (fileInput.target.files[0].size > max_size) {
          this.imageError =
              'Maximum size allowed is ' + max_size / 1000 + 'Mb';

          return false;
      }

  
      const reader = new FileReader();
      
      reader.onload = (e: any) => {
          const image = new Image();
          image.src = e.target.result;

          console.log(reader.result);
          this.picture3base64 = reader.result.toString();
          image.onload = rs => {
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
                  const imgBase64Path3 = e.target.result;
                  this.cardImageBase643 = imgBase64Path3;
                  this.isImageSaved3 = true;
                  // this.previewImagePath = imgBase64Path;
              }
          };
      };

      

reader.readAsDataURL(fileInput.target.files[0]);

//me.modelvalue = reader.result;
console.log(reader.result);


  

     
  }
}

removeImage() {
    this.cardImageBase64 = null;
    this.isImageSaved = false;
    this.picture1base64 = undefined;
}
removeImage2() {
  this.cardImageBase642 = null;
  this.isImageSaved2 = false;
  this.picture2base64 = undefined;
}
removeImage3() {
  this.cardImageBase643 = null;
  this.isImageSaved3 = false;
  this.picture3base64 = undefined;
}


}