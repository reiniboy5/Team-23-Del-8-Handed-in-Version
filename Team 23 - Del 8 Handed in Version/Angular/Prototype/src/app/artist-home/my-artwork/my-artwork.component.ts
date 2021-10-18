import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-artwork',
  templateUrl: './my-artwork.component.html',
  styleUrls: ['./my-artwork.component.scss']
})
export class MyArtworkComponent implements OnInit {

  constructor(private route: Router, private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addArtwork(addArtworkModal) {
    this.modalService.open(addArtworkModal, { centered: true });

  }

  confirmArtwork(addArtworkModal){
    // this.route.navigate(['/home/art-classes']);
    this.modalService.dismissAll(addArtworkModal);
    this.toastr.success('Payment Successful', 'Success')
    this.toastr.error('Payment Unsuccessful', 'Error')

  }

}
