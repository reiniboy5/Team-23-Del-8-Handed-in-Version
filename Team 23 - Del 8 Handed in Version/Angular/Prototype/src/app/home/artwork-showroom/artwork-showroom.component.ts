import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';
import { Artwork } from '../../model/Artworks/artwork';

@Component({
  selector: 'app-artwork-showroom',
  templateUrl: './artwork-showroom.component.html',
  styleUrls: ['./artwork-showroom.component.scss'],
})
export class ArtworkShowroomComponent implements OnInit {
  listArtwork: any;
  loggedInUser: any;
  public show: boolean = false;
  public allart: boolean = false;

  constructor(
    public data: DataService,
    private route: Router,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(localStorage.getItem('LoggedinUser'));

    this.data.getAllArtwork().then((result) => {
      console.log(result);
      this.listArtwork = result;
      this.allart = true;
    });

    if (this.loggedInUser.userTypeID === 1) {
      this.show = true;
    }
  }

  addArtwork() {
    this.route.navigate(['/home/add-artwork']);
  }

  getMyArtwork() {
    this.listArtwork = this.listArtwork.filter(
      (artwk: Artwork) => artwk.userID === this.loggedInUser.userID
    );
    this.allart = false;

    console.log(this.allart);
  }

  onHint(hintModal) {
    this.modalService.open(hintModal, { centered: true });
  }
}
