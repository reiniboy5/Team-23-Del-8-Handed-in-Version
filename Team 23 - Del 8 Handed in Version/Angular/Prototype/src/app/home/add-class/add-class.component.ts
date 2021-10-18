import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {

  addArtClassForm: FormGroup;
  public ArtClass : FormControl = new FormControl(); 
  formSubmitted: boolean;

  constructor(public data: DataService,private route: Router, private modalService: NgbModal, private toastr: ToastrService,private formBuilder: FormBuilder,private fb: FormBuilder) {

    this.addArtClassForm = new FormGroup({
      ArtClassID: new FormControl(''),
      ArtClassName: new FormControl(''),
      ArtClassDescription: new FormControl(''),
      ArtClassStartDate: new FormControl(''),
      ArtClassEndDate: new FormControl(''),
      ArtClassStartTime: new FormControl(''),
      ArtClassEndTime: new FormControl(''),
      ClassLimit: new FormControl(''),
      RefundDayLimit: new FormControl(''),
      ClassPrice: new FormControl(''),
      ArtClassType: new FormControl(''),
      Venue: new FormControl(''),
      ClassTeacher: new FormControl(''),
      ArtClassAnnouncement: new FormControl(''),
      Organisation: new FormControl(''),

    });

   }

  ngOnInit(): void {

    this.addArtClassForm =  this.formBuilder.group({
      ArtClassID: [''],
      ArtClassName: [''],
      ArtClassDescription: [''],
      ArtClassStartDate: [''],
      ArtClassEndDate: [''],
      ArtClassStartTime: [''],
      ArtClassEndTime: [''],
      ClassLimit: [''],
      RefundDayLimit: [''],
      ClassPrice:   [''],
      ArtClassType: [''],
      Venue: [''],
      ClassTeacher: [''],
      ArtClassAnnouncement: [''],
      Organisation: [''],
  
    });
  }
  onSubmit(event) { 
   
    this.formSubmitted = true;
    event.preventDefault();
                  
    if (this.addArtClassForm.invalid) {
       return;
    }

    else{
          
     console.log(this.addArtClassForm.value);
                      
      this.data.addArtClass(this.addArtClassForm.value).subscribe(success => 
                          
        {
          this.route.navigate(['/home/art-classes']);
          this.toastr.success("Registration Successful, Please Login", 'Success',{
            disableTimeOut:true,
            tapToDismiss: false,
            closeButton: true,
            positionClass:'toast-top-full-width',
            
            
        
          });

          
          this.formSubmitted = false;
            this.addArtClassForm.reset();
        
          
                        
        }, error =>{
          
          console.log(error);
      
        this.toastr.error(error, 'Error',{
        disableTimeOut:true,
        tapToDismiss: false,
        closeButton: true,
        positionClass:'toast-top-full-width',
        enableHtml: true
    
      });

      console.log(error);
    
  });

       

    }
    
  }
  cancelAddClass(cancelAddClassArtModal) {
    this.modalService.open(cancelAddClassArtModal, { centered: true });
  }

  yesCancel (cancelAddClassArtModal) {
    this.route.navigate(['/home/art-classes']);
    this.modalService.dismissAll(cancelAddClassArtModal);
    // this.toastr.success('Registration Successful', 'Success');
    this.toastr.warning('Add Class Cancelled', 'Warning');
  }

}
