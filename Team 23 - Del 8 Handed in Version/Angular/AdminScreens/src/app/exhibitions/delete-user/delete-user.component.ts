import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ExhibitionApplication } from 'src/app/model/Exhibitions/exhibition-application';
import { Tags } from 'src/app/model/Exhibitions/tags';
import { ExhibitionService } from 'src/app/shared/Exhibitions/exhibition.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
})
export class DeleteUserComponent implements OnInit {
  tags: Tags[];
  tagsList: Tags[];
  participants: any;
  exhibitionID: any;
  constructor(
    private route: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public exhibitionService: ExhibitionService
  ) {}

  ngOnInit(): void {
    this.exhibitionService.getTags().subscribe((res) => {
      this.tags = res as Tags[];
      console.log(this.tags);
      this.exhibitionID = JSON.parse(localStorage.getItem('exhibitionID'));
      this.tagsList = this.tags.filter(
        (app) => app.exhibition.exhibitionID === this.exhibitionID
      );
      console.log('Tags: ', this.tagsList);
    });
  }

  removeArtist(removeArtistModal) {
    this.modalService.open(removeArtistModal, { centered: true });
  }

  confirmRemove(removeArtistModal) {
    this.route.navigate(['/delete-user']);
    this.modalService.dismissAll(removeArtistModal);
    this.toastr.success(
      'Artist Successfully removed from Exhibition',
      'Success'
    );
    this.toastr.info('Could not remove Artist from Exhibition', 'Info');
  }

  removeSelectedArtists(removeAllArtistModal) {
    this.modalService.open(removeAllArtistModal, { centered: true });
  }

  confirmRemoveAll(removeAllArtistModal) {
    this.route.navigate(['/delete-user']);
    this.modalService.dismissAll(removeAllArtistModal);
    this.toastr.success(
      'All Selected Artists Successfully removed from Exhibition',
      'Success'
    );
    this.toastr.info(
      'Could not remove Selected Artists from Exhibition',
      'Info'
    );
  }
}
