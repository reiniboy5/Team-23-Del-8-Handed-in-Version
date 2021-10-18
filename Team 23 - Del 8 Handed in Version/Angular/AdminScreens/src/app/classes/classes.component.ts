import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ArtClass } from '../model/ArtClasses/art-class';
import { ArtClassType } from '../model/ArtClasses/art-class-type';
import { ClassTeacher } from '../model/ArtClasses/class-teacher';
import { Organisation } from '../model/Exhibitions/organisation';
import { Venue } from '../model/Exhibitions/venue';
import { ArtClassService } from '../shared/ArtClasses/art-class.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  constructor(private route: Router, private modalService: NgbModal, private toastr: ToastrService, public artClassService: ArtClassService) { }
  artClass: ArtClass;
  searchValue: string;
  ngOnInit(): void {
    this.resetObject();
    this.artClassService.getArtClass();
  }

  resetObject(){
    this.artClass = {
      artClassID: 0,
      artClassName: '',
      artClassDescription: '',
      artClassStartDateTime: '',
      artClassEndDateTime: '',
      artClassImage: '',
      classLimit: 0,
      refundDayLimit: 0,
      classPrice: 0,
  
      artClassType: new ArtClassType,
  
      venue: new Venue,
  
      classTeacher: new ClassTeacher,
  
      organisation: new Organisation
    }
  }

  onEditArtClass(selectedArtClass: ArtClass) {
    this.artClassService.selectedArtClass = selectedArtClass;
    console.log(this.artClassService.selectedArtClass)
  }

  onDeleteClass(deleteClassModal) {
    this.modalService.open(deleteClassModal, { centered: true });

  }

  confirmDeleteClass(id: number){
    // this.route.navigate(['/exhibitions']);
    this.artClassService.deleteArtClass(id).subscribe(res => {
      this.artClassService.getArtClass();
      this.modalService.dismissAll();
      this.toastr.success('Art Class Successfully Deleted', 'Success');
      // this.toastr.info('Could Not Delete Art Class', 'Info')
    });
  }

}
