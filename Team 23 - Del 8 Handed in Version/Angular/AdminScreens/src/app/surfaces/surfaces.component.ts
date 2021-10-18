import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SurfaceType } from '../model/Artworks/surface-type';
import { SurfaceTypeService } from '../shared/Artrworks/surface-type.service';

@Component({
  selector: 'app-surfaces',
  templateUrl: './surfaces.component.html',
  styleUrls: ['./surfaces.component.scss'],
})
export class SurfacesComponent implements OnInit {
  surface: SurfaceType;
  surfaceForm: FormGroup;
  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService,
    public surfaceService: SurfaceTypeService,
    private formBuilder: FormBuilder
  ) {}

  validation_message = {
    surfaceTypeName: [{ type: 'required', message: 'Enter surface details' }],
  };

  ngOnInit(): void {
    this.resetObject();
    this.surfaceService.getSurfaces();

    this.surfaceForm = this.formBuilder.group({
      surfaceTypeID: [0],
      surfaceTypeName: ['', Validators.required],
    });
  }

  resetObject() {
    this.surface = {
      surfaceTypeID: 0,
      surfaceTypeName: '',
    };
  }

  addSurface(addSurfaceModal) {
    this.modalService.open(addSurfaceModal, { centered: true });
  }

  onSubmit() {
    this.surfaceService.postSurface(this.surfaceForm.value).subscribe((res) => {
      this.surfaceService.getSurfaces();
      this.modalService.dismissAll();
      this.toastr.success('Surface Successfully Added', 'Success');
    });
  }

  // refreshFrom(form: NgForm) {
  //   form.form.reset();
  //   this.surfaceService.surfaceData = new SurfaceType();
  // }

  onDeleteSurface(deleteSurfaceModal) {
    this.modalService.open(deleteSurfaceModal, { centered: true });
  }

  confirmDeleteSurface(id: number) {
    // console.log(id);
    // if (id === 0) {
    //   this.toastr.info('Could Not Delete Surface', 'Info');
    // } else {
    //   this.surfaceService.deleteSurface(id).subscribe((res) => {
    //     this.surfaceService.getSurfaces();
    //     this.modalService.dismissAll();
    //     this.toastr.success('Surface Successfully Deleted', 'Success');
    //   });
    this.surfaceService.deleteSurface(id).subscribe(
      (res) => {
        console.log('RESULT: ', res);
        this.surfaceService.getSurfaces();
        console.log('This is executed');
        this.modalService.dismissAll();
        this.toastr.success('Surface Successfully Deleted', 'Success');
      },
      (err) => {
        this.toastr.info('This Surface is currently in use', 'Info');
      }
    );
  }
}
