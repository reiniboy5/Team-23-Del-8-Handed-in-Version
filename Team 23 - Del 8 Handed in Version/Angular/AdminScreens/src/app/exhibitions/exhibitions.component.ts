import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Exhibition } from '../model/Exhibitions/exhibition';
import { ExhibitionType } from '../model/Exhibitions/exhibition-type';
import { Organisation } from '../model/Exhibitions/organisation';
import { Schedule } from '../model/Exhibitions/schedule';
import { Venue } from '../model/Exhibitions/venue';
import { ExhibitionService } from '../shared/Exhibitions/exhibition.service';

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.scss'],
})
export class ExhibitionsComponent implements OnInit {
  exhibition: Exhibition;
  searchValue: string;
  constructor(
    private route: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public exhibitionService: ExhibitionService
  ) {}

  ngOnInit(): void {
    this.resetObject();
    this.exhibitionService.getExhibitions();
  }

  resetObject() {
    this.exhibition = {
      exhibitionID: 0,
      exhibitionName: '',
      exhibitionDescription: '',
      exhibitionStartDateTime: '',
      exhibitionEndDateTime: '',
      exhibitionImage: '',
      exhibitionType: new ExhibitionType(),
      // schedule: new Schedule,
      organisation: new Organisation(),
      venue: new Venue(),
    };
  }

  onClickApplication(id: number, selectedExhibition: Exhibition) {
    localStorage.setItem('exhibitionID', JSON.stringify(id));
    this.exhibitionService.selectedExhibition = selectedExhibition;
  }

  onClickTags(id: number, selectedExhibition: Exhibition) {
    localStorage.setItem('exhibitionID', JSON.stringify(id));
    this.exhibitionService.selectedExhibition = selectedExhibition;
  }

  onClickParticipants(id: number, selectedExhibition: Exhibition) {
    localStorage.setItem('exhibitionID', JSON.stringify(id));
    this.exhibitionService.selectedExhibition = selectedExhibition;
  }

  onEditExhibition(selectedExhibition: Exhibition) {
    this.exhibitionService.selectedExhibition = selectedExhibition;
    console.log(this.exhibitionService.selectedExhibition);
  }

  onDeleteExhibition(deleteExhibitionModal) {
    this.modalService.open(deleteExhibitionModal, { centered: true });
  }

  confirmDeleteExhibition(id: number) {
    // this.route.navigate(['/exhibitions']);
    this.exhibitionService.deleteExhibition(id).subscribe((res) => {
      this.exhibitionService.getExhibitions();
      this.modalService.dismissAll();
      this.toastr.success('Exhibition Successfully Deleted', 'Success');
      // this.toastr.info('Could Not Delete Exhibition', 'Info')
    });
  }
}
