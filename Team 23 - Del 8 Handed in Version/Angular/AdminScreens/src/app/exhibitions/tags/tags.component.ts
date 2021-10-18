import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Tags } from 'src/app/model/Exhibitions/tags';
import { ExhibitionService } from 'src/app/shared/Exhibitions/exhibition.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  tags: Tags[];
  tagsList: Tags[];
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
    this.route.navigate(['/tags']);
    this.modalService.dismissAll(removeArtistModal);
    this.toastr.success(
      'Artist Successfully removed from Exhibition',
      'Success'
    );
    this.toastr.info('Could not remove Artist from Exhibition', 'Info');
  }

  public download(): void {
    let DATA = document.getElementById('pdf');

    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;

      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

      PDF.save('Tags.pdf');
    });
  }
}
