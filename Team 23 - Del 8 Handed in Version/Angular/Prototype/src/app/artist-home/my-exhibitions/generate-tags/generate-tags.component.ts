import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-generate-tags',
  templateUrl: './generate-tags.component.html',
  styleUrls: ['./generate-tags.component.scss']
})
export class GenerateTagsComponent implements OnInit {

  constructor(private route: Router, private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addTag(addTagModal) {
    this.modalService.open(addTagModal, { centered: true });

  }

  confirmTag(addTagModal){
    // this.route.navigate(['/home/art-classes']);
    this.modalService.dismissAll(addTagModal);
    this.toastr.success('Tag Updated Successfully', 'Success')
    this.toastr.error('Could Not Update Tag', 'Error')
  }

  deleteTag(deleteTagModal) {
    this.modalService.open(deleteTagModal, { centered: true });

  }

  confirmDeleteTag(deleteTagModal){
    // this.route.navigate(['/home/art-classes']);
    this.modalService.dismissAll(deleteTagModal);
    this.toastr.success('Tag Deleted Successfully', 'Success')
    this.toastr.error('Could Not Delete Tag', 'Error')

  }

}