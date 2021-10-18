import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MediumType } from '../model/Artworks/medium-type';
import { MediumTypeService } from '../shared/Artrworks/medium-type.service';

@Component({
  selector: 'app-mediums',
  templateUrl: './mediums.component.html',
  styleUrls: ['./mediums.component.scss'],
})
export class MediumsComponent implements OnInit {
  medium: MediumType;
  mediumForm: FormGroup;
  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService,
    public mediumService: MediumTypeService,
    private formBuilder: FormBuilder
  ) {}

  validation_message = {
    mediumTypeName: [{ type: 'required', message: 'Enter medium details' }],
  };

  ngOnInit(): void {
    this.resetObject();
    this.mediumService.getMediums();

    this.mediumForm = this.formBuilder.group({
      mediumTypeID: [0],
      mediumTypeName: ['', Validators.required],
    });
  }

  resetObject() {
    this.medium = {
      mediumTypeID: 0,
      mediumTypeName: '',
    };
  }

  addMedium(addMediumModal) {
    this.modalService.open(addMediumModal, { centered: true });
  }

  onSubmit() {
    this.mediumService.postMedium(this.mediumForm.value).subscribe((res) => {
      this.mediumService.getMediums();
      this.modalService.dismissAll();
      this.toastr.success('Medium Successfully Added', 'Success');
    });
  }

  // refreshFrom(form: NgForm) {
  //   form.form.reset();
  //   this.mediumService.mediumData = new MediumType();

  // }

  onDeleteMedium(deleteMediumModal) {
    this.modalService.open(deleteMediumModal, { centered: true });
  }

  confirmDeleteMedium(deleteMediumModal, id: number) {
    this.mediumService.deleteMedium(id).subscribe(
      (res) => {
        this.mediumService.getMediums();
        this.modalService.dismissAll(deleteMediumModal);
        this.toastr.success('Medium Successfully Deleted', 'Success');
      },
      (err) => {
        this.toastr.info('This Medium is currently in use', 'Info');
      }
    );
  }
}
