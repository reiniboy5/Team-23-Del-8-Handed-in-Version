import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
// import { type } from 'os';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-add-artwork',
  templateUrl: './add-artwork.component.html',
  styleUrls: ['./add-artwork.component.scss'],
})
export class AddArtworkComponent implements OnInit {
  isNameSelected: boolean;
  selectInput(event) {
    let selected = event.target.value;
    if (selected == '1') {
      this.isNameSelected = true;
    } else {
      this.isNameSelected = false;
    }
  }

  addArtworkForm: FormGroup;
  public Artwork: FormControl = new FormControl();
  formSubmitted: boolean;

  ListSurfaceTypes: any;
  ListMediumTypes: any;
  ListArtworkStatuses: any;
  ListFrameColours: any;
  ListArtworkDimensions: any;
  ListArtworkTypes: any;
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  picture1base64: string;
  url = '';

  error_messages = {
    ArtworkTitle: [{ type: 'required', message: 'Title is required.' }],

    ArtworkPrice: [
      { type: 'required', message: 'Price is required.' },
      { type: 'pattern', message: 'Must be a numerical value' },
    ],
    ArtworkPicture: [{ type: 'required', message: 'Image is required.' }],

    SurfaceTypeID: [{ type: 'required', message: 'Surface Typeis required.' }],

    MediumTypeID: [{ type: 'required', message: 'Medium Type is required.' }],

    FrameColourID: [{ type: 'required', message: 'City is required.' }],

    ArtworkDimensionID: [
      { type: 'required', message: 'Province is required.' },
    ],
    ArtworkTypeID: [{ type: 'required', message: 'Province is required.' }],
  };

  errorMessage: any;
  loggedInUser: any;

  constructor(
    public data: DataService,
    private route: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private fb: FormBuilder
  ) {
    this.addArtworkForm = new FormGroup({
      ArtworkID: new FormControl(''),
      ArtworkTitle: new FormControl(''),
      ArtworkPrice: new FormControl(''),
      ArtworkPicture: new FormControl(''),
      ArtworkPicture1BASE64: new FormControl(''),
      SurfaceTypeID: new FormControl(''),
      MediumTypeID: new FormControl(''),
      ArtworkStatusID: new FormControl(''),
      FrameColourID: new FormControl(''),
      ArtworkDimensionID: new FormControl(''),
      ArtworkTypeID: new FormControl(''),
      UserID: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(localStorage.getItem('LoggedinUser'));
    this.data.getAllSurfaceType().then((result) => {
      console.log(result);
      this.ListSurfaceTypes = result;
    });
    this.data.getAllMediumTypes().then((result) => {
      console.log(result);
      this.ListMediumTypes = result;
    });
    this.data.getAllArtworkStatuses().then((result) => {
      console.log(result);
      this.ListArtworkStatuses = result;
    });
    this.data.getAllDimesisons().then((result) => {
      console.log(result);
      this.ListArtworkDimensions = result;
    });
    this.data.getAllFrameColors().then((result) => {
      console.log(result);
      this.ListFrameColours = result;
    });
    this.data.getAllArtworkTypes().then((result) => {
      console.log(result);
      this.ListArtworkTypes = result;
    });

    this.addArtworkForm = this.formBuilder.group({
      ArtworkID: [''],
      ArtworkTitle: ['', Validators.required],
      ArtworkPrice: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
      ],
      ArtworkPicture: ['', Validators.required],
      ArtworkPicture1BASE64: [''],
      SurfaceTypeID: ['', Validators.required],
      MediumTypeID: ['', Validators.required],
      ArtworkStatusID: [''],
      FrameColourID: ['', Validators.required],
      ArtworkDimensionID: ['', Validators.required],
      ArtworkTypeID: ['', Validators.required],
      UserID: [''],
    });
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

  onSubmit(event, addArtworkModal) {
    this.formSubmitted = true;

    event.preventDefault();
    console.log(this.addArtworkForm.value);

    this.addArtworkForm
      .get('ArtworkPicture1BASE64')
      .setValue(this.picture1base64);

    if (this.addArtworkForm.invalid) {
      this.modalService.dismissAll(addArtworkModal);
      return;
    } else {
      console.log(this.addArtworkForm.value);

      this.addArtworkForm.get('UserID').setValue(this.loggedInUser.userID);

      this.addArtworkForm.get('ArtworkStatusID').setValue(1);

      this.data
        .addArtwork(this.addArtworkForm.value)
        .then((success) => {
          this.route.navigate(['/home/artwork-showroom']);
          this.toastr.success('Artwork successfully added', 'Success', {
            disableTimeOut: true,
            tapToDismiss: false,
            closeButton: true,
            positionClass: 'toast-top-full-width',
          });

          this.formSubmitted = false;
          this.addArtworkForm.reset();

          this.modalService.dismissAll(addArtworkModal);
        })
        .catch((error) => {
          console.log(error);

          this.toastr.error(error.error, 'Error', {
            disableTimeOut: true,
            tapToDismiss: false,
            closeButton: true,
            positionClass: 'toast-top-full-width',
            enableHtml: true,
          });

          this.modalService.dismissAll(addArtworkModal);
          console.log(error);
        });
    }
  }
  onAddArtwork(addArtworkModal) {
    this.modalService.open(addArtworkModal, { centered: true });
  }

  cancelAddArtwork(cancelAddArtworkModal) {
    this.modalService.open(cancelAddArtworkModal, { centered: true });
  }

  yesCancel(cancelAddArtworkModal) {
    this.route.navigate(['/home/artwork-showroom']);
    this.modalService.dismissAll(cancelAddArtworkModal);
    this.toastr.warning('Add Artwork Cancelled', 'Warning');
  }
}
