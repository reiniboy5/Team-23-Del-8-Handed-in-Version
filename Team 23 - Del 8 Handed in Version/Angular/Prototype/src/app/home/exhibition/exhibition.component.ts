import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';
import { Exhibition } from 'src/app/model/Exhibitions/exhibition';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.scss']
})
export class ExhibitionComponent implements OnInit {


  listexhibition: Array<Exhibition> = [];
  exhibition: Exhibition;
  public showApply:boolean = false;
  loggedInuser: any;

  constructor(public data: DataService,private formBuilder: FormBuilder,private fb: FormBuilder, 
    private toastr: ToastrService, private router: Router,private calendar: NgbCalendar) { }

  ngOnInit(): void {

    this.exhibition = JSON.parse(localStorage.getItem('SelectedExhibition'));

    this.loggedInuser = JSON.parse(localStorage.getItem('LoggedinUser'));

    if(this.loggedInuser.userID == 1){
      
      this.showApply = true;

    }

    this.listexhibition.push(this.exhibition);

    console.log(this.listexhibition);

   
  }

  applyForExhibition(exhibition){

  console.log(exhibition);
  this.router.navigate(['/home/apply-exhibition']);

  }



}
