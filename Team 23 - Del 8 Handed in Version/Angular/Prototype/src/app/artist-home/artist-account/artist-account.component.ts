import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-artist-account',
  templateUrl: './artist-account.component.html',
  styleUrls: ['./artist-account.component.scss']
})
export class ArtistAccountComponent implements OnInit {

  constructor(private route: Router, private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onUpdateArtist(updateArtistModal) {
    this.modalService.open(updateArtistModal, { centered: true });
  }

  submitUpdateArtist (updateArtistModal) {
    this.route.navigate(['/artist-home']);
    this.modalService.dismissAll(updateArtistModal);
    this.toastr.success('Update Artist Profile Successful', 'Success')
    this.toastr.error('Could Not Update Profile', 'Error')

  }

}